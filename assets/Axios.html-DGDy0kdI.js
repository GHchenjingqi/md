import{_ as n,o as s,c as a,a as e}from"./app-D1Go9_za.js";const t={},p=e(`<h3 id="axios-请求" tabindex="-1"><a class="header-anchor" href="#axios-请求"><span>Axios 请求</span></a></h3><p>Axios 是用于请求接口数据的一种异步解决方案。是一个Promise网络请求库。</p><p>安装</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>npm install axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引入</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span>url<span class="token punctuation">[</span><span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>请求方法</strong></p><ul><li><h5 id="axios-get-url-config-查询" tabindex="-1"><a class="header-anchor" href="#axios-get-url-config-查询"><span>axios.get(url[, config]) 查询</span></a></h5></li><li><h5 id="axios-post-url-data-config-新增" tabindex="-1"><a class="header-anchor" href="#axios-post-url-data-config-新增"><span>axios.post(url[, data[, config]]) 新增</span></a></h5></li><li><h5 id="axios-put-url-data-config-修改" tabindex="-1"><a class="header-anchor" href="#axios-put-url-data-config-修改"><span>axios.put(url[, data[, config]]) 修改</span></a></h5></li><li><h5 id="axios-delete-url-config-删除" tabindex="-1"><a class="header-anchor" href="#axios-delete-url-config-删除"><span>axios.delete(url[, config]) 删除</span></a></h5></li><li><h5 id="axios-request-config-通用请求" tabindex="-1"><a class="header-anchor" href="#axios-request-config-通用请求"><span>axios.request(config) 通用请求</span></a></h5><p>其他方法</p></li><li><p>axios.head(url[, config])</p></li><li><p>axios.options(url[, config])</p></li><li><p>axios.patch(url[, data[, config]])</p></li><li><p>axios.postForm(url[, data[, config]])</p></li><li><p>axios.putForm(url[, data[, config]])</p></li><li><p>axios.patchForm(url[, data[, config]])</p></li></ul><p><strong>Get请求</strong></p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 传参方式1</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user?ID=12345&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// handle success</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 捕获错误 error</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// always executed</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 传参2</span>
axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// always executed</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一种写法：</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token function">axios</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user?ID=12345&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    response<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span><span class="token function">createWriteStream</span><span class="token punctuation">(</span><span class="token string">&#39;ada_lovelace.jpg&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios设置默认值" tabindex="-1"><a class="header-anchor" href="#axios设置默认值"><span>axios设置默认值</span></a></h3><p>默认值每个请求都会生效。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token string">&#39;https://api.example.com&#39;</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>post<span class="token punctuation">[</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外一种写法</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 创建实例时配置默认值</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://api.example.com&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建实例后修改默认值</span>
instance<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>common<span class="token punctuation">[</span><span class="token string">&#39;Authorization&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token constant">AUTH_TOKEN</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios请求体" tabindex="-1"><a class="header-anchor" href="#axios请求体"><span>axios请求体</span></a></h3><p>请求体只有url是必填的，其他属性可选。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \`url\` 是用于请求的服务器 URL</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`method\` 是创建请求时使用的方法</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`baseURL\` 将自动加在 \`url\` 前面，除非 \`url\` 是一个绝对 URL。</span>
  <span class="token comment">// 它可以通过设置一个 \`baseURL\` 便于为 axios 实例的方法传递相对 URL</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;https://some-domain.com/api/&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformRequest\` 允许在向服务器发送前，修改请求数据</span>
  <span class="token comment">// 它只能用于 &#39;PUT&#39;, &#39;POST&#39; 和 &#39;PATCH&#39; 这几个请求方法</span>
  <span class="token comment">// 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream</span>
  <span class="token comment">// 你可以修改请求头。</span>
  <span class="token literal-property property">transformRequest</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> headers</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对发送的 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// \`transformResponse\` 在传递给 then/catch 前，允许修改响应数据</span>
  <span class="token literal-property property">transformResponse</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对接收的 data 进行任意转换处理</span>

    <span class="token keyword">return</span> data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// 自定义请求头</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">&#39;X-Requested-With&#39;</span><span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`params\` 是与请求一起发送的 URL 参数</span>
  <span class="token comment">// 必须是一个简单对象或 URLSearchParams 对象</span>
  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token constant">ID</span><span class="token operator">:</span> <span class="token number">12345</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`paramsSerializer\`是可选方法，主要用于序列化\`params\`</span>
  <span class="token comment">// (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)</span>
  <span class="token function-variable function">paramsSerializer</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">params</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">arrayFormat</span><span class="token operator">:</span> <span class="token string">&#39;brackets&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`data\` 是作为请求体被发送的数据</span>
  <span class="token comment">// 仅适用 &#39;PUT&#39;, &#39;POST&#39;, &#39;DELETE 和 &#39;PATCH&#39; 请求方法</span>
  <span class="token comment">// 在没有设置 \`transformRequest\` 时，则必须是以下类型之一:</span>
  <span class="token comment">// - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams</span>
  <span class="token comment">// - 浏览器专属: FormData, File, Blob</span>
  <span class="token comment">// - Node 专属: Stream, Buffer</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;Fred&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  
  <span class="token comment">// 发送请求体数据的可选语法</span>
  <span class="token comment">// 请求方式 post</span>
  <span class="token comment">// 只有 value 会被发送，key 则不会</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token string">&#39;Country=Brasil&amp;City=Belo Horizonte&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`timeout\` 指定请求超时的毫秒数。</span>
  <span class="token comment">// 如果请求时间超过 \`timeout\` 的值，则请求会被中断</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 默认值是 \`0\` (永不超时)</span>

  <span class="token comment">// \`withCredentials\` 表示跨域请求时是否需要使用凭证</span>
  <span class="token literal-property property">withCredentials</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`adapter\` 允许自定义处理请求，这使测试更加容易。</span>
  <span class="token comment">// 返回一个 promise 并提供一个有效的响应 （参见 lib/adapters/README.md）。</span>
  <span class="token function-variable function">adapter</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* ... */</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`auth\` HTTP Basic Auth</span>
  <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;janedoe&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;s00pers3cret&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`responseType\` 表示浏览器将要响应的数据类型</span>
  <span class="token comment">// 选项包括: &#39;arraybuffer&#39;, &#39;document&#39;, &#39;json&#39;, &#39;text&#39;, &#39;stream&#39;</span>
  <span class="token comment">// 浏览器专属：&#39;blob&#39;</span>
  <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`responseEncoding\` 表示用于解码响应的编码 (Node.js 专属)</span>
  <span class="token comment">// 注意：忽略 \`responseType\` 的值为 &#39;stream&#39;，或者是客户端请求</span>
  <span class="token comment">// Note: Ignored for \`responseType\` of &#39;stream&#39; or client-side requests</span>
  <span class="token literal-property property">responseEncoding</span><span class="token operator">:</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`xsrfCookieName\` 是 xsrf token 的值，被用作 cookie 的名称</span>
  <span class="token literal-property property">xsrfCookieName</span><span class="token operator">:</span> <span class="token string">&#39;XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`xsrfHeaderName\` 是带有 xsrf token 值的http 请求头名称</span>
  <span class="token literal-property property">xsrfHeaderName</span><span class="token operator">:</span> <span class="token string">&#39;X-XSRF-TOKEN&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`onUploadProgress\` 允许为上传处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onUploadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`onDownloadProgress\` 允许为下载处理进度事件</span>
  <span class="token comment">// 浏览器专属</span>
  <span class="token function-variable function">onDownloadProgress</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">progressEvent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理原生进度事件</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxContentLength\` 定义了node.js中允许的HTTP响应内容的最大字节数</span>
  <span class="token literal-property property">maxContentLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxBodyLength\`（仅Node）定义允许的http请求内容的最大字节数</span>
  <span class="token literal-property property">maxBodyLength</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>

  <span class="token comment">// \`validateStatus\` 定义了对于给定的 HTTP状态码是 resolve 还是 reject promise。</span>
  <span class="token comment">// 如果 \`validateStatus\` 返回 \`true\` (或者设置为 \`null\` 或 \`undefined\`)，</span>
  <span class="token comment">// 则promise 将会 resolved，否则是 rejected。</span>
  <span class="token function-variable function">validateStatus</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">status</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token comment">// 默认值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`maxRedirects\` 定义了在node.js中要遵循的最大重定向数。</span>
  <span class="token comment">// 如果设置为0，则不会进行重定向</span>
  <span class="token literal-property property">maxRedirects</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 默认值</span>

  <span class="token comment">// \`socketPath\` 定义了在node.js中使用的UNIX套接字。</span>
  <span class="token comment">// e.g. &#39;/var/run/docker.sock&#39; 发送请求到 docker 守护进程。</span>
  <span class="token comment">// 只能指定 \`socketPath\` 或 \`proxy\` 。</span>
  <span class="token comment">// 若都指定，这使用 \`socketPath\` 。</span>
  <span class="token literal-property property">socketPath</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token comment">// default</span>

  <span class="token comment">// \`httpAgent\` and \`httpsAgent\` define a custom agent to be used when performing http</span>
  <span class="token comment">// and https requests, respectively, in node.js. This allows options to be added like</span>
  <span class="token comment">// \`keepAlive\` that are not enabled by default.</span>
  <span class="token literal-property property">httpAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">http<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token literal-property property">httpsAgent</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">https<span class="token punctuation">.</span>Agent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">keepAlive</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// \`proxy\` 定义了代理服务器的主机名，端口和协议。</span>
  <span class="token comment">// 您可以使用常规的\`http_proxy\` 和 \`https_proxy\` 环境变量。</span>
  <span class="token comment">// 使用 \`false\` 可以禁用代理功能，同时环境变量也会被忽略。</span>
  <span class="token comment">// \`auth\`表示应使用HTTP Basic auth连接到代理，并且提供凭据。</span>
  <span class="token comment">// 这将设置一个 \`Proxy-Authorization\` 请求头，它会覆盖 \`headers\` 中已存在的自定义 \`Proxy-Authorization\` 请求头。</span>
  <span class="token comment">// 如果代理服务器使用 HTTPS，则必须设置 protocol 为\`https\`</span>
  <span class="token literal-property property">proxy</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&#39;https&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">9000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">auth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&#39;mikeymike&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;rapunz3l&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// see https://axios-http.com/zh/docs/cancellation</span>
  <span class="token literal-property property">cancelToken</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">CancelToken</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token comment">// \`decompress\` indicates whether or not the response body should be decompressed </span>
  <span class="token comment">// automatically. If set to \`true\` will also remove the &#39;content-encoding&#39; header </span>
  <span class="token comment">// from the responses objects of all decompressed responses</span>
  <span class="token comment">// - Node only (XHR cannot turn off decompression)</span>
  <span class="token literal-property property">decompress</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 默认值</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios响应体" tabindex="-1"><a class="header-anchor" href="#axios响应体"><span>axios响应体</span></a></h3><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token comment">// \`data\` 由服务器提供的响应</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`status\` 来自服务器响应的 HTTP 状态码</span>
  <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>

  <span class="token comment">// \`statusText\` 来自服务器响应的 HTTP 状态信息</span>
  <span class="token literal-property property">statusText</span><span class="token operator">:</span> <span class="token string">&#39;OK&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// \`headers\` 是服务器响应头</span>
  <span class="token comment">// 所有的 header 名称都是小写，而且可以使用方括号语法访问</span>
  <span class="token comment">// 例如: \`response.headers[&#39;content-type&#39;]\`</span>
  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`config\` 是 \`axios\` 请求的配置信息</span>
  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// \`request\` 是生成此响应的请求</span>
  <span class="token comment">// 在node.js中它是最后一个ClientRequest实例 (in redirects)，</span>
  <span class="token comment">// 在浏览器中则是 XMLHttpRequest 实例</span>
  <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios同步请求" tabindex="-1"><a class="header-anchor" href="#axios同步请求"><span>axios同步请求</span></a></h3><p>同步请求多个接口，使用axios.all，多个返回结果可以通过axios.spread接收。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code>axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	<span class="token comment">// res 是所有结果集合-数组类型</span>
    res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">//  第1个接口返回结果</span>
    res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">//  第2个接口返回结果</span>
    res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">//  第3个接口返回结果</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

使用spread获取
axios<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
	axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/option&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
    axios<span class="token punctuation">.</span><span class="token function">spread</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">res1<span class="token punctuation">,</span>res2<span class="token punctuation">,</span>res3</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token comment">// 就得到了对应接口的结果</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="axios拦截器" tabindex="-1"><a class="header-anchor" href="#axios拦截器"><span>axios拦截器</span></a></h3><p>axios通过使用interceptors.request.use 方法对接口请求进行拦截。通过 interceptors.response.use 方法对返回结果进行拦截</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token comment">// 添加请求拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 在发送请求之前做些什么</span>
    <span class="token keyword">return</span> config<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对请求错误做些什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 添加响应拦截器</span>
axios<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 2xx 范围内的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应数据做点什么</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 超出 2xx 范围的状态码都会触发该函数。</span>
    <span class="token comment">// 对响应错误做点什么</span>
    <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","Axios.html.vue"]]),d=JSON.parse(`{"path":"/guide/vue/Axios.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"Axios 请求","slug":"axios-请求","link":"#axios-请求","children":[]},{"level":3,"title":"axios设置默认值","slug":"axios设置默认值","link":"#axios设置默认值","children":[]},{"level":3,"title":"axios请求体","slug":"axios请求体","link":"#axios请求体","children":[]},{"level":3,"title":"axios响应体","slug":"axios响应体","link":"#axios响应体","children":[]},{"level":3,"title":"axios同步请求","slug":"axios同步请求","link":"#axios同步请求","children":[]},{"level":3,"title":"axios拦截器","slug":"axios拦截器","link":"#axios拦截器","children":[]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"guide/vue/Axios.md","excerpt":"<h3>Axios 请求</h3>\\n<p>Axios 是用于请求接口数据的一种异步解决方案。是一个Promise网络请求库。</p>\\n<p>安装</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code>npm install axios\\n</code></pre></div><p>引入</p>\\n<div class=\\"language-javascript\\" data-ext=\\"js\\" data-title=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> axios <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'axios'</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>"}`);export{r as comp,d as data};
