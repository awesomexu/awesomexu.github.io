(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{332:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-递归-recursion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-递归-recursion"}},[t._v("#")]),t._v(" 1. 递归（Recursion）")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"30%"},attrs:{src:"/2022-2/recursion1.png"}})]),t._v(" "),a("p",[t._v("💡 递归 <—> 循环 （循环调用自己）")]),t._v(" "),a("p",[a("strong",[t._v("【递归代码模板】")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 参数：当前层数、传到当前层的变量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 设定递归终止条件")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" MAX_LEVEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" given_result\n            \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 处理当前层的数据")]),t._v("\n    process_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 把数据传递给下一层")]),t._v("\n    recursion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 递归回来后要做的收尾工作(可选)")]),t._v("\n    reverse_state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[a("strong",[t._v("示例一：计算阶乘")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 套模板实现版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 设定递归终止条件：n<=1时指定返回值")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 处理当前层的数据：不需要特殊处理，直接拿本层层数")]),t._v("\n    cur_level_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" n\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 把数据传递给下一层：不需要额外的参数，只传递层数")]),t._v("\n    next_level_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Factorial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 递归回来后返回本层的处理结果")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cur_level_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" next_level_data\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#---------------------------------------------------")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简化实现版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Factorial"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#---------------------------------------------------")]),t._v("\n")])])]),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/recursion2.png"}})]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("示例二：斐波那契数列")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fib")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("fib"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/recursion3.png"}})]),t._v(" "),a("p",[t._v("💡 类似这种问题虽然可以递归解决，但很多子问题被重复计算，浪费了性能")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-分治-divide-conquer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分治-divide-conquer"}},[t._v("#")]),t._v(" 2. 分治（Divide & Conquer）")]),t._v(" "),a("p",[t._v("把一个大问题分解为不同的子问题，子问题一一解决再返回（互不相关的子问题可以并行执行），如果子问题之间相互依赖则不使用分治，而是使用动态规划或记录子问题结果等办法。")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/conquer1.png"}})]),t._v(" "),a("p",[t._v("【分治代码模板】")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("divide_conquer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("problem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" param2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 指定递归终止条件")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" problem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" given_result\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" given_result\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 准备数据、分解问题")]),t._v("\n\t\tdata "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prepare_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("problem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tsubproblem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" split_problem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("problem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3. 递归处理子问题")]),t._v("\n\t\tsubresult1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" divide_conquer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subproblem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tsubresult2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" divide_conquer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subproblem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tsubresult3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" divide_conquer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subproblem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4. 整合子问题的处理结果")]),t._v("\n\t\tresult "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process_result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("subresult1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("subresult2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("subresult3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);