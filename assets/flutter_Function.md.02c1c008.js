import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.1456bef9.js";const F=JSON.parse('{"title":"Dart","titleTemplate":"Function","description":"","frontmatter":{"title":"Dart","titleTemplate":"Function"},"headers":[],"relativePath":"flutter/Function.md","lastUpdated":1692256719000}'),p={name:"flutter/Function.md"},o=l(`<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言 {#前言}&quot;">​</a></h2><h3 id="dart中的function" tabindex="-1">dart中的Function <a class="header-anchor" href="#dart中的function" aria-label="Permalink to &quot;dart中的Function&quot;">​</a></h3><ul><li>分类：普通函数和箭头函数、匿名函数</li><li>参数类型 任意数据类型(包括函数)</li><li>函数没有自身this, 对象中的方法才有</li><li>参数：可选、可以有默认值</li><li>返回值：任意，也可以不返回</li><li>dart中程序入口就是main函数</li></ul><h2 id="函数的分类" tabindex="-1">函数的分类 <a class="header-anchor" href="#函数的分类" aria-label="Permalink to &quot;函数的分类 {#函数的分类}&quot;">​</a></h2><ul><li>普通函数 &#39;String add(){ return &#39;&#39;}&#39;</li><li>箭头函数 int add(a,b)=&gt; a + b</li><li>匿名函数 Function add1 = (int a, int b) {return a + b;};</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 3</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">add1</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 4</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">add2</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 5</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 普通函数</span></span>
<span class="line"><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(res)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> res</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//匿名函数</span></span>
<span class="line"><span style="color:#FFCB6B;">Function</span><span style="color:#A6ACCD;"> add1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> b) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 箭头函数</span></span>
<span class="line"><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">add2</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> b) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> a </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="函数返回值" tabindex="-1">函数返回值 <a class="header-anchor" href="#函数返回值" aria-label="Permalink to &quot;函数返回值 {#函数返回值}&quot;">​</a></h2><ul><li>函数没有返回值</li><li>函数有返回值</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">helloWorld</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Hello woeld</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Hello 小易</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">hasReturn</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;含有返回值&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// this is 含有返回值</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 没有返回值</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">helloWorld</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;Hello woeld&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 不太建议这么写，可读性差</span></span>
<span class="line"><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;Hello 小易&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 含返回值</span></span>
<span class="line"><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">hasReturn</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> str) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;this is $</span><span style="color:#A6ACCD;font-style:italic;">str</span><span style="color:#C3E88D;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="函数中的this" tabindex="-1">函数中的this <a class="header-anchor" href="#函数中的this" aria-label="Permalink to &quot;函数中的this {#函数中的this}&quot;">​</a></h2><ul><li>函数中没有this 注意会报错</li><li>class 中才有this</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fnThis</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// // Error: Expected identifier, but got &#39;this&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fnThis1</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// // Error: Expected identifier, but got &#39;this&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Coder</span><span style="color:#A6ACCD;"> p1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coder</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;小易&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  p1</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// I am 小易</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fnThis</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(this)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Error: Expected identifier, but got &#39;this&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fnThis1</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(this)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// Error: Expected identifier, but got &#39;this&#39;.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// class 中才有this</span></span>
<span class="line"><span style="color:#89DDFF;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Coder</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> name </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">Coder</span><span style="color:#A6ACCD;">(this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sayHello</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;I am \${</span><span style="color:#A6ACCD;">this</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#C3E88D;">}&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="函数不能使用new" tabindex="-1">函数不能使用new <a class="header-anchor" href="#函数不能使用new" aria-label="Permalink to &quot;函数不能使用new {#函数不能使用new}&quot;">​</a></h2><ul><li>函数不能被new, 强行new 会报错</li><li>点击源码看，就可以发现 Function 是一个抽象类</li><li>abstract final class Function</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> xx </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">newFn</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// Error: Couldn&#39;t find constructor &#39;newFn&#39;.</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">newFn</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;函数不能被new&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="函数参数" tabindex="-1">函数参数 <a class="header-anchor" href="#函数参数" aria-label="Permalink to &quot;函数参数 {#函数参数}&quot;">​</a></h2><h3 id="可选参数和必传参数" tabindex="-1">可选参数和必传参数 <a class="header-anchor" href="#可选参数和必传参数" aria-label="Permalink to &quot;可选参数和必传参数&quot;">​</a></h3><ul><li>可选参数：在调用函数时，可以选择不传</li><li>必传参数：在调用函数时，必须传递</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// this is 2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn2</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">11</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a is 11, str is null</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn2</span><span style="color:#A6ACCD;">(a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> str</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;abc&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a is 1, str is abc</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn3</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">11</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;我是可选参数&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// a is 11, str is 我是可选参数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 必传参数</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn1</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> a) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;this is $</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#C3E88D;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可选参数</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn2</span><span style="color:#A6ACCD;">({a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> str}) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">  a is $</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#C3E88D;">, str is $</span><span style="color:#A6ACCD;font-style:italic;">str</span></span>
<span class="line"><span style="color:#C3E88D;">&#39;&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 可选和 必传</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn3</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> [str]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;&#39;&#39;</span></span>
<span class="line"><span style="color:#C3E88D;">    a is $</span><span style="color:#A6ACCD;font-style:italic;">a</span><span style="color:#C3E88D;">, str is $</span><span style="color:#A6ACCD;font-style:italic;">str</span></span>
<span class="line"><span style="color:#C3E88D;">  &#39;&#39;&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="参数类型" tabindex="-1">参数类型 <a class="header-anchor" href="#参数类型" aria-label="Permalink to &quot;参数类型&quot;">​</a></h3><ul><li>参数类型 任意类型</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn4</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 10</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn5</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;xiaoyi&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// xiaoyi</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn6</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">false</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// false</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn7</span><span style="color:#A6ACCD;">({</span><span style="color:#C3E88D;">&quot;name&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;xiaoyi&#39;</span><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// {name: xiaoyi}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn8</span><span style="color:#A6ACCD;">({</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">})</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [x, y, z]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn9</span><span style="color:#A6ACCD;">([</span><span style="color:#C3E88D;">&#39;x&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;y&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;z&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [x, y, z]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">fn10</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;33&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> cb)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 33</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// int</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn4</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// string</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn5</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//bool</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn6</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">bool</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//Map</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn7</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Map</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Set</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn8</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">Set</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// List</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn9</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// dynamic, Function</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn10</span><span style="color:#A6ACCD;">(x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Function</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">n</span><span style="color:#A6ACCD;">(x))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">String</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cb</span><span style="color:#A6ACCD;">(x) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="call" tabindex="-1">call <a class="header-anchor" href="#call" aria-label="Permalink to &quot;call {#call}&quot;">​</a></h2><ul><li>调用函数的时候还可以使用 fn.call()</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">fn9</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">call</span><span style="color:#A6ACCD;">([</span><span style="color:#C3E88D;">&#39;10&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;2&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [x, y, z]</span></span>
<span class="line"><span style="color:#82AAFF;">fn9</span><span style="color:#A6ACCD;">([</span><span style="color:#C3E88D;">&#39;x&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;y&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;z&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// [x, y, z]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn9</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">List</span><span style="color:#A6ACCD;"> n) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(n)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包 {#闭包}&quot;">​</a></h2><ul><li>闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。 换而言之，闭包让开发者可以从内部函数访问外部函数的作用域</li><li>【个人理解】：外层函数返回了内层函数，内层函数使用了外层函数的变量，并且在外层函数被调用时，被保存了起来，就会形参闭包</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> res </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">closure</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">res</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// number is 2</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">res</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// number is 6</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> res1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">closure</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">res1</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// number is 4</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">Function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">closure</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">num</span><span style="color:#A6ACCD;"> number </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">num</span><span style="color:#A6ACCD;"> i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    number </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> i</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;number is $</span><span style="color:#A6ACCD;font-style:italic;">number</span><span style="color:#C3E88D;">&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,28),t=[o];function e(c,r,A,C,y,D){return n(),a("div",null,t)}const d=s(p,[["render",e]]);export{F as __pageData,d as default};