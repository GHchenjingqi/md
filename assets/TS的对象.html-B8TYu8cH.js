import{_ as e,o as n,c as s,a as t}from"./app-D1Go9_za.js";const i={},a=t(`<h2 id="对象-类class" tabindex="-1"><a class="header-anchor" href="#对象-类class"><span>对象-类Class</span></a></h2><p>万物皆对象，面向对象编程。</p><h3 id="定义类" tabindex="-1"><a class="header-anchor" href="#定义类"><span>定义类</span></a></h3><p>对象主要包含 属性和方法。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class 类名{
	属性名: 类型;
	constructor(参数:类型){
		this.属性名 = 参数;
	}
	方法名(){
		...
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如实现一个人的对象。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class Person{
	// 实例化属性
	name: string;
	age: number;
	// 静态属性
	static sex：string = &#39;男&#39;
	// 构造函数
	constructor(name: string){
		this.name = name;
	}
	sayHi(){
	
	}
	// 静态方法
	static say(){
	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态属性和静态方法必须使用类获取，不能通过实例化方式获取。静态属性不可修改。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Person.sex;
Person.say();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>默认实例化属性和实例化方法需要先实例化，再调用。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>let per = new Person();
per.name;
per.sayHi();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数constructor" tabindex="-1"><a class="header-anchor" href="#构造函数constructor"><span>构造函数constructor</span></a></h3><p>每个对象都有一个constructor构造函数，用于初始化对象。</p><h3 id="this指向" tabindex="-1"><a class="header-anchor" href="#this指向"><span>this指向</span></a></h3><p>类里面的this指向当前实例化的对象。</p><h3 id="类继承" tabindex="-1"><a class="header-anchor" href="#类继承"><span>类继承</span></a></h3><p>类的继承通过关键字：extends 实现继承。子类继承父类的所有属性和方法。子类方法与父类方法同名，子类方法会重写改方法（子类方法生效）。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>class 子类 extends 父类{ }

class Male extends Person{ 
	sex:string;
	constructor(sex: string){
		super();
		this.sex = sex;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>子类通过关键字：super 继承父类的所有属性，同事可以在子类构造函数里新增自己的属性。</p><h3 id="抽象类与抽象方法" tabindex="-1"><a class="header-anchor" href="#抽象类与抽象方法"><span>抽象类与抽象方法</span></a></h3><p>抽象类和抽象方法通过关键字：abstract 实现。在类前面就是抽象类，抽象方法必须在抽象类里面。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>abstract class Person{
	name:string;
	constructor(name: string){
		this.name = name;
	}
	// 抽象方法
	abstract say(){
	
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),l=[a];function d(r,c){return n(),s("div",null,l)}const u=e(i,[["render",d],["__file","TS的对象.html.vue"]]),m=JSON.parse(`{"path":"/guide/TypeScript/TS%E7%9A%84%E5%AF%B9%E8%B1%A1.html","title":"","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"对象-类Class","slug":"对象-类class","link":"#对象-类class","children":[{"level":3,"title":"定义类","slug":"定义类","link":"#定义类","children":[]},{"level":3,"title":"构造函数constructor","slug":"构造函数constructor","link":"#构造函数constructor","children":[]},{"level":3,"title":"this指向","slug":"this指向","link":"#this指向","children":[]},{"level":3,"title":"类继承","slug":"类继承","link":"#类继承","children":[]},{"level":3,"title":"抽象类与抽象方法","slug":"抽象类与抽象方法","link":"#抽象类与抽象方法","children":[]}]}],"git":{"updatedTime":null,"contributors":[]},"filePathRelative":"guide/TypeScript/TS的对象.md","excerpt":"<h2>对象-类Class</h2>\\n<p>万物皆对象，面向对象编程。</p>\\n<h3>定义类</h3>\\n<p>对象主要包含 属性和方法。</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>class 类名{\\n\\t属性名: 类型;\\n\\tconstructor(参数:类型){\\n\\t\\tthis.属性名 = 参数;\\n\\t}\\n\\t方法名(){\\n\\t\\t...\\n\\t}\\n}\\n</code></pre></div><p>例如实现一个人的对象。</p>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>class Person{\\n\\t// 实例化属性\\n\\tname: string;\\n\\tage: number;\\n\\t// 静态属性\\n\\tstatic sex：string = '男'\\n\\t// 构造函数\\n\\tconstructor(name: string){\\n\\t\\tthis.name = name;\\n\\t}\\n\\tsayHi(){\\n\\t\\n\\t}\\n\\t// 静态方法\\n\\tstatic say(){\\n\\t\\n\\t}\\n}\\n</code></pre></div>"}`);export{u as comp,m as data};
