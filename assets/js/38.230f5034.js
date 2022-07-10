(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{330:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("MongoDB的聚合框架是一个计算框架，其可以作用在一个多个集合上，对集合中的数据进行一系列运算、转化为希望的格式。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1-聚合运算的语法格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-聚合运算的语法格式"}},[t._v("#")]),t._v(" 1. 聚合运算的语法格式")]),t._v(" "),a("p",[t._v("MongoDB的数据运算过程成为Pipeline，其由多个Stage组成，每个Pipeline接收一系列文档作为原始数据，通过每个Stage的计算传递中间结果，最后输出最终结果。")]),t._v(" "),a("div",{staticClass:"language-jsx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-jsx"}},[a("code",[t._v("pipeline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("$stage1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $stage2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $stage3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\ndb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("collection_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("aggregate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pipeline"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("br"),t._v(" "),a("p",[a("strong",[t._v("常用stage：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("步骤")]),t._v(" "),a("th",[t._v("作用")]),t._v(" "),a("th",[t._v("SQL对比")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("$match")]),t._v(" "),a("td",[t._v("过滤")]),t._v(" "),a("td",[t._v("WHERE")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("$project")])]),t._v(" "),a("td",[t._v("投影")]),t._v(" "),a("td",[t._v("AS")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("$sort")])]),t._v(" "),a("td",[t._v("排序")]),t._v(" "),a("td",[t._v("ORDER BY")])]),t._v(" "),a("tr",[a("td",[t._v("$group")]),t._v(" "),a("td",[t._v("分组")]),t._v(" "),a("td",[t._v("GROUP BY")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("$skip/$limit")])]),t._v(" "),a("td",[t._v("结果限定")]),t._v(" "),a("td",[t._v("SKIP/LIMIT")])]),t._v(" "),a("tr",[a("td",[t._v("$lookup")]),t._v(" "),a("td",[t._v("左外连接")]),t._v(" "),a("td",[t._v("LEFT OUTER JOIN")])]),t._v(" "),a("tr",[a("td",[a("strong",[t._v("$distinct")])]),t._v(" "),a("td",[t._v("返回具有指定字段的不同值的文档数组")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("$unwind")]),t._v(" "),a("td",[t._v("展开数组")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[t._v("$facet/$bucket")]),t._v(" "),a("td",[t._v("分面搜索")]),t._v(" "),a("td")])])]),t._v(" "),a("p",[t._v("每个步骤中还有相应的运算符：")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/MongoDB3.png"}})]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-聚合运算的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-聚合运算的使用场景"}},[t._v("#")]),t._v(" 2. 聚合运算的使用场景")]),t._v(" "),a("blockquote",[a("p",[t._v("“OLTP(on-line transactionprocessing)翻译为联机事务处理。 OLAP(On-Line Analytical Processing)翻译为联机分析处理。 从字面上来看OLTP是做事务处理,OLAP是做分析处理。从对数据库操作来看,OLTP主要是对数据的增删改,OLAP是对数据的查询。")])]),t._v(" "),a("p",[t._v("聚合运算在oltp中可用于分页查询、投影等计算，也可在olap中做报表分析统计，如：")]),t._v(" "),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-2/MongoDB4.png"}})]),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-聚合查询的实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-聚合查询的实例"}},[t._v("#")]),t._v(" 3. 聚合查询的实例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -------SQL--------")]),t._v("\n\nSELECT \n\tFIRST_NAME AS "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'名'")]),t._v("\n\tLAST_NAME AS "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'姓'")]),t._v("\nFROM Users\nWHERE GENDER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'男'")]),t._v("\nSKIP "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\nLIMIT "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -------MQL--------")]),t._v("\n\ndb.users.aggregate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$match")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("gender: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"男"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$skip")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$limit")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$project")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'名'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$first_name'")]),t._v(",\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'姓'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$last_name'")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -------SQL--------")]),t._v("\n\nSELECT\n\tDEPARTMENT, \n\tCOUNTER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AS EMP_QTY\nFROM Users\nWHERE GENDER "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'女'")]),t._v("\nGROUP BY DEPARTMENT HAVING COUNT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -------MQL--------")]),t._v("\n\ndb.users.aggregate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$match")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("gender: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'女'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$group")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t_id: "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$DEPARTMENT'")]),t._v(",\n\t\temp_qty: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$sum")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(",\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$match")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("emp_qty: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$lt")]),t._v(":10"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.mongodb.com/docs/manual/aggregation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aggregation Operations"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);