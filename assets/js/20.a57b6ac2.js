(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{316:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("blockquote",[a("p",[s._v("在线数据库：http://sqlfiddle.com/\n建表脚本：https://gitee.com/bqzzz/sql/tree/master/Scripts")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"基本查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本查询"}},[s._v("#")]),s._v(" 基本查询")]),s._v(" "),a("p",[s._v("①、查询所有记录")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("②、查询特定字段")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("③、查询时指定别名")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# AS可省略")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" \nename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'姓名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\njob "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'职位'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("④、对查询结果做运算")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sal"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"条件查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#条件查询"}},[s._v("#")]),s._v(" 条件查询")]),s._v(" "),a("ul",[a("li",[s._v("算术运算符：+、-、*、/、%")]),s._v(" "),a("li",[s._v("比较运算符：>、>=、<、<=、=、!=、IN(a,b,c)、IS NULL、IS NOT NULL、BETWEEN ... AND ...、LIKE、REGEXP")]),s._v(" "),a("li",[s._v("逻辑运算符：AND、OR、NOT、XOR")]),s._v(" "),a("li",[s._v("按位运算符：&、|、~、^ 、<<、>>")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT * FROM t_emp WHERE (deptno=10 OR deptno=20) AND sal>2000;\n")])])]),a("blockquote",[a("p",[s._v("注：WHERE子句中的条件表达式的执行顺序从左到右，应尽量把索引条件、筛选掉最多记录的条件写在左侧。")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"分页查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页查询"}},[s._v("#")]),s._v(" 分页查询")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LIMIT + 起始位置,偏移量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查询前五条数据 简写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LIMIT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序"}},[s._v("#")]),s._v(" 排序")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 默认升序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 降序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定多个排序规则，当第一个规则无法排序时使用第二个，以此类推，兜底使用主键来排序")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" sal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("hiredate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"去重"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去重"}},[s._v("#")]),s._v(" 去重")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# DISTINCT用于筛去结果集中完全相同的记录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" deptno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("job "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("br"),s._v(" "),a("h2",{attrs:{id:"聚合查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚合查询"}},[s._v("#")]),s._v(" 聚合查询")]),s._v(" "),a("p",[s._v("聚合函数可以对查询到的记录做简单的计算，常用聚合函数：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("函数")]),s._v(" "),a("th",[s._v("说明")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("AVG (列名)")]),s._v(" "),a("td",[s._v("平均值")])]),s._v(" "),a("tr",[a("td",[s._v("COUNT (列名)")]),s._v(" "),a("td",[s._v("非空记录数")])]),s._v(" "),a("tr",[a("td",[s._v("MAX (列名)")]),s._v(" "),a("td",[s._v("非空最大值")])]),s._v(" "),a("tr",[a("td",[s._v("MIN (列名)")]),s._v(" "),a("td",[s._v("非空最小值")])]),s._v(" "),a("tr",[a("td",[s._v("SUN (列名)")]),s._v(" "),a("td",[s._v("合计")])])])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("SUM")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IFNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IFNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IFNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("MIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("IFNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("注：聚合函数是对查询结果做统计，不能用在WHERE条件子句中。")])]),s._v(" "),a("br"),s._v(" "),a("h2",{attrs:{id:"分组查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组查询"}},[s._v("#")]),s._v(" 分组查询")]),s._v(" "),a("p",[s._v("一般使用"),a("strong",[s._v("GROUP BY")]),s._v("子句将结果集分组处理，用法示例：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果分组后的结果集还需要再分组，可使用"),a("strong",[s._v("逐级分组")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("job"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("job\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("如果需要对分组的结果再做相应的汇总计算，使用"),a("code",[s._v("WITH ROLLUP")]),s._v("：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("SELECT deptno,AVG(sal) FROM t_emp\nGROUP BY deptno WITH ROLLUP;\n")])])]),a("p",[s._v("如果使用 GROP BY 子句，SELECT子句就只能出现 分组列 和 聚合函数，不能出现其他列的字段，如果需要获得某个字段对应结果集(如获得按班级分组后，要显示每个班对应的人)可以使用 "),a("code",[s._v("GROP_CONCAT")]),s._v(" 函数，将该字段拼接成字符串显示：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("GROUP_CONCAT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" deptno "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("br"),s._v(" "),a("p",[a("strong",[s._v("使用 HAVING 子句")])]),s._v(" "),a("p",[s._v("由于WHERE子句的优先级高，执行WHERE时还没有检索出数据，所以WHERE子句中不能使用聚合函数。")]),s._v(" "),a("p",[s._v("但如果有这样查询逻辑：查询部门平局工资大于2000的部门")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这样查肯定报错,要配合HAVING子句")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" deptno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" deptno"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用HAVING子句配合GROUP BY字句做筛选，HAVING子句在GROUP BY后执行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" deptno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" t_emp\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" deptno "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("HAVING")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("AVG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("sal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("注：HAVING子句与WHERE子句的功能类似，但普通条件还是要用WHERE条件，WHERE执行顺序靠前，可以提前剔除大量无关数据")])]),s._v(" "),a("br"),s._v(" "),a("p",[a("strong",[s._v("查询语句的执行顺序：FROM -> WHERE -> GROUP BY -> SELECT -> ORDER BY -> LIMIT")])])])}),[],!1,null,null,null);t.default=e.exports}}]);