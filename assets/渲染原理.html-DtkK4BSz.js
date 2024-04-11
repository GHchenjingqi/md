import{_ as a,o as e,c as n,a as s}from"./app-DFbXBJNa.js";const t={},r=s(`<h2 id="渲染原理" tabindex="-1"><a class="header-anchor" href="#渲染原理"><span>渲染原理</span></a></h2><p>浏览器渲染：简单的说就是将 html字符串渲染成像素。</p><h3 id="浏览器是如何渲染页面的-从输入网址到页面正常展示-浏览器做了什么" tabindex="-1"><a class="header-anchor" href="#浏览器是如何渲染页面的-从输入网址到页面正常展示-浏览器做了什么"><span>浏览器是如何渲染页面的？从输入网址到页面正常展示，浏览器做了什么？</span></a></h3><p>当浏览器的网络线程通过网络通信收到HTML文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列中，在事件循环机制作用下，渲染主线程取出消息队列的渲染任务进行渲染。</p><p>整个渲染阶段分为8部分：html解析，样式计算，布局，分层，绘制，分块，光栅格，画。最后生成浏览器显示屏的像素点。</p><h4 id="_1-html解析" tabindex="-1"><a class="header-anchor" href="#_1-html解析"><span>1.HTML解析</span></a></h4><p>html解析（parse Html），将字符串转换成 DOM树对象；遇到CSS代码，浏览器启动一个预解析器 转成css树对象 。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>##### 为什么css不会阻塞html解析？

如何线程解析到link为止，此时外部的css文件还没下载好，主线程不会等待，会继续解析后续的html。因为下载和解析CSS的工作是在预解析线程中进行的，不是同一个线程。

##### html解析遇到js代码会怎么处理？

渲染进程遇到js时，必须暂停一切行为，等待下载执行完成后才能继续解析html。因为js代码有可能改动DOM树。在下载js时，预解析线程可以分摊js下载任务。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-样式计算" tabindex="-1"><a class="header-anchor" href="#_2-样式计算"><span>2.样式计算</span></a></h4><p>主线程会遍历DOM树对象，一次为每个节点计算出它的最终样式，被称作 “computed style&quot;。在这一过程，相对单位会变成绝对单位（em变px)，很多预设值会变成绝对值(red变成rgb(255,0,0))。</p><p>这一步完成之后会得到一个带有样式的DOM树。</p><p>js 通过 getComputedStyle() 获取最终样式。</p><h4 id="_3-布局-layout" tabindex="-1"><a class="header-anchor" href="#_3-布局-layout"><span>3.布局 - layout</span></a></h4><p>布局阶段会依次遍历 DOM 树的每一个节点，计算每个节点的几何信息。例如节点的宽高、相对包含块的位置。</p><p>布局树和DOM树不一定一一对应，对于隐藏的dom节点，布局树不显示。</p><h4 id="_4-分层-layer" tabindex="-1"><a class="header-anchor" href="#_4-分层-layer"><span>4.分层 - layer</span></a></h4><p>主线程会使用一套复杂的策略对整个布局树中进行分层。</p><p>分层的好处在于，将来某一个层改变后，仅会对该层进行后续处理，从而提升效率。</p><p>滚动条、堆叠上下文z-index、transform、opacity 等样式都会或多或少的影响分层结果，也可以通过<code>will-change</code>属性更大程度的影响分层结果。</p><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">.box</span><span class="token punctuation">{</span>
    <span class="token comment">/**/</span> 告诉浏览器需要分层
	<span class="token property">will-change</span><span class="token punctuation">:</span> transform
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-绘制" tabindex="-1"><a class="header-anchor" href="#_5-绘制"><span>5.绘制</span></a></h4><p>为每一分层生成<strong>如何绘制的指令</strong>。渲染主线程的工作到此结束，剩下的交给其他线程完成。</p><h4 id="_6-分块-tiling" tabindex="-1"><a class="header-anchor" href="#_6-分块-tiling"><span>6.分块 - Tiling</span></a></h4><p>分块会将每一层分成多个小的区域，分块工作会启动多个线程同时进行。</p><h4 id="_7-光栅化-raster" tabindex="-1"><a class="header-anchor" href="#_7-光栅化-raster"><span>7.光栅化 - raster</span></a></h4><p>光删化，是将每个分块变成位图，优先处理靠近视口区域，此过程会用到GPU加速。</p><h4 id="_8-画-draw" tabindex="-1"><a class="header-anchor" href="#_8-画-draw"><span>8.画 - Draw</span></a></h4><p><strong>合成线程</strong>计算出每个位图在屏幕的位置，会生成一个个的指引信息（包含位图的位置，旋转，变形等信息），最后交于GPU进程，让GPU完成最终成像工作。</p><h3 id="什么是回流-reflow" tabindex="-1"><a class="header-anchor" href="#什么是回流-reflow"><span>什么是回流（ reflow）？</span></a></h3><p>回流的本质是 重新计算布局(layout)树。当布局树发生改变之后，可能影响到分层及绘制等其他渲染阶段。</p><p>未了避免布局树反复计算，浏览器会在js代码全部完成后再统一计算。所以，改动属性造成的回流reflow是异步的。这样也会造成js获取布局属性时，可能获取到的不是最新的布局信息。</p><h3 id="什么是重绘-repaint" tabindex="-1"><a class="header-anchor" href="#什么是重绘-repaint"><span>什么是重绘（repaint）？</span></a></h3><p>重绘的本质是重新根据分层信息计算绘制指令。</p><p>当改变可见样式后，就需要重新计算，触发重绘。</p><p>由于元素的布局信息属于可见样式，所以回流一定会引起重绘！！！</p><h3 id="为什么-transform效率那么高" tabindex="-1"><a class="header-anchor" href="#为什么-transform效率那么高"><span>为什么 transform效率那么高？</span></a></h3><ul><li><p>1.因为transform 既不影响布局也不影响绘制，影响了渲染阶段的第八步画draw的阶段。</p></li><li><p>2.画的阶段在<strong>合成线程</strong>中，transform 变化不会影响渲染主线程。同样的渲染主线程再卡顿也不会影响到 transform 属性的变化。</p></li></ul>`,37),l=[r];function i(p,d){return e(),n("div",null,l)}const h=a(t,[["render",i],["__file","渲染原理.html.vue"]]),o=JSON.parse('{"path":"/guide/JavaScript/%E6%B8%B2%E6%9F%93%E5%8E%9F%E7%90%86.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"渲染原理","slug":"渲染原理","link":"#渲染原理","children":[{"level":3,"title":"浏览器是如何渲染页面的？从输入网址到页面正常展示，浏览器做了什么？","slug":"浏览器是如何渲染页面的-从输入网址到页面正常展示-浏览器做了什么","link":"#浏览器是如何渲染页面的-从输入网址到页面正常展示-浏览器做了什么","children":[]},{"level":3,"title":"什么是回流（ reflow）？","slug":"什么是回流-reflow","link":"#什么是回流-reflow","children":[]},{"level":3,"title":"什么是重绘（repaint）？","slug":"什么是重绘-repaint","link":"#什么是重绘-repaint","children":[]},{"level":3,"title":"为什么 transform效率那么高？","slug":"为什么-transform效率那么高","link":"#为什么-transform效率那么高","children":[]}]}],"git":{"updatedTime":1712798294000,"contributors":[{"name":"陈小知","email":"cjq314@qq.com","commits":1}]},"filePathRelative":"guide/JavaScript/渲染原理.md","excerpt":"<h2>渲染原理</h2>\\n<p>浏览器渲染：简单的说就是将 html字符串渲染成像素。</p>\\n<h3>浏览器是如何渲染页面的？从输入网址到页面正常展示，浏览器做了什么？</h3>\\n<p>当浏览器的网络线程通过网络通信收到HTML文档后，会产生一个渲染任务，并将其传递给渲染主线程的消息队列中，在事件循环机制作用下，渲染主线程取出消息队列的渲染任务进行渲染。</p>\\n<p>整个渲染阶段分为8部分：html解析，样式计算，布局，分层，绘制，分块，光栅格，画。最后生成浏览器显示屏的像素点。</p>\\n<h4>1.HTML解析</h4>\\n<p>html解析（parse Html），将字符串转换成 DOM树对象；遇到CSS代码，浏览器启动一个预解析器 转成css树对象 。</p>"}');export{h as comp,o as data};
