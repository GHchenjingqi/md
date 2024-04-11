import{_ as t,o as n,c as i,a as e}from"./app-DFbXBJNa.js";const s={},r=e('<h3 id="_1-深拷贝需要注意哪些问题" tabindex="-1"><a class="header-anchor" href="#_1-深拷贝需要注意哪些问题"><span>1.深拷贝需要注意哪些问题？</span></a></h3><p>常见的深拷贝方法：assign，递归全赋值，JSON.parse(JSON.stringify())，函数返回等</p><ul><li><strong>Object.assign</strong> 只能深拷贝顶层属性和值，深层属性也是浅拷贝</li><li><strong>...扩展运算符</strong> 同上只能深拷贝顶层属性和方法！</li><li><strong>JSON 实现深拷贝</strong>，不足：构造函数/function，属性值为undefined、function、symbol的也会丢失，Set和Map变成数组，Data变成String等</li><li><strong>函数返回</strong>，返回对象在函数内定义属于深拷贝，在函数外，算浅拷贝。</li><li><strong>递归循环是最完美的</strong>，但是需要考虑全数据类型，如：Map/Set。另外递归时</li></ul><p>深拷贝时除了要考虑特殊值处理，还要考虑递归时不能影响性能，或者没有终止条件造成内存泄漏。</p><p>还要考虑深拷贝不能复制原型链上的方法和属性，还有getter和setter也是无法复制的。</p>',5),o=[r];function a(l,c){return n(),i("div",null,o)}const p=t(s,[["render",a],["__file","面试题.html.vue"]]),_=JSON.parse('{"path":"/guide/JavaScript/%E9%9D%A2%E8%AF%95%E9%A2%98.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":3,"title":"1.深拷贝需要注意哪些问题？","slug":"_1-深拷贝需要注意哪些问题","link":"#_1-深拷贝需要注意哪些问题","children":[]}],"git":{"updatedTime":1712798294000,"contributors":[{"name":"陈小知","email":"cjq314@qq.com","commits":1}]},"filePathRelative":"guide/JavaScript/面试题.md","excerpt":"<h3>1.深拷贝需要注意哪些问题？</h3>\\n<p>常见的深拷贝方法：assign，递归全赋值，JSON.parse(JSON.stringify())，函数返回等</p>\\n<ul>\\n<li><strong>Object.assign</strong>  只能深拷贝顶层属性和值，深层属性也是浅拷贝</li>\\n<li><strong>...扩展运算符</strong> 同上只能深拷贝顶层属性和方法！</li>\\n<li><strong>JSON 实现深拷贝</strong>，不足：构造函数/function，属性值为undefined、function、symbol的也会丢失，Set和Map变成数组，Data变成String等</li>\\n<li><strong>函数返回</strong>，返回对象在函数内定义属于深拷贝，在函数外，算浅拷贝。</li>\\n<li><strong>递归循环是最完美的</strong>，但是需要考虑全数据类型，如：Map/Set。另外递归时</li>\\n</ul>"}');export{p as comp,_ as data};
