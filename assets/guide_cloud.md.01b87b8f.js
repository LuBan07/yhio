import{_ as a,o as e,c as t,Q as l}from"./chunks/framework.1456bef9.js";const m=JSON.parse('{"title":"cloud","titleTemplate":"云服务器","description":"","frontmatter":{"title":"cloud","titleTemplate":"云服务器"},"headers":[],"relativePath":"guide/cloud.md","lastUpdated":1692256719000}'),p={name:"guide/cloud.md"},i=l(`<h3 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h3><p><strong>主题</strong>： 本文将介绍云服务器的购买及使用</p><p><strong>内容</strong>： 本分将分为三个部分：首先云服务器的购买及登录；然后是node环境\\git安装；最后是项目的部署及避坑点</p><p><strong>目的</strong>：帮助第一次购买服务器的朋友避坑，也记录了自己踩过的坑</p><hr><p>花112块 体验一年的快乐！！！</p><hr><h2 id="一、服务器的购买及登录" tabindex="-1">一、服务器的购买及登录 <a class="header-anchor" href="#一、服务器的购买及登录" aria-label="Permalink to &quot;一、服务器的购买及登录 {#一、服务器的购买及登录}&quot;">​</a></h2><h3 id="_1-服务器的选择" tabindex="-1">1. 服务器的选择 <a class="header-anchor" href="#_1-服务器的选择" aria-label="Permalink to &quot;1. 服务器的选择&quot;">​</a></h3><p>放眼市场云服务器的提供商是数不胜数，国内的：阿里云、腾讯云、京东云、网易云；出于阿里云的怀恋（大学的时候，有学生优惠和学校活动账户里还有大几百，高高兴兴地打开了阿里云控制台，TDM 过期啦），当然也在网上查了下阿里云算是云服务的龙头产品，然后就开始在看阿里云的<strong>ECS服务器</strong>了，选择了一款2核1G 40G存储，<strong>差点</strong>就付款了</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67dc58a3be3242d59da6e7cd45e4dc60~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><p>下午的时候，看到腾讯云的<strong>2核2G112元/年</strong>；这次考虑都没考虑直接上车了，这就是112块就能享受到的一年的快乐😁😁</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a88645893d394c5394857bc0fc71c63b~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><h3 id="_2-购买及登录" tabindex="-1">2.购买及登录 <a class="header-anchor" href="#_2-购买及登录" aria-label="Permalink to &quot;2.购买及登录&quot;">​</a></h3><p>官网： <a href="https://cloud.tencent.com/" target="_blank" rel="noreferrer">https://cloud.tencent.com</a></p><ul><li><p>首先需要先注册登录并实名认证，因为这款是活动秒杀的，2核2G 50G SSD盘是不可选的，然后可以选系统、地区等。认证成功、购买成功之后,收到手机短信和邮件。</p></li><li><p>这里我是选择的<strong>window镜像</strong>、地区选的上海</p></li><li><p>然后点击控制台 =&gt; 轻量服务器</p></li><li><p><a href="https://console.cloud.tencent.com/lighthouse/instance/index?rid=4" target="_blank" rel="noreferrer">点击进去</a> 第一次登录先重置密码</p></li><li><p>最后就通过密码就能远程登录服务器啦</p></li><li><p>1.点击控制台 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fea7ab6f11fb49ac95c3fcf0911eb479~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p></li><li><p>2.找到轻量应用服务器</p></li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ddf302bc105f4402a776d796e41af2e4~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li><ol start="3"><li>找个刚刚购买的服务器</li></ol></li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a051b2dcbdfb427d916f45618aa1b057~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>4.重置密码</li></ul><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ada2cae3d5b4d14b4b03f77bca2f445~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>5.重置好之后，点击登录，通过账号密码登录（也可以是其它）</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f876885a18a04ec58f0706084e3e8f28~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><ul><li>6.登录成功(首次登录成功桌面只有一个回收站)</li></ul><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eab3d41e5c9f4b44b32aec39dbbf9d63~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h2 id="二、环境搭建及软件安装" tabindex="-1">二、环境搭建及软件安装 <a class="header-anchor" href="#二、环境搭建及软件安装" aria-label="Permalink to &quot;二、环境搭建及软件安装 {#二、环境搭建及软件安装}&quot;">​</a></h2><ul><li>浏览器：下载安装应用</li><li>忠于chrome 就先安装了个chrome浏览器 <img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1921162c77c5479c97d8ff6cdd95acc9~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></li></ul><h3 id="安装node环境" tabindex="-1">安装node环境 <a class="header-anchor" href="#安装node环境" aria-label="Permalink to &quot;安装node环境&quot;">​</a></h3><ul><li><p>官网安装：<a href="https://nodejs.org/" target="_blank" rel="noreferrer">https://nodejs.org</a> 可以选择自己需要的node版本进行安装，(云服务器自己使用就没有安装nvm来进行node版本管理，有需求的小伙伴可以自行安装)</p></li><li><p>通过微信文件传输网页版：<a href="https://filehelper.weixin.qq.com" target="_blank" rel="noreferrer">https://filehelper.weixin.qq.com</a>,通过微信文件传输挺快的（亲测）</p></li><li><p>下载完成 一路安装就好了；安装完成在终端测试一下</p></li></ul><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee7274d0914e483c92ede14d85c1533b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><h3 id="git按装" tabindex="-1">git按装 <a class="header-anchor" href="#git按装" aria-label="Permalink to &quot;git按装&quot;">​</a></h3><ul><li>官网安装： <a href="https://git-scm.com/" target="_blank" rel="noreferrer">https://git-scm.com</a></li><li>也可以微信文件传输网页版</li></ul><h3 id="安装其它软件、环境" tabindex="-1">安装其它软件、环境 <a class="header-anchor" href="#安装其它软件、环境" aria-label="Permalink to &quot;安装其它软件、环境&quot;">​</a></h3><ul><li>同理 直接下载安装配置就可以了</li></ul><h2 id="三、项目部署" tabindex="-1">三、项目部署 <a class="header-anchor" href="#三、项目部署" aria-label="Permalink to &quot;三、项目部署 {#三、项目部署}&quot;">​</a></h2><h3 id="_1-项目拉取-及部署" tabindex="-1">1.项目拉取 及部署 <a class="header-anchor" href="#_1-项目拉取-及部署" aria-label="Permalink to &quot;1.项目拉取 及部署&quot;">​</a></h3><ul><li>配置一下淘宝镜像</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span>
<span class="line"></span></code></pre></div><ul><li>全局安装一下 yarn | pnpm</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-g</span></span>
<span class="line"></span></code></pre></div><ul><li>新建一个存放代码的文件夹</li><li>通过 <strong>git clone</strong>进行代码拉取</li><li>然后把项目跑起来</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">server.js</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf1260a7ba3f45c89f6263cb54f5150b~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>看到这里这就部署好项目了。</p><h3 id="_2-端口开放" tabindex="-1">2. 端口开放 <a class="header-anchor" href="#_2-端口开放" aria-label="Permalink to &quot;2. 端口开放&quot;">​</a></h3><ul><li>**端口开放端口开放端口开放！！！**终于的事情说三遍 <img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40e099b2bbbd42c391a6e31226750d77~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"> 我就是在这里踩的一个坑！！！！<br><strong>问题描述</strong>：ping 公网ip =&gt; 可以 ping 通，但是服务器起的服务的访问不了<br><strong>原因</strong>：服务的端口未开放 <strong>避坑</strong>我根据网上的教程：window防火墙=&gt;入行=&gt;新建入行规则；配置半天 人家在控制台明明就提供了可视化操作，我服了，(注意避坑朋友们！)</li></ul><h3 id="_3-可以公网访问了-公网的ip在实例那里看" tabindex="-1">3.可以公网访问了，公网的ip在实例那里看 <a class="header-anchor" href="#_3-可以公网访问了-公网的ip在实例那里看" aria-label="Permalink to &quot;3.可以公网访问了，公网的ip在实例那里看&quot;">​</a></h3><p><a href="http://118.89.125.27:3001/chat" target="_blank" rel="noreferrer">chat</a>,这是一个多人聊天室。<br> 聊天室的搭建在这里<a href="https://juejin.cn/post/7266037480750841896" target="_blank" rel="noreferrer">即时通讯轻松实现：WebSocket、Vue 3 和 Node.js 缔造的多人实时交流平台</a></p><h2 id="总结及注意点" tabindex="-1">总结及注意点 <a class="header-anchor" href="#总结及注意点" aria-label="Permalink to &quot;总结及注意点 {#总结及注意点}&quot;">​</a></h2><ul><li>腾讯云的112米 价格还是可以的，可以入手</li><li>购买、登录、环境搭建、项目部署上线;都挺方便的</li><li>公网ip是可以直接访问，还需要端口开放</li><li>地区选择：要离自己近的，，比如我的就是上海，，在四川访问感觉不快，然后翻墙访问贼慢</li><li>实例自测：是检测实例问题比较好的一个方式</li><li>实在解决不了的问题：可以提工单、也可以重装系统解决</li><li></li></ul><h3 id="避坑点" tabindex="-1">避坑点 <a class="header-anchor" href="#避坑点" aria-label="Permalink to &quot;避坑点&quot;">​</a></h3><ul><li>端口开放=&gt;直接在实例防火墙进行配置</li><li>安装软件时，不要安装360、关机之类的软件，(我就是刚开始，安装chrome的时候是先安装了360，才导致我端口开放了之后，外网还是访问不进来===&gt;&gt;最后是重装系统才解决的)</li><li>端口开放：只开放用得到的几个端口，可以配置100个够了；不然容易被攻击</li></ul><p>最后：之前也在阿里云买过，性能啥的，感觉不出来，我感觉个人的2核2G 足够了，下面是cpu、SSD盘、运行内存的使用情况，只跑了一个node服务+一个vue项目 <img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35e44b8dd0624e7fa982e9dbb10d4027~tplv-k3u1fbpfcp-watermark.image?" alt="image.png"></p><p>本文介绍腾讯云服务器的购买及登录使用、node环境搭建、前后端项目部署上线以及踩坑点；没错就是112元可以让你快乐一年的云服务器实践指南。</p>`,54),s=[i];function n(r,o,c,h,d,g){return e(),t("div",null,s)}const b=a(p,[["render",n]]);export{m as __pageData,b as default};