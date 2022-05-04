(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{460:function(s,t,a){"use strict";a.r(t);var r=a(19),e=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("为什么需要事务处理？")]),s._v(" "),a("p",[s._v("在执行SQL语句的时候，某些业务要求，一系列操作必须全部执行，而不能仅执行一部分。")]),s._v(" "),a("blockquote",[a("p",[s._v("MySQL5.0后引入了事务机制,MySQL支持几种基本的数据库引擎，并非所有引擎都支持事务处理。")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"数据写入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据写入"}},[s._v("#")]),s._v(" 数据写入")]),s._v(" "),a("p",[s._v("数据直接写入数据文件是非常危险的事，一旦写入过程出错或故障，会产生数据错乱等严重后果。MySQL利用日志来实现间接写入，MySQL共有五种日志，其中redo日志与undo日志与事务有关，日志文件相当于数据文件的一个副本。\n"),a("br")]),s._v(" "),a("center",[a("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-1/mysql1.png"}})]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"管理事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管理事务"}},[s._v("#")]),s._v(" 管理事务")]),s._v(" "),a("ul",[a("li",[s._v("对于单条SQL语句，数据库系统自动将其作为一个事务执行")]),s._v(" "),a("li",[s._v("多条SQL语句要想作为一个事务执行，就必须手动管理事务：")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v(" 语句\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"事务的属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的属性"}},[s._v("#")]),s._v(" 事务的属性")]),s._v(" "),a("p",[s._v("可见，数据库事务具有ACID这4个特性：")]),s._v(" "),a("ul",[a("li",[s._v("Atomic：原子性，将所有SQL作为原子工作单元执行，要么全部执行，要么全部不执行；")]),s._v(" "),a("li",[s._v("Consistent：一致性，不管任何给定的时间，并发事务有多少，事务必须保证运行结果的一致性；")]),s._v(" "),a("li",[s._v("Isolation：隔离性，如果有多个事务并发执行，每个事务作出的修改必须与其他事务隔离；")]),s._v(" "),a("li",[s._v("Duration：持久性，即事务完成后，对数据库数据的修改被持久化存储。")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"事物的隔离级别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事物的隔离级别"}},[s._v("#")]),s._v(" 事物的隔离级别")]),s._v(" "),a("p",[s._v("数据库中的事务是并发执行的，由于隔离性会给某些业务场景带来问题，所以需要设置事务的隔离级别来满足业务要求。")]),s._v(" "),a("p",[s._v("事务的四种隔离级别：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("隔离级别")]),s._v(" "),a("th",[s._v("功能")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("read uncommitted")]),s._v(" "),a("td",[s._v("读取未提交数据")])]),s._v(" "),a("tr",[a("td",[s._v("read committed")]),s._v(" "),a("td",[s._v("读取已提交数据")])]),s._v(" "),a("tr",[a("td",[s._v("repeatable read")]),s._v(" "),a("td",[s._v("重复读取（默认隔离级别）")])]),s._v(" "),a("tr",[a("td",[s._v("serializable")]),s._v(" "),a("td",[s._v("序列化执行事务")])])])]),s._v(" "),a("p",[a("strong",[s._v("业务场景示例：")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 两个事务同时购票，需要读取事务未提交的临时数据，查看其他事务是否已经选择该票但未提交。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UNCOMMITTED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v(" 语句\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("br"),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 银行转账业务，只能让当前事务读取其他事务提交后的数据")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMITTED")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v(" 语句\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("br"),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户拍下订单后还没付钱，此时涨价了，按照涨价前还是涨价后的价格呢？")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其他事务的提交结果不会影响当前事务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SESSION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ISOLATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LEVEL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPEATABLE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("READ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRANSACTION")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SQL")]),s._v(" 语句\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMIT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ROLLBACK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])],1)}),[],!1,null,null,null);t.default=e.exports}}]);