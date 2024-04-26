import{_ as n,o as s,c as a,a as e}from"./app-BQhb0Pt0.js";const o={},t=e(`<p>在tsconfig.json文件中，可以指定不同的选项来告诉编译器如何编译当前项目。tsconfig.json文件所处位置是TypeScript项目的根目录。</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token comment">// 常用配置</span>
<span class="token punctuation">{</span>
  <span class="token comment">/*
      tsconfig.json是ts编译器的配置文件，ts可以根据它的信息来对待吗进行编译 可以再tsconfig中写注释
      include : 用来指定哪些文件需要被编译
      exclude : 用来指定哪些文件不需要被编译 ：默认node_module
      extends : 用来指定继承的配置文件
      files   : 用来指定被编译的文件列表，只有编译少量文件才使用
      compilerOptions : 编译器的选项是配置文件中非常重要也是非常复杂的配置选项
  */</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token comment">// ** : 任意目录 ， * : 任意文件</span>
    <span class="token string">&quot;./src/**/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;./src/hello/**/*&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// &quot;extends&quot;: &quot;./configs/base&quot;,</span>
  <span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;1.ts&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;2.ts&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 用来指定 ES 版本 ESNext : 最新版。 &#39;ES3&#39;, &#39;ES5&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ES2019&#39;, &#39;ES2020&#39;, &#39;ESNext&#39;</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES2020&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 指定要使用模块化的规范 : &#39;None&#39;, &#39;CommonJS&#39;, &#39;AMD&#39;, &#39;System&#39;, &#39;UMD&#39;, &#39;ES6&#39;/&#39;ES2015&#39;, &#39;ES2020&#39; or &#39;ESNext&#39;</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ESNext&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 用来指定项目中要使用的库 &#39;ES5&#39;, &#39;ES6&#39;, &#39;ES2015&#39;, &#39;ES7&#39;, &#39;ES2016&#39;, &#39;ES2017&#39;, &#39;ES2018&#39;, &#39;ESNext&#39;, &#39;DOM&#39;, &#39;DOM.Iterable&#39;,</span>
    <span class="token comment">//                          &#39;WebWorker&#39;, &#39;ScriptHost&#39;, &#39;ES2015.Core&#39;, &#39;ES2015.Collection&#39;, &#39;ES2015.Generator&#39;, &#39;ES2015.Iterable&#39;, </span>
    <span class="token comment">//                          &#39;ES2015.Promise&#39;, &#39;ES2015.Proxy&#39;, &#39;ES2015.Reflect&#39;, &#39;ES2015.Symbol&#39;, &#39;ES2015.Symbol.WellKnown&#39;, </span>
    <span class="token comment">//                          &#39;ES2016.Array.Include&#39;, &#39;ES2017.object&#39;, &#39;ES2017.Intl&#39;, &#39;ES2017.SharedMemory&#39;, &#39;ES2017.String&#39;, </span>
    <span class="token comment">//                          &#39;ES2017.TypedArrays&#39;, &#39;ES2018.Intl&#39;, &#39;ES2018.Promise&#39;, &#39;ES2018.RegExp&#39;, &#39;ESNext.AsyncIterable&#39;, </span>
    <span class="token comment">//                          &#39;ESNext.Array&#39;, &#39;ESNext.Intl&#39;, &#39;ESNext.Symbol&#39;</span>
    <span class="token comment">// 运行在浏览器中不用设置，运行在node或其他中才需要设置</span>
    <span class="token comment">// &quot;lib&quot;:[]，</span>
    <span class="token comment">// 用来指定编译后文件的存放位置</span>
    <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span><span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 将代码合并为一个文件,设置之后所有的全局作用域中的代码会合并到同一个文件中 但是只能在  &#39;amd&#39; and &#39;system&#39; 中才能使用</span>
    <span class="token comment">// &quot;outFile&quot;: &quot;./dist/app.js&quot;,</span>
    <span class="token comment">// 是否对js文件进行编译，默认false</span>
    <span class="token property">&quot;allowJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否检查js代码是否符合语法规范，默认false</span>
    <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否移除注释，默认false</span>
    <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否不生成编译后文件，默认false</span>
    <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 当有错误时是否生成文件，默认false</span>
    <span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否生成sourceMap，默认false  这个文件里保存的，是转换后代码的位置，和对应的转换前的位置。有了它，出错的时候，通过断点工具可以直接显示原始代码，而不是转换后的代码。</span>
    <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">// 所有的严格检查的总开关，默认false</span>
    <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 编译后的文件是否开启严格模式，默认false</span>
    <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 不允许隐式的any，默认false(允许)</span>
    <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 不允许隐式的this，默认false(允许)</span>
    <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否严格的检查空值，默认false 检查有可能为null的地方</span>
    <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否严格检查bind、call和apply的参数列表，默认false  检查是否有多余参数</span>
    <span class="token property">&quot;strictBindCallApply&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否严格检查函数的类型，</span>
    <span class="token property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否严格检查属性是否初始化，默认false</span>
    <span class="token property">&quot;strictPropertyInitialization&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">// 是否检查switch语句包含正确的break，默认false</span>
    <span class="token property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 检查函数没有隐式的返回值，默认false</span>
    <span class="token property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否检查检查未使用的局部变量，默认false</span>
    <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// 是否检查未使用的参数，默认false</span>
    <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>

    <span class="token comment">// 是否检查不可达代码报错，默认false   true，忽略不可达代码 false，不可达代码将引起错误</span>
    <span class="token property">&quot;allowUnreachableCode&quot;</span><span class="token operator">:</span><span class="token boolean">false</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[t];function l(c,i){return s(),a("div",null,p)}const u=n(o,[["render",l],["__file","tsconfig.json说明.html.vue"]]),d=JSON.parse('{"path":"/guide/TypeScript/tsconfig.json%E8%AF%B4%E6%98%8E.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[],"git":{},"filePathRelative":"guide/TypeScript/tsconfig.json说明.md"}');export{u as comp,d as data};
