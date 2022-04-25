(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{454:function(t,e,s){"use strict";s.r(e);var n=s(19),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("JavaScript 有一个基于事件循环的运行时模型，它负责执行代码、收集和处理事件以及执行排队的子任务。该模型与 C 和 Java 等其他语言中的模型有很大不同。\n--MDN")])]),t._v(" "),s("p",[t._v("本文将学习 NodeJS 的基本工作原理以及同步或异步代码的执行过程。")]),t._v(" "),s("h2",{attrs:{id:"_1-什么是事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是事件循环"}},[t._v("#")]),t._v(" 1. 什么是事件循环？")]),t._v(" "),s("p",[t._v("事件循环（event loop）是一个事件监听器，它在 NodeJS 环境中运行，随时准备监听、处理和输出事件。")]),t._v(" "),s("p",[t._v("事件可以是鼠标单击、按键或超时等任何事件。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_2-什么是同步和异步编程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是同步和异步编程"}},[t._v("#")]),t._v(" 2. 什么是同步和异步编程？")]),t._v(" "),s("p",[t._v("同步编程意味着代码按照定义的顺序运行。程序就是按照代码的顺序一行一行执行的。")]),t._v(" "),s("p",[t._v("对于异步编程，先看一个例子：")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeOut")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'start'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//----------------")]),t._v("\nstart\nHello World\n")])])]),s("p",[t._v("这些函数调用不会逐行运行，而是仅在需要时运行，与函数的声明顺序无关。在上面例子中，当所有同步函数都执行完毕后，setTimeOut里面的函数会在 3 秒后自动运行。")]),t._v(" "),s("p",[t._v("💡 注意：异步调用的内容只有在所有同步调用都执行完毕后才会执行，它们将在后台被处理。")]),t._v(" "),s("p",[t._v("NodeJS是如何先运行所有同步调用，并在后台处理异步调用的呢？所有这些机制都可以通过 NodeJS 事件循环轻松解释。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_3-事件循环是如何工作的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-事件循环是如何工作的"}},[t._v("#")]),t._v(" 3. 事件循环是如何工作的？")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"_3-1-同步代码的执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-同步代码的执行过程"}},[t._v("#")]),t._v(" 3.1 同步代码的执行过程")]),t._v(" "),s("p",[t._v("我们先看看NodeJS事件循环如何执行一个简单的同步程序，然后我们将逐行测试Node是如何执行程序的")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"70%"},attrs:{src:"/2022-1/eventloop0.png"}})]),t._v(" "),s("p",[t._v("左上角是代码，左下角是控制台输出，除此之外还有函数调用栈、Node API、回调函数队列，这大体就是NodeJS的执行环境。")]),t._v(" "),s("p",[t._v("当程序开始执行时，它首先被包裹在一个匿名的 main() 函数中。这是由 NodeJS 自动定义的。所以 main() 首先被推送到回调堆栈")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop1.png"}})]),t._v(" "),s("p",[t._v("接下来，创建变量 a 和 b，并将它们的和存储在变量 sum 中。所有这些值都存储在内存中。")]),t._v(" "),s("p",[t._v("然后，console.log() 在回调堆栈中被调用和推送。在终端屏幕上输出结果。")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop2.png"}})]),t._v(" "),s("p",[t._v("console.log()函数执行后，将从回调堆栈中删除。然后由于没有任何东西可以从程序中调用，所以main() 也被删除，这就是同步程序的执行方式。")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop3.png"}})]),t._v(" "),s("br"),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop4.png"}})]),t._v(" "),s("h3",{attrs:{id:"_3-2-异步代码的执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-异步代码的执行过程"}},[t._v("#")]),t._v(" 3.2 异步代码的执行过程")]),t._v(" "),s("p",[t._v("现在，再看看如何在 NodeJS 中执行异步函数调用：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop5.png"}})]),t._v(" "),s("p",[t._v('同样的，当程序开始执行时，首先将 main() 函数添加到回调堆栈中，然后 console.log("Start") 被调用并添加到函数调用栈中，执行完成后会从函数调用栈中被释放：')]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop6.png"}})]),t._v(" "),s("br"),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop7.png"}})]),t._v(" "),s("p",[t._v("下一个是添加到回调堆栈的 setTimeOut() 函数，但由于这是一个异步函数，它不会在回调堆栈中得到处理。而是被添加到Node API中，在该 API 中注册事件并设置回调函数以在后台处理：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop8.png"}})]),t._v(" "),s("br"),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop9.png"}})]),t._v(" "),s("p",[t._v("接下来还是一个setTimeOut() 函数，也会被添加到Node API中，不过这个会在2秒后才被执行。")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop10.png"}})]),t._v(" "),s("br"),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop11.png"}})]),t._v(" "),s("p",[t._v("然后就是console.log()执行同步打印，接下来，所有同步函数都已处理完毕，main() 从调用栈中删除。")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop12.png"}})]),t._v(" "),s("p",[t._v("main() 从调用栈中被删除后，在后台，所有异步函数都得到处理，它们的回调存储在回调队列中，在event loop的驱动下得到执行：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop13.png"}})]),t._v(" "),s("br"),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop14.png"}})]),t._v(" "),s("br"),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop15.png"}})]),t._v(" "),s("p",[t._v("最后，这些在执行后也被删除，现在回调堆栈为空：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/eventloop16.png"}})]),t._v(" "),s("p",[t._v("这就是 NodeJS 环境中下执行同步和异步函数的基本过程。")]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",target:"_blank",rel:"noopener noreferrer"}},[t._v("The event loop"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.freecodecamp.org/news/nodejs-eventloop-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Event Loops in NodeJS - Beginner's Guide to Synchronous and Asynchronous Code"),s("OutboundLink")],1)])])],1)}),[],!1,null,null,null);e.default=a.exports}}]);