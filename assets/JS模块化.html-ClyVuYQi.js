import{_ as n,o as s,c as a,a as t}from"./app-C8QvFSbi.js";const p={},e=t(`<h2 id="js模块化" tabindex="-1"><a class="header-anchor" href="#js模块化"><span>JS模块化</span></a></h2><h3 id="_1-模块化背景" tabindex="-1"><a class="header-anchor" href="#_1-模块化背景"><span>1.模块化背景</span></a></h3><ul><li>CommonJS，2009年Mozilla工程师提出的CommonJS规范，同年<strong>Nodejs</strong>基于CommonJS应用而生。（Node端同步方案）</li><li>AMD，2010年美国程序员开发了Require.js，并发布了AMD规范。（浏览器端异步方案，为了解决<strong>JS加载顺序</strong>先后导致异常问题）</li><li>CMD，2011年支付宝前端玉伯开发了 Sea.js，并发布了CMD规范。浏览器端异步方案，写法更优雅。</li><li>ES6模块化，2015年EMCScript官方发布了ES6模块化及其规范。Node和浏览器端都支持（需要通过babel转换）！</li></ul><p>无论是CommonJS，AMD还是CMD 都是为了前端模块化的发展做了贡献，如同JQuery一样，倒逼着官方进步。正是由于它们的存在，前端发展才更加完善。随着前端三剑客（react,vue,angular)的出现，无论是AMD还是CMD，还是JQuery都成为了历史。</p><h3 id="_2-commonjs规范" tabindex="-1"><a class="header-anchor" href="#_2-commonjs规范"><span>2.CommonJS规范</span></a></h3><p>基于Node环境，代码案例：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// math.js 模块文件</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">sub</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// CommonJS 导出规范</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    add<span class="token punctuation">,</span>sub
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入及使用模块文件：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">const</span> math <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./math.js&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> res <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-amd-规范" tabindex="-1"><a class="header-anchor" href="#_3-amd-规范"><span>3.AMD 规范</span></a></h3><p>浏览器端使用 require.js(https://requirejs.org/) ，常用于多页面应用，代码案例：</p><p>a.html页面引入requirejs</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My Sample Project<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- data-main 需要加载的AMDjs文件  --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">data-main</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scripts/main<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>js/require.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>My Sample Project<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.main入口文件配置</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
require<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">baseUrl</span><span class="token operator">:</span> <span class="token string">&quot;/js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 入口目录</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 相对于js目录的位置及文件名，不需要加js后缀</span>
        <span class="token string-property property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../lib/jquery.min&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 引入js模块文件</span>
<span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;index.js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>c.定义模块</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// js模块定义
define([&#39;jquery&#39;],function($){
	// jquery加载完之后，执行函数
	$(&#39;btn&#39;).click(function(){
		alert(&quot;AMD&quot;)
	})
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-cmd-规范" tabindex="-1"><a class="header-anchor" href="#_4-cmd-规范"><span>4.CMD 规范</span></a></h3><p>浏览器端，使用sea.js （https://seajs.github.io/seajs/docs/）代码实例：</p><p>a.页面引入</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">doctype</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Hello Sea.js<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>../sea-modules/seajs/seajs/2.2.0/sea.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token comment">// Set configuration</span>
  seajs<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">&quot;../sea-modules/&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jquery/jquery/1.10.1/jquery.js&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 使用文件</span>
  seajs<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&quot;examples/hello/1.0.0/main&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.main定义模块</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 所有模块都通过 define 来定义</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 通过 require 引入依赖</span>
  <span class="token keyword">var</span> $ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> Spinning <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./spinning&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 通过 exports 对外提供接口</span>
  exports<span class="token punctuation">.</span>doSomething <span class="token operator">=</span> <span class="token operator">...</span>

  <span class="token comment">// 或者通过 module.exports 提供整个接口</span>
  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token operator">...</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-es6模块化" tabindex="-1"><a class="header-anchor" href="#_5-es6模块化"><span>5.ES6模块化</span></a></h3><p>目前无论node端还是浏览器端，使用ES6模块化都需要将js进行babel转换成es5的写法，环境才可正常运行。</p>`,25),l=[e];function o(c,i){return s(),a("div",null,l)}const r=n(p,[["render",o],["__file","JS模块化.html.vue"]]),d=JSON.parse('{"path":"/guide/JavaScript/JS%E6%A8%A1%E5%9D%97%E5%8C%96.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"JS模块化","slug":"js模块化","link":"#js模块化","children":[{"level":3,"title":"1.模块化背景","slug":"_1-模块化背景","link":"#_1-模块化背景","children":[]},{"level":3,"title":"2.CommonJS规范","slug":"_2-commonjs规范","link":"#_2-commonjs规范","children":[]},{"level":3,"title":"3.AMD 规范","slug":"_3-amd-规范","link":"#_3-amd-规范","children":[]},{"level":3,"title":"4.CMD 规范","slug":"_4-cmd-规范","link":"#_4-cmd-规范","children":[]},{"level":3,"title":"5.ES6模块化","slug":"_5-es6模块化","link":"#_5-es6模块化","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"guide/JavaScript/JS模块化.md","excerpt":"<h2>JS模块化</h2>\\n<h3>1.模块化背景</h3>\\n<ul>\\n<li>CommonJS，2009年Mozilla工程师提出的CommonJS规范，同年<strong>Nodejs</strong>基于CommonJS应用而生。（Node端同步方案）</li>\\n<li>AMD，2010年美国程序员开发了Require.js，并发布了AMD规范。（浏览器端异步方案，为了解决<strong>JS加载顺序</strong>先后导致异常问题）</li>\\n<li>CMD，2011年支付宝前端玉伯开发了 Sea.js，并发布了CMD规范。浏览器端异步方案，写法更优雅。</li>\\n<li>ES6模块化，2015年EMCScript官方发布了ES6模块化及其规范。Node和浏览器端都支持（需要通过babel转换）！</li>\\n</ul>"}');export{r as comp,d as data};
