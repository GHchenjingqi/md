import{_ as a,o as n,c as e,a as s}from"./app-CxsuIw-e.js";const t={},p=s(`<h2 id="object-对象描述操作" tabindex="-1"><a class="header-anchor" href="#object-对象描述操作"><span>Object 对象描述操作</span></a></h2><p>对象的属性描述由6部分组成：</p><ul><li>value 值</li><li>writable 是否能重写</li><li>enumerable 是否可遍历</li><li>configurable 描述是否可修改</li></ul><p>另外每个对象都有自己的获取器和修改器：</p><ul><li>getter 函数</li><li>setter 函数</li></ul><p>###getOwnPropertyDescriptor 获取对象属性的描述</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="getownpropertydescriptors-获取对象的描述" tabindex="-1"><a class="header-anchor" href="#getownpropertydescriptors-获取对象的描述"><span>getOwnPropertyDescriptors 获取对象的描述</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="defineproperty-设置属性描述符" tabindex="-1"><a class="header-anchor" href="#defineproperty-设置属性描述符"><span>defineProperty 设置属性描述符</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span>a<span class="token punctuation">,</span><span class="token punctuation">{</span>
	<span class="token literal-property property">writable</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
	<span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="freeze-对象冻结" tabindex="-1"><a class="header-anchor" href="#freeze-对象冻结"><span>freeze 对象冻结</span></a></h3><p>冻结之后属性不可新增，删除，修改。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token comment">// 冻结原型，不允许新增原型</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span><span class="token class-name">GOOD</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="seal-对象封闭" tabindex="-1"><a class="header-anchor" href="#seal-对象封闭"><span>seal 对象封闭</span></a></h3><p>封闭的对象不允许添加和删除属性！但是已有属性可以修改。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">seal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,17),i=[p];function l(c,r){return n(),e("div",null,i)}const u=a(t,[["render",l],["__file","对象描述符.html.vue"]]),d=JSON.parse(`{"path":"/guide/JavaScript/%E5%AF%B9%E8%B1%A1%E6%8F%8F%E8%BF%B0%E7%AC%A6.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"Object 对象描述操作","slug":"object-对象描述操作","link":"#object-对象描述操作","children":[{"level":3,"title":"getOwnPropertyDescriptors 获取对象的描述","slug":"getownpropertydescriptors-获取对象的描述","link":"#getownpropertydescriptors-获取对象的描述","children":[]},{"level":3,"title":"defineProperty 设置属性描述符","slug":"defineproperty-设置属性描述符","link":"#defineproperty-设置属性描述符","children":[]},{"level":3,"title":"freeze 对象冻结","slug":"freeze-对象冻结","link":"#freeze-对象冻结","children":[]},{"level":3,"title":"seal 对象封闭","slug":"seal-对象封闭","link":"#seal-对象封闭","children":[]}]}],"git":{"updatedTime":1712798294000,"contributors":[{"name":"陈小知","email":"cjq314@qq.com","commits":1}]},"filePathRelative":"guide/JavaScript/对象描述符.md","excerpt":"<h2>Object 对象描述操作</h2>\\n<p>对象的属性描述由6部分组成：</p>\\n<ul>\\n<li>value 值</li>\\n<li>writable  是否能重写</li>\\n<li>enumerable 是否可遍历</li>\\n<li>configurable 描述是否可修改</li>\\n</ul>\\n<p>另外每个对象都有自己的获取器和修改器：</p>\\n<ul>\\n<li>getter 函数</li>\\n<li>setter 函数</li>\\n</ul>\\n<p>###getOwnPropertyDescriptor 获取对象属性的描述</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>Object<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getOwnPropertyDescriptor</span><span class=\\"token punctuation\\">(</span>obj<span class=\\"token punctuation\\">,</span><span class=\\"token string\\">'a'</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>"}`);export{u as comp,d as data};
