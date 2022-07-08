(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{320:function(t,a,s){"use strict";s.r(a);var n=s(5),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("center",[s("img",{staticStyle:{zoom:"20%"},attrs:{src:"/2022-1/py1.jpg"}})]),t._v(" "),s("p",[t._v("有很多不同的方法来实现垃圾回收，例如跟踪，引用计数，转义分析，时间戳和心跳信号等。不同的语言依赖于不同的垃圾回收实现，例如，有些将其与编译器和运行时系统集成在一起。而其他语言则可能需要事后设置，甚至可能需要重新编译。Python中垃圾收集器使用基于引用计数的方法。它在程序执行期间运行，并在对象的引用计数达到0时开始工作。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_1、引用管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、引用管理"}},[t._v("#")]),t._v(" 1、引用管理")]),t._v(" "),s("p",[t._v("首先，内存管理是基于引用的管理。我们知道Python中，引用与对象是分离的，一个对象可以有多个引用，而每个对象都存有指向自己的引用计数。可以使用标准库"),s("code",[t._v("sys")]),t._v("查看某个对象的引用计数：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sys "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" getrefcount\n\na "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getrefcount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印2")]),t._v("\n\nb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("getrefcount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打印3")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("由于调用"),s("code",[t._v("getrefcount()")]),t._v("时又创建了一次引用，所以打印的引用计数会比实际多一个。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_2、对象引用对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、对象引用对象"}},[t._v("#")]),t._v(" 2、对象引用对象")]),t._v(" "),s("p",[t._v("Python中对象会引用别的对象，而容器对象的引用会构成很复杂的拓扑结构：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("l "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nd "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"k"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\ny "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nz "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("使用 "),s("code",[t._v("objgraph")]),t._v(" 包可以绘制引用关系：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" objgraph\nobjgraph"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("show_refs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filename"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sample-graph.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("绘制的 z 对象的引用图如下：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"80%"},attrs:{src:"/2022-1/py2.png"}})]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_3、引用环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、引用环"}},[t._v("#")]),t._v(" 3、引用环")]),t._v(" "),s("p",[t._v("两个对象相互引用，即构成了所谓的"),s("strong",[t._v("引用环")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("a = []\nb = [a]\na.append(b)\n\nobjgraph.show_refs([a,b], filename='a-b.png')\n")])])]),s("center",[s("img",{attrs:{src:"/2022-1/py3.png"}})]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("即使是单个对象，只需自己引用自己，也会构成引用环：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("a = []\na.append(a)\n\nobjgraph.show_refs([a], filename='a-b.png')\n")])])]),s("center",[s("img",{attrs:{src:"/2022-1/py4.png"}})]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("del")]),t._v("关键字除了可以删除容器中的元素，还可以删除某个引用。")])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"_4、垃圾回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、垃圾回收"}},[t._v("#")]),t._v(" 4、垃圾回收")]),t._v(" "),s("p",[t._v("CPython中的内存管理和垃圾回收有两个策略：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("引用计数")])]),t._v(" "),s("li",[s("p",[t._v("分代回收")])])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"_4-1-引用计数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-引用计数"}},[t._v("#")]),t._v(" 4.1 引用计数")]),t._v(" "),s("p",[t._v("CPython中主要的垃圾收集机制是通过引用计数，且引用计数无法被禁用，而后面谈到的分代回收策略则可以禁止。")]),t._v(" "),s("p",[t._v("原理上，Python的某个对象的引用计数变为0时，就要成为被回收的垃圾了。例如：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("del")]),t._v(" a\n")])])]),s("p",[t._v("当垃圾回收启动时，Python扫描到这个引用计数为0的对象，会将其所占据的内存清空。而垃圾回收是个费时费力的事，垃圾回收期间Python不能进行其他任务。频繁的垃圾回收会大大降低Python的效率，所以Python只会在特定条件下启动垃圾回收。Python运行时，会记录其中分配对象和取消分配对象的次数，当两者差值高于某个"),s("strong",[t._v("阈值")]),t._v("，垃圾回收才会启动。")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"_4-2-分代回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-分代回收"}},[t._v("#")]),t._v(" 4.2 分代回收")]),t._v(" "),s("p",[t._v("除了上面这种"),s("strong",[t._v("实时的")]),t._v("，"),s("strong",[t._v("自动的")]),t._v("基于引用计数的垃圾回收实现方法，Python还同时采用"),s("strong",[t._v("分代回收")]),t._v("策略，这一次略的基本假设是，存活时间越久的对象，越不可能在以后成为垃圾。Python将所有对象分为三代，所有新建对象都是0代，如果经过一次扫描没被回收即成为了1代，以此类推。")]),t._v(" "),s("br"),t._v("\nPython的基于引用计数的方法是自动的，并且是实时发生的，而分代垃圾回收模块的操作是周期性的，可以手动调用，常用API：\n"),s("ul",[s("li",[s("p",[s("code",[t._v("get_shreshold()")]),t._v("方法可以查看触发垃圾收集的阈值：")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("gc.get_count（）")]),t._v("方法可以查看内存中当前存在的各代对象数量")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("gc.set_threshold（")]),t._v("）方法可以更改触发垃圾收集的阈值")])])]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" gc\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_threshold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (700, 10, 10)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_threshold"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("700.10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2代垃圾回收会更频繁")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" gc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collect"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 手动触发垃圾回收")]),t._v("\n")])])]),s("p",[t._v("对于每一代，垃圾收集器模块都有一个阈值对象。如果对象数超过该阈值，则垃圾收集器将触发收集过程，在该过程中幸存下来的对象会被归为下一代。默认情况下，Python对于最年轻的一代的阈值为700，对于两个较老的一代中的每个阈值为10。")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"_4-3-引用环的回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-引用环的回收"}},[t._v("#")]),t._v(" 4.3 引用环的回收")]),t._v(" "),s("p",[t._v("分代回收可以检测和解决引用环问题，在Python 1.5中引入了循环检测算法，它跟踪容器对象，因为只有它们才能创建这种引用环。")]),t._v(" "),s("p",[t._v("循环检测算法的基本原理是：Python会复制每个对象的引用计数，记为"),s("code",[t._v("gc_ref")]),t._v("。假设每个对象为"),s("code",[t._v("i")]),t._v("，该对象的计数为"),s("code",[t._v("gc_ref_i")]),t._v("。Python会遍历所有的对象"),s("code",[t._v("i")]),t._v("，对于每个对象"),s("code",[t._v("i")]),t._v("所引用的对象"),s("code",[t._v("j")]),t._v("，将"),s("code",[t._v("j")]),t._v("的"),s("code",[t._v("gc_ref_j")]),t._v("减1：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"60%"},attrs:{src:"/2022-1/py5.png"}})]),t._v(" "),s("p",[t._v("遍历后，gc_ref不为0的对象及这些对象引用的对象，以及更下游的对象会被保留，而引用环中的对象会被回收。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/vamei/p/3232088.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python深入06 Python的内存管理"),s("OutboundLink")],1),t._v("，by Vamei")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://scoutapm.com/blog/python-garbage-collection",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Garbage Collection: A Guide for Developers"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://stackify.com/python-garbage-collection/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Garbage Collection: What It Is and How It Works"),s("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);