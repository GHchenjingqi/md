import{_ as n,o as a,c as s,a as e}from"./app-C8QvFSbi.js";const t={},p=e(`<h3 id="app生命周期" tabindex="-1"><a class="header-anchor" href="#app生命周期"><span>App生命周期</span></a></h3><ul><li>onLaunch - 初始化</li><li>onShow - 显示时</li><li>onHide - 隐藏时</li><li>onError - 异常时</li></ul><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量"><span>全局变量</span></a></h3><p>在app.js的globalData对象里面定义:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// app.js</span>
<span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">globalData</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">userInfo</span><span class="token operator">:</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面生命周期" tabindex="-1"><a class="header-anchor" href="#页面生命周期"><span>页面生命周期</span></a></h3><p>页面的生命周期钩子函数都必须放在Page函数里面。</p><ul><li>onLoad - 页面加载时</li><li>onReady - 初次渲染时</li><li>onShow - 页面显示时</li><li>onHide - 页面隐藏时</li><li>onUnload - 页面卸载时</li></ul><p>页面事件回调钩子</p><ul><li>onPullDownRefresh - 页面下拉时</li><li>onReachBottom - 页面上拉触底时</li><li>onShareAppMessage - 点击右上角分享时</li></ul><p>组件内更新页面数据使用 <strong>setData</strong>方法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token punctuation">(</span>wx<span class="token punctuation">.</span><span class="token function">getStorageSync</span><span class="token punctuation">(</span><span class="token string">&#39;logs&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">log</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">date</span><span class="token operator">:</span> util<span class="token punctuation">.</span><span class="token function">formatTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>log<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
          <span class="token literal-property property">timeStamp</span><span class="token operator">:</span> log
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件内使用<strong>require</strong>引入js文件</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> util <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;../../utils/util&quot;</span><span class="token punctuation">)</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="小程序跳转" tabindex="-1"><a class="header-anchor" href="#小程序跳转"><span>小程序跳转</span></a></h3><ul><li><p>wx.navigateTo 入栈跳转，页面未销毁，可以使用wx.navigateBack 返回来源页面</p></li><li><p>wx.redirectTo 重定向跳转，关闭当前页面</p></li><li><p>wx.switchTab tab页面跳转方式</p></li><li><p>wx.reLaunch 关闭所有页面，可以携带参数跳转任意页面</p></li><li><p>使用 navigator a链接跳转</p></li></ul><h3 id="小程序获取html数据" tabindex="-1"><a class="header-anchor" href="#小程序获取html数据"><span>小程序获取html数据</span></a></h3><p>html通过data-自定义属性设置动态参数，在事件里面通过e.currentTarget.dataset.url 获取url属性。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>view  data<span class="token operator">-</span>url<span class="token operator">=</span><span class="token string">&quot;{{itme.path}}&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">&gt;</span>
<span class="token comment">// 获取url: e.currentTarget.dataset.url</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="页面路径传参" tabindex="-1"><a class="header-anchor" href="#页面路径传参"><span>页面路径传参</span></a></h3><p>页面传参</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;../list/index?md=&#39;</span><span class="token operator">+</span>files<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接收页面</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>md<span class="token punctuation">}</span> <span class="token operator">=</span> options
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="image-的mode类型" tabindex="-1"><a class="header-anchor" href="#image-的mode类型"><span>image 的mode类型</span></a></h3><p><strong>缩放</strong></p><p>scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素</p><p>aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来</p><p>aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。</p><p>widthFix 宽度不变，高度自动变化，保持原图宽高比不变</p><p><strong>裁剪</strong></p><p>top 不缩放图片，只显示图片的顶部区域</p><p>bottom 不缩放图片，只显示图片的底部区域</p><p>center 不缩放图片，只显示图片的中间区域</p><p>left 不缩放图片，只显示图片的左边区域</p><p>right 不缩放图片，只显示图片的右边区域</p><p>top left 不缩放图片，只显示图片的左上边区域</p><p>top right 不缩放图片，只显示图片的右上边区域</p><p>bottom left 不缩放图片，只显示图片的左下边区域</p><p>bottom right 不缩放图片，只显示图片的右下边区域</p><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h3><h4 id="_1-小程序体积不得超过2m-超过如何处理" tabindex="-1"><a class="header-anchor" href="#_1-小程序体积不得超过2m-超过如何处理"><span>1.小程序体积不得超过2M，超过如何处理？</span></a></h4><p>超过2M，上传打包会失败！</p><p>解决办法：在项目配置里排除指定目录（静态资源目录）project.config.json (注意：排除后的文件不会上传)</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;packOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span><span class="token string-property property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;folder&quot;</span><span class="token punctuation">,</span><span class="token string-property property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;assets/uploads&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-bindtap和catchtap的区别是什么" tabindex="-1"><a class="header-anchor" href="#_2-bindtap和catchtap的区别是什么"><span>2.bindtap和catchtap的区别是什么?</span></a></h4><p><strong>相同点</strong>：首先他们都是作为点击事件函数，就是点击时触发。在这个作用上他们是一样的，可以不做区分 <strong>不同点</strong>：他们的不同点主要是bindtap是不会阻止冒泡事件的，catchtap是阻值冒泡的</p><h4 id="_3-小程序页面之间传递参数的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_3-小程序页面之间传递参数的方法有哪些"><span>3.小程序页面之间传递参数的方法有哪些？</span></a></h4><ul><li>1.使用全局变量</li><li>2.页面跳转或者重定向使用<code>url</code>传参数</li><li>3.父组件通过属性传递数据，子组件通过 properties 对象接收父传参属性。子组件也可以通过 triggerEvent 方法触发父组件方法传递参数（类似vue emit)。</li></ul><h4 id="_4-小程序关联微信公众号如何确定用户的唯一性" tabindex="-1"><a class="header-anchor" href="#_4-小程序关联微信公众号如何确定用户的唯一性"><span>4.小程序关联微信公众号如何确定用户的唯一性</span></a></h4><p>使用 <code>wx.getUserInfo </code>方法 <code>withCredentials</code> 为 <code>true</code> 时 可获取 加密信息&lt;<code>encryptedData</code>，里面有 <code>union_id</code>。后端需要进行对称解密。</p><h4 id="_5-小程序对wx-if-和-hidden使用的理解" tabindex="-1"><a class="header-anchor" href="#_5-小程序对wx-if-和-hidden使用的理解"><span>5.小程序对wx:if 和 hidden使用的理解？</span></a></h4><ul><li><p><code>wx:if </code>有更高的切换消耗。</p></li><li><p><code>hidden</code> 有更高的初始渲染消耗。</p><p>因此，如果需要频繁切换的情景下，用 <code>hidden</code> 更好，如果在运行时条件不大可能改变则<code> wx:if</code> 较好。</p></li></ul><h4 id="_6-webview中的页面怎么跳回小程序中" tabindex="-1"><a class="header-anchor" href="#_6-webview中的页面怎么跳回小程序中"><span>6.<code>webview</code>中的页面怎么跳回小程序中？</span></a></h4><p>引入 jweixin.js 文件，然后再通过 miniProgram调用navigateTo跳转方式。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>wx.miniProgram.navigateTo({
	url: &#39;/pages/login/login&#39;+&#39;$params&#39;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果跳转到tab标签页面，需要配合 switchTab 跳转。</p><h4 id="_7-如何实现下来刷新" tabindex="-1"><a class="header-anchor" href="#_7-如何实现下来刷新"><span>7.如何实现下来刷新</span></a></h4><p>首先在全局 <code>config</code> 中的 <code>window </code>配置 <code>enablePullDownRefresh</code> ，在 <code>Page</code> 中定义<code> onPullDownRefresh</code> 钩子函数,到达下拉刷新条件后，该钩子函数执行，发起请求方法 请求返回后，调用<code>wx.stopPullDownRefresh </code>停止下拉刷新。</p>`,59),o=[p];function l(i,c){return a(),s("div",null,o)}const u=n(t,[["render",l],["__file","微信小程序.html.vue"]]),d=JSON.parse('{"path":"/guide/%E5%B0%8F%E7%A8%8B%E5%BA%8F/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"App生命周期","slug":"app生命周期","link":"#app生命周期","children":[]},{"level":3,"title":"全局变量","slug":"全局变量","link":"#全局变量","children":[]},{"level":3,"title":"页面生命周期","slug":"页面生命周期","link":"#页面生命周期","children":[]},{"level":3,"title":"小程序跳转","slug":"小程序跳转","link":"#小程序跳转","children":[]},{"level":3,"title":"小程序获取html数据","slug":"小程序获取html数据","link":"#小程序获取html数据","children":[]},{"level":3,"title":"页面路径传参","slug":"页面路径传参","link":"#页面路径传参","children":[]},{"level":3,"title":"image 的mode类型","slug":"image-的mode类型","link":"#image-的mode类型","children":[]},{"level":3,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"guide/小程序/微信小程序.md","excerpt":"<h3>App生命周期</h3>\\n<ul>\\n<li>onLaunch - 初始化</li>\\n<li>onShow - 显示时</li>\\n<li>onHide - 隐藏时</li>\\n<li>onError - 异常时</li>\\n</ul>\\n<h3>全局变量</h3>\\n<p>在app.js的globalData对象里面定义:</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">// app.js</span>\\n<span class=\\"token function\\">App</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token literal-property property\\">globalData</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token literal-property property\\">userInfo</span><span class=\\"token operator\\">:</span> <span class=\\"token keyword\\">null</span>\\n  <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}');export{u as comp,d as data};
