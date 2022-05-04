(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{452:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Web 应用中的用户并非都具有同等地位，为此，要为所有用户分配一个"),a("strong",[t._v("角色")]),t._v("。")]),t._v(" "),a("p",[t._v("在应用中实现角色有多种方法。具体采用何种实现方法取决于所需角色的数量和细分程度。例如，简单的应用可能只需要两个角色，一个表示普通用户，一个表示管理员。对于这种情况，在 "),a("code",[t._v("User")]),t._v(" 模型中添加一个 "),a("code",[t._v("is_administrator")]),t._v(" 布尔值字段可能就够了。复杂的应用可能需要在普通用户和管理员之间再细分出多个不同等级的角色。有些用户可能又有多个角色，故赋予用户一系列独立的"),a("strong",[t._v("权限")]),t._v("或许更合适。")]),t._v(" "),a("p",[t._v("以下介绍的用户角色实现方式结合了分立的角色和权限，赋予用户分立的角色，但是各个角色都通过权限列表定义允许用户执行的操作。")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1、数据库中表示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、数据库中表示"}},[t._v("#")]),t._v(" 1、数据库中表示")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_1-1-定义角色表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-定义角色表"}},[t._v("#")]),t._v(" 1.1 定义角色表")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    __tablename__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'roles'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Column"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" default"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("permissions字段表示角色的权限，含义如下：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("操作")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("权限名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("权限值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("关注用户")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("FOLLOW")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("在他人的文章中发表评论")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("COMMENT")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("2")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("写文章")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("WRITE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("4")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("管理他人发表的评论")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("MODERATE")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("8")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("管理员权限")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ADMIN")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("16")])])])])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_1-2-定义权限常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-定义权限常量"}},[t._v("#")]),t._v(" 1.2 定义权限常量")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Permission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    FOLLOW "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    COMMENT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n    WRITE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n    MODERATE "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n    ADMIN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n")])])]),a("p",[t._v("使用 2 的幂表示权限值有个好处：每种不同的权限组合对应的值都是唯一的，方便存入角色的 "),a("code",[t._v("permissions")]),t._v(" 字段。")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_1-3-管理角色权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-管理角色权限"}},[t._v("#")]),t._v(" 1.3 管理角色权限")]),t._v(" "),a("p",[t._v("添加这些权限常量之后，可以在 "),a("code",[t._v("Role")]),t._v(" 模型中定义几个新方法，用于管理权限：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add_permission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" perm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("perm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" perm\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove_permission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" perm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("perm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" perm\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reset_permissions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("has_permission")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" perm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permissions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" perm "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" perm\n")])])]),a("p",[a("strong",[t._v("示例：")])]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" role "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Role"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" role"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("add_permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n")])])]),a("center",[a("img",{attrs:{src:"/2022-1/flask8.png"}})]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("可在模型中增加静态方法，用于生成常用角色：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@staticmethod")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("insert_roles")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        roles "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FOLLOW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Moderator'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FOLLOW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODERATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Administrator'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FOLLOW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODERATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADMIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" r "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" roles"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_2、给用户添加角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、给用户添加角色"}},[t._v("#")]),t._v(" 2、给用户添加角色")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("设置默认角色（生成User对象时自动配置角色信息）")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("__init__")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("role "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("email "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" current_app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FLASKY_ADMIN'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("role "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Role"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("生成用户后手动设置角色")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("user = User(name = 'xxx')\n\nuser.role = Role.query.filter_by(name='User').first()\n")])])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_3、检测用户权限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、检测用户权限"}},[t._v("#")]),t._v(" 3、检测用户权限")]),t._v(" "),a("p",[t._v("为了简化角色和权限的实现过程，可在 "),a("code",[t._v("User")]),t._v(" 模型中添加一个辅助方法，检查赋予用户的角色是否有某项权限。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask_login "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" UserMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AnonymousUserMixin\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UserMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("can")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" perm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("role "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("role"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("has_permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("perm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_administrator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADMIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AnonymousUser")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("AnonymousUserMixin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("can")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" permissions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("is_administrator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\nlogin_manager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("anonymous_user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AnonymousUser\n")])])]),a("br"),t._v(" "),a("p",[t._v("如果想让视图函数只对具有特定权限的用户开放，可以使用自定义的装饰器。下面实现了两个装饰器，一个用于检查常规权限，另一个专门检查管理员权限。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("permission_required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorator")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@wraps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("decorated_function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" current_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                abort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decorated_function\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" decorator\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("admin_required")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" permission_required"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADMIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("使用示例：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/admin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@login_required")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@admin_required")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("for_admins_only")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"For administrators!"')]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_4、在模板中使用权限常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、在模板中使用权限常量"}},[t._v("#")]),t._v(" 4、在模板中使用权限常量")]),t._v(" "),a("p",[a("code",[t._v("app/main/__init__.py")]),t._v("：把 "),a("code",[t._v("Permission")]),t._v(" 类加入模板上下文：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@main.app_context_processor\ndef inject_permissions():\n    return dict(Permission=Permission)\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_5、测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、测试"}},[t._v("#")]),t._v(" 5、测试")]),t._v(" "),a("p",[a("code",[t._v("tests/test_user_model.py")]),t._v("：添加角色和权限的单元测试")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserModelTestCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unittest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TestCase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_user_role")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" User"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'john@example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cat'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertTrue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FOLLOW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertTrue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertTrue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODERATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADMIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test_anonymous_user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        u "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" AnonymousUser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FOLLOW"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("COMMENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("WRITE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MODERATE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("assertFalse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("can"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Permission"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ADMIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);