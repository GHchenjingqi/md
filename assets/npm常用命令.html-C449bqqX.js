import{_ as s,c as a,b as e,o as i}from"./app-CsUEYrmK.js";const l={};function p(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h3 id="nvm管理node版本" tabindex="-1"><a class="header-anchor" href="#nvm管理node版本"><span>nvm管理node版本</span></a></h3><p>安装</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">npm install nvm</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看可用node版本</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">nvm list available</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看已安装node版本</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"> nvm ls</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看当前版本</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">nvm current</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>切换node版本</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">nvm use <span class="token number">16.15</span><span class="token number">.1</span></span>
<span class="line">nvm use <span class="token number">18.20</span><span class="token number">.2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="git-配置" tabindex="-1"><a class="header-anchor" href="#git-配置"><span>Git 配置</span></a></h3><p>全局配置的用户名和邮箱</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"> git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name</span>
<span class="line"> git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置全局用户名和邮箱</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line"> git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">&quot;Your Name&quot;</span></span>
<span class="line"> git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email <span class="token string">&quot;email@example.com&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="npm-cnpm-yarn" tabindex="-1"><a class="header-anchor" href="#npm-cnpm-yarn"><span>npm/cnpm/yarn</span></a></h3><p>npm/cnpm/yarn 等都是前端安装插件的工具，类似与python的pip 用于执行脚本。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 安装</span></span>
<span class="line"><span class="token function">npm</span> <span class="token function">install</span> *</span>
<span class="line">cnpm <span class="token function">install</span> *</span>
<span class="line"><span class="token function">yarn</span> <span class="token function">add</span> *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新插件</span></span>
<span class="line"><span class="token function">npm</span> update *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 卸载</span></span>
<span class="line"><span class="token function">npm</span> uninstall *</span>
<span class="line">cnpm uninstall *</span>
<span class="line"><span class="token function">yarn</span> remove *</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化</span></span>
<span class="line"><span class="token function">npm</span> init </span>
<span class="line">cnpm init</span>
<span class="line"><span class="token function">yarn</span> init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 发布</span></span>
<span class="line"><span class="token function">npm</span> publish </span>
<span class="line">cnpm publish</span>
<span class="line"><span class="token function">yarn</span> publish</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="npm-包上传官方仓库" tabindex="-1"><a class="header-anchor" href="#npm-包上传官方仓库"><span>npm 包上传官方仓库</span></a></h4><p>1.注册npm官网</p><p><a href="https://www.npmjs.com" target="_blank" rel="noopener noreferrer">https://www.npmjs.com</a></p><p>2.初始化项目</p><div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre><code><span class="line">cnpm init  || npm init</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.npm登录</p><div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre><code><span class="line">npm login</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输入：用户名+密码+邮箱</p><p>4.上传npm包</p><div class="language-plain line-numbers-mode" data-highlighter="prismjs" data-ext="plain"><pre><code><span class="line">npm publish</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="镜像源" tabindex="-1"><a class="header-anchor" href="#镜像源"><span>镜像源</span></a></h3><p>查看镜像源</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">npm config <span class="token keyword">get</span> registry</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>切换镜像源</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js"><pre><code><span class="line">npm config <span class="token keyword">set</span> registry<span class="token operator">=</span>https<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">registry.npmmirror.com</span><span class="token regex-delimiter">/</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>官方源：<a href="https://registry.npmjs.org/" target="_blank" rel="noopener noreferrer">https://registry.npmjs.org/</a></p><p>淘宝源：<a href="https://registry.npmmirror.com/" target="_blank" rel="noopener noreferrer">https://registry.npmmirror.com/</a></p><p>清华源：<a href="https://mirrors.tuna.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/</a></p><p>阿里云：<a href="https://npm.aliyun.com/" target="_blank" rel="noopener noreferrer">https://npm.aliyun.com/</a></p><p>中国科技大学：<a href="https://mirrors.ustc.edu.cn/npm/" target="_blank" rel="noopener noreferrer">https://mirrors.ustc.edu.cn/npm/</a></p><h3 id="cmd-命令" tabindex="-1"><a class="header-anchor" href="#cmd-命令"><span>CMD 命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line"><span class="token comment"># 进入</span></span>
<span class="line"><span class="token builtin class-name">cd</span>  <span class="token punctuation">[</span>路径<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示计算机信息</span></span>
<span class="line">systeminfo</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清屏</span></span>
<span class="line">cls</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示目录文件</span></span>
<span class="line"><span class="token function">dir</span> <span class="token punctuation">[</span>路径<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 新建文件夹</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token punctuation">[</span>文件夹名<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除文件夹</span></span>
<span class="line"><span class="token function">rmdir</span> <span class="token punctuation">[</span>文件夹名<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除文件</span></span>
<span class="line">del <span class="token punctuation">[</span>文件名<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制文件</span></span>
<span class="line">copy <span class="token punctuation">[</span>源路径<span class="token punctuation">]</span> <span class="token punctuation">[</span>目标路径<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移动文件或重命名文件/文件夹</span></span>
<span class="line">move <span class="token punctuation">[</span>源路径<span class="token punctuation">]</span> <span class="token punctuation">[</span>目标路径<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 开启/关闭命令回显</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token punctuation">[</span>信息<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看网络信息</span></span>
<span class="line">ipconfig</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 网速测试</span></span>
<span class="line"><span class="token function">ping</span> <span class="token punctuation">[</span>目标IP地址或域名<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出正在运行的任务</span></span>
<span class="line">tasklist </span>
<span class="line"></span>
<span class="line"><span class="token comment"># 结束进程</span></span>
<span class="line">taskkill /PID <span class="token punctuation">[</span>进程ID<span class="token punctuation">]</span> /F</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41)]))}const r=s(l,[["render",p]]),d=JSON.parse('{"path":"/mds/npm%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"nvm管理node版本","slug":"nvm管理node版本","link":"#nvm管理node版本","children":[]},{"level":3,"title":"Git 配置","slug":"git-配置","link":"#git-配置","children":[]},{"level":3,"title":"npm/cnpm/yarn","slug":"npm-cnpm-yarn","link":"#npm-cnpm-yarn","children":[]},{"level":3,"title":"镜像源","slug":"镜像源","link":"#镜像源","children":[]},{"level":3,"title":"CMD 命令","slug":"cmd-命令","link":"#cmd-命令","children":[]}],"git":{},"filePathRelative":"mds/npm常用命令.md","excerpt":"<h3>nvm管理node版本</h3>\\n<p>安装</p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"js\\"><pre><code><span class=\\"line\\">npm install nvm</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};
