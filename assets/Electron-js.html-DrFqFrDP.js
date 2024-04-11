import{_ as n,o as s,c as a,a as e}from"./app-C8QvFSbi.js";const p={},t=e(`<h2 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件"><span>前提条件</span></a></h2><p>1.安装node.js，查看方式</p><p><code>node -v</code></p><p><code>npm -v </code></p><h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><h3 id="_1-初始化安装-需要注意入口文件为-main-js-默认安装入口为-index-js" tabindex="-1"><a class="header-anchor" href="#_1-初始化安装-需要注意入口文件为-main-js-默认安装入口为-index-js"><span>1.初始化安装，需要注意入口文件为 main.js（默认安装入口为：index.js)</span></a></h3><p><code>npm init</code></p><h3 id="_2-安装依赖" tabindex="-1"><a class="header-anchor" href="#_2-安装依赖"><span>2.安装依赖</span></a></h3><p><code>npm install electron --save-dev </code></p><p><em>或</em></p><p><code>yarn add electron</code></p><p><em>或</em></p><p><code>cnpm install --save-dev electron</code></p><h3 id="_3-修改package-json文件" tabindex="-1"><a class="header-anchor" href="#_3-修改package-json文件"><span>3.修改package.json文件</span></a></h3><p>环境改为“devDependencies”，以及入口命令改为 &quot;electron .&quot;。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token string-property property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;electron .&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-新建入口文件main-js-和index-html" tabindex="-1"><a class="header-anchor" href="#_4-新建入口文件main-js-和index-html"><span>4.新建入口文件main.js 和index.html</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>main<span class="token punctuation">.</span>js配置以下代码：

<span class="token keyword">const</span> <span class="token punctuation">{</span> app<span class="token punctuation">,</span> BrowserWindow <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">createWindow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">800</span><span class="token punctuation">,</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">600</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    win<span class="token punctuation">.</span><span class="token function">loadFile</span><span class="token punctuation">(</span><span class="token string">&#39;index.html&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">whenReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-启动应用" tabindex="-1"><a class="header-anchor" href="#_5-启动应用"><span>5.启动应用</span></a></h3><p><code>npm run start</code></p><p>这样就启动了一个简单的应用了。</p><h2 id="打包步骤" tabindex="-1"><a class="header-anchor" href="#打包步骤"><span>打包步骤</span></a></h2><p>官方打包工具需要node最低版本是14x，不然导入打包工具时会报错。以下是node的各个版本地址，下载指定版本安装即可完成升级或降级：</p><p>安装打包工具</p><p><code>npm install --save-dev @electron-forge/cli</code></p><p><code>npx electron-forge import</code></p><p>打包命令</p><p><code>npm run make</code></p>`,28),o=[t];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","Electron-js.html.vue"]]),u=JSON.parse('{"path":"/guide/Electron/Electron-js.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"前提条件","slug":"前提条件","link":"#前提条件","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"1.初始化安装，需要注意入口文件为 main.js（默认安装入口为：index.js)","slug":"_1-初始化安装-需要注意入口文件为-main-js-默认安装入口为-index-js","link":"#_1-初始化安装-需要注意入口文件为-main-js-默认安装入口为-index-js","children":[]},{"level":3,"title":"2.安装依赖","slug":"_2-安装依赖","link":"#_2-安装依赖","children":[]},{"level":3,"title":"3.修改package.json文件","slug":"_3-修改package-json文件","link":"#_3-修改package-json文件","children":[]},{"level":3,"title":"4.新建入口文件main.js 和index.html","slug":"_4-新建入口文件main-js-和index-html","link":"#_4-新建入口文件main-js-和index-html","children":[]},{"level":3,"title":"5.启动应用","slug":"_5-启动应用","link":"#_5-启动应用","children":[]}]},{"level":2,"title":"打包步骤","slug":"打包步骤","link":"#打包步骤","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"guide/Electron/Electron-js.md","excerpt":"<h2>前提条件</h2>\\n<p>1.安装node.js，查看方式</p>\\n<p><code>node -v</code></p>\\n<p><code>npm -v </code></p>\\n<h2>安装步骤</h2>\\n<h3>1.初始化安装，需要注意入口文件为 main.js（默认安装入口为：index.js)</h3>\\n<p><code>npm init</code></p>\\n<h3>2.安装依赖</h3>\\n<p><code>npm install electron --save-dev </code></p>\\n<p><em>或</em></p>\\n<p><code>yarn add electron</code></p>"}');export{r as comp,u as data};