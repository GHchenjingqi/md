import{_ as d,c,b as i,d as s,a as l,e,w as r,r as p,o as v}from"./app-CsUEYrmK.js";const t={};function o(u,n){const a=p("font");return v(),c("div",null,[n[4]||(n[4]=i('<p>本篇文档适用于threeJS使用ShaderMaterial材质。</p><h2 id="一、什么事着色器" tabindex="-1"><a class="header-anchor" href="#一、什么事着色器"><span>一、什么事着色器</span></a></h2><p>着色器事在GPU上并行的强类型语言的高级画点工具。着色器是一种规范接口，可以基于多种语言接入，常见的有C，JS等。</p><p>计算机仅可以绘制：点、线、三角形。</p><h2 id="语言标准" tabindex="-1"><a class="header-anchor" href="#语言标准"><span>语言标准</span></a></h2><p>针对不通平台语言有所不同。</p><ul><li>GLSL ES1.0 全平台 (推荐）</li><li>GLSL Mac/Linux</li><li>HLSL 11 Window/xbox</li><li>PSSL playstation</li></ul><h2 id="着色器分类" tabindex="-1"><a class="header-anchor" href="#着色器分类"><span>着色器分类</span></a></h2><p>1.<strong>顶点着色器</strong>（vertex shader）:用来描述顶点特性（位置，大小，颜色）的程序。</p><p>2.<strong>片元着色器</strong>（fragment shader）：进行逐片处理光照过程的程序。</p><p>虽然分为这两类，但是使用的时候还是需要将顶点+片元结合起来使用。注意：在threeJS中着色器代码都是字符串格式。</p><h2 id="着色器执行步骤" tabindex="-1"><a class="header-anchor" href="#着色器执行步骤"><span>着色器执行步骤</span></a></h2><p><img src="https://cdn.nlark.com/yuque/0/2024/png/1460947/1732168449868-1981a024-4f43-4aa2-a899-fe6d045b516b.png" alt=""></p><h2 id="着色器工具" tabindex="-1"><a class="header-anchor" href="#着色器工具"><span>着色器工具</span></a></h2><p>注意，写法和threeJS不太一样，变量不需要加“gl_&quot;，小写开头。</p><p>例如：<strong>gl_FragColor</strong> (threeJS) ==&gt; <strong>fragColor</strong> (shader)</p><p>地址：<a href="https://www.shadertoy.com/new" target="_blank" rel="noopener noreferrer">https://www.shadertoy.com/new</a></p><h2 id="知识扩充" tabindex="-1"><a class="header-anchor" href="#知识扩充"><span>知识扩充</span></a></h2><h3 id="仿射变换" tabindex="-1"><a class="header-anchor" href="#仿射变换"><span>仿射变换</span></a></h3>',19)),s("p",null,[n[1]||(n[1]=e("仿射变换：",-1)),s("strong",null,[l(a,{style:{color:"rgb(25, 27, 31)"}},{default:r(()=>n[0]||(n[0]=[e("平移、旋转、放缩、剪切、反射。",-1)])),_:1,__:[0]})])]),n[5]||(n[5]=s("p",null,[s("img",{src:"https://cdn.nlark.com/yuque/0/2024/png/1460947/1732169811834-157ba0aa-7df3-48ba-9bc8-7dde49ce4428.png",alt:""})],-1)),n[6]||(n[6]=s("h3",{id:"齐次坐标",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#齐次坐标"},[s("span",null,"齐次坐标")])],-1)),s("p",null,[n[3]||(n[3]=e("齐次坐标：由4个分量组成的矢量（x, y, z, w）。",-1)),l(a,{style:{color:"rgb(25, 27, 31)"}},{default:r(()=>n[2]||(n[2]=[e("它既能够用来明确区分向量和点，同时也更易用于进行仿射（线性）几何变换。齐次坐标系解决了笛卡尔坐标无法表示无穷远点的问题。",-1)])),_:1,__:[2]})]),n[7]||(n[7]=i(`<ul><li>当w等1时，转为三维坐标（x,y,z）</li><li>w值不等1，转为三维坐标（x/w, y/w, z/w）</li><li>w值必须大等于0，越趋近于0，三维坐标无穷远</li></ul><h3 id="笛卡尔坐标" tabindex="-1"><a class="header-anchor" href="#笛卡尔坐标"><span>笛卡尔坐标</span></a></h3><p>笛卡尔坐标，又称三维坐标系，或右手坐标系（大拇指x轴,食指y轴,中指z轴）。</p><p><img src="https://cdn.nlark.com/yuque/0/2024/png/1460947/1732169085082-4a4db053-b5a5-43b2-9893-c13fff3d7c38.png" alt=""></p><h3 id="三角函数" tabindex="-1"><a class="header-anchor" href="#三角函数"><span>三角函数</span></a></h3><p><img src="https://cdn.nlark.com/yuque/0/2024/png/1460947/1732171190359-396cd5d0-dff0-4bc5-814e-9b98529ca0f1.png" alt=""></p><p><img src="https://cdn.nlark.com/yuque/0/2024/png/1460947/1732171218916-6ecb755e-72d3-461b-84ce-3a5f810434a1.png" alt=""></p><p>百度地址：<a href="https://baike.baidu.com/item/%E4%B8%89%E8%A7%92%E5%87%BD%E6%95%B0%E5%85%AC%E5%BC%8F/4374733?fr=aladdin" target="_blank" rel="noopener noreferrer">三角函数公式</a></p><h2 id="着色器语法" tabindex="-1"><a class="header-anchor" href="#着色器语法"><span>着色器语法</span></a></h2><h3 id="定义变量" tabindex="-1"><a class="header-anchor" href="#定义变量"><span>定义变量</span></a></h3><p>1.顶点着色器使用 attribute</p><p>格式：attribute + 类型 + 变量名</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">attribute  vec4  a_position</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2.片元着色器使用 uniform</p><p>格式：uniform + 类型 + 变量名</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">uniform vec4 u_fgc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3.varying定义</p><p>格式：varying + 类型 + 变量名</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">varying vec2 vUv;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="顶点着色器" tabindex="-1"><a class="header-anchor" href="#顶点着色器"><span>顶点着色器</span></a></h3><p>代码不报错，就是不显示，就加下面代码。</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">void main(){</span>
<span class="line">    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>projectionMatrix: 投影矩阵</li><li>modelViewMatrix: 模型视图矩阵</li><li>position: 顶点位置</li></ul><h3 id="片元着色器" tabindex="-1"><a class="header-anchor" href="#片元着色器"><span>片元着色器</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">void main()</span>
<span class="line">{</span>
<span class="line">    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0); // 这里改变颜色</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>gl_FragColor 我们可以对它进行动态修改，这样就会生成动态的效果。</p><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2><p><img src="https://cdn.nlark.com/yuque/0/2024/png/1460947/1732172890372-ae5a259f-11c1-4105-a958-cb393bfa5df2.png" alt=""></p><h5 id="shader案例-手动删注释" tabindex="-1"><a class="header-anchor" href="#shader案例-手动删注释"><span>shader案例（手动删注释）</span></a></h5><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">void mainImage( out vec4 fragColor, in vec2 fragCoord )</span>
<span class="line">{</span>
<span class="line">   vec2 uv = fragCoord/iResolution.xy;</span>
<span class="line">    // 从左到右渐变</span>
<span class="line">    // fragColor = vec4(uv.x, 0.0, 0.0, 1.0);</span>
<span class="line">    // 从上到下渐变</span>
<span class="line">    // fragColor = vec4(uv.y, 0.0, 0.0, 1.0);</span>
<span class="line">    // 左右黑白灰</span>
<span class="line">    // fragColor = vec4(vec3(uv.x), 1.0);</span>
<span class="line">    // 上下黑白灰</span>
<span class="line">    // fragColor = vec4(vec3(uv.y), 1.0);</span>
<span class="line">    // 青色红色</span>
<span class="line">    // fragColor = vec4(uv, 0.0, 1.0);</span>
<span class="line">    // 蓝色紫色</span>
<span class="line">    // gl_FragColor = vec4(uv, 1.0, 1.0);</span>
<span class="line">    // 颜色突变,左黑右白</span>
<span class="line">    // float color = step(0.5, uv.x);</span>
<span class="line">    // fragColor = vec4(vec3(color), 1.0);</span>
<span class="line">    // 颜色突变,左白右黑</span>
<span class="line">    // float color = step(uv.x,0.5);</span>
<span class="line">    // fragColor = vec4(vec3(color), 1.0);</span>
<span class="line">    // 重复条纹。 fract重复次数</span>
<span class="line">    // fragColor = vec4(vec3(fract(uv.x * 3.0)), 1.0);</span>
<span class="line">    // 重复条纹,颜色突变</span>
<span class="line">    fragColor = vec4(vec3(step(0.5, fract(uv.y * 3.0))), 1.0);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>threejs案例：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">let frag2 = \`</span>
<span class="line">varying vec2 vUv;</span>
<span class="line">void main() {</span>
<span class="line">    // 从左到右渐变</span>
<span class="line">    // gl_FragColor = vec4(vUv.x, 0.0, 0.0, 1.0);</span>
<span class="line">    // 从上到下渐变</span>
<span class="line">    // gl_FragColor = vec4(vUv.y, 0.0, 0.0, 1.0);</span>
<span class="line">    // 左右黑白灰</span>
<span class="line">    // gl_FragColor = vec4(vec3(vUv.x), 1.0);</span>
<span class="line">    // 上下黑白灰</span>
<span class="line">    // gl_FragColor = vec4(vec3(vUv.y), 1.0);</span>
<span class="line">    // 青色红色</span>
<span class="line">    // gl_FragColor = vec4(vUv, 0.0, 1.0);</span>
<span class="line">    // 蓝色紫色</span>
<span class="line">    // gl_FragColor = vec4(vUv, 1.0, 1.0);</span>
<span class="line">    // 颜色突变,左黑右白</span>
<span class="line">    // float color = step(0.5, vUv.x);</span>
<span class="line">    // gl_FragColor = vec4(vec3(color), 1.0);</span>
<span class="line">    // 颜色突变,左白右黑</span>
<span class="line">    // float color = step(vUv.x,0.5);</span>
<span class="line">    // gl_FragColor = vec4(vec3(color), 1.0);</span>
<span class="line">    // 重复条纹。 fract重复次数</span>
<span class="line">    // gl_FragColor = vec4(vec3(fract(vUv.x * 3.0)), 1.0);</span>
<span class="line">    // 重复条纹,颜色突变</span>
<span class="line">    gl_FragColor = vec4(vec3(step(0.5, fract(vUv.y * 3.0))), 1.0);</span>
<span class="line">}\`</span>
<span class="line"></span>
<span class="line">// 着色器材质</span>
<span class="line">const materal2 = new THREE.ShaderMaterial({</span>
<span class="line">    vertexShader: vertexShader,// 顶点着色器</span>
<span class="line">    fragmentShader: frag2,// 片元着色器</span>
<span class="line">    side: THREE.DoubleSide</span>
<span class="line">})</span>
<span class="line">const mesh2 = new THREE.Mesh(geomtry, materal2)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果</p><p><img src="https://cdn.nlark.com/yuque/0/2024/png/1460947/1732174215738-14db5756-8b42-4f8a-b058-3637def6fc22.png" alt=""></p><h5 id="动态修改片元着色器" tabindex="-1"><a class="header-anchor" href="#动态修改片元着色器"><span>动态修改片元着色器</span></a></h5><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html"><pre><code><span class="line">void mainImage( out vec4 fragColor, in vec2 fragCoord ) {</span>
<span class="line">    vec2 uv = fragCoord.xy / iResolution.xy;</span>
<span class="line">	  fragColor = vec4(uv,0.5+0.5*sin(iTime),1.0);</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36)),l(a,{style:{color:"rgb(24, 25, 28)"}})])}const h=d(t,[["render",o]]),b=JSON.parse('{"path":"/mds/%E7%9D%80%E8%89%B2%E5%99%A8shader%E5%85%A5%E9%97%A8.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一、什么事着色器","slug":"一、什么事着色器","link":"#一、什么事着色器","children":[]},{"level":2,"title":"语言标准","slug":"语言标准","link":"#语言标准","children":[]},{"level":2,"title":"着色器分类","slug":"着色器分类","link":"#着色器分类","children":[]},{"level":2,"title":"着色器执行步骤","slug":"着色器执行步骤","link":"#着色器执行步骤","children":[]},{"level":2,"title":"着色器工具","slug":"着色器工具","link":"#着色器工具","children":[]},{"level":2,"title":"知识扩充","slug":"知识扩充","link":"#知识扩充","children":[{"level":3,"title":"仿射变换","slug":"仿射变换","link":"#仿射变换","children":[]},{"level":3,"title":"齐次坐标","slug":"齐次坐标","link":"#齐次坐标","children":[]},{"level":3,"title":"笛卡尔坐标","slug":"笛卡尔坐标","link":"#笛卡尔坐标","children":[]},{"level":3,"title":"三角函数","slug":"三角函数","link":"#三角函数","children":[]}]},{"level":2,"title":"着色器语法","slug":"着色器语法","link":"#着色器语法","children":[{"level":3,"title":"定义变量","slug":"定义变量","link":"#定义变量","children":[]},{"level":3,"title":"顶点着色器","slug":"顶点着色器","link":"#顶点着色器","children":[]},{"level":3,"title":"片元着色器","slug":"片元着色器","link":"#片元着色器","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]}],"git":{},"filePathRelative":"mds/着色器shader入门.md","excerpt":"<p>本篇文档适用于threeJS使用ShaderMaterial材质。</p>\\n<h2>一、什么事着色器</h2>\\n<p>着色器事在GPU上并行的强类型语言的高级画点工具。着色器是一种规范接口，可以基于多种语言接入，常见的有C，JS等。</p>\\n<p>计算机仅可以绘制：点、线、三角形。</p>\\n<h2>语言标准</h2>\\n<p>针对不通平台语言有所不同。</p>\\n<ul>\\n<li>GLSL ES1.0  全平台 (推荐）</li>\\n<li>GLSL    Mac/Linux</li>\\n<li>HLSL 11  Window/xbox</li>\\n<li>PSSL   playstation</li>\\n</ul>"}');export{h as comp,b as data};
