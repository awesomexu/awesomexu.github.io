(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{319:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("center",[a("img",{attrs:{src:"/2022-1/flask1.png"}})]),t._v(" "),a("p",[t._v("在大多数标准中，Flask 都算是小型框架，小到可以称为“微框架”。但是，小并不意味着它比其他框架的功能少。Flask 自开发伊始就被设计为可扩展的框架，它具有一个包含基本服务的强健核心，其他功能则可通过扩展实现。Flask有3个主要依赖：路由、调试和 Web 服务器，网关接口（WSGI，Web server gateway interface）子系统由 Werkzeug 提供；模板系统由 Jinja2 提供；命令行集成由 Click 提供。")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_1、最小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、最小程序"}},[t._v("#")]),t._v(" 1、最小程序")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Flask\napp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Flask"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__name__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>Hello World!</h1>'")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_2、动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、动态路由"}},[t._v("#")]),t._v(" 2、动态路由")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("动态部分默认为字符串类型")]),t._v("，可以指定类型和别名，支持的类型包括 "),a("code",[t._v("string")]),t._v("、"),a("code",[t._v("int")]),t._v("、"),a("code",[t._v("float")]),t._v(" 和 "),a("code",[t._v("path")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/<name>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\t\t\t \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>Hello, {}!</h1>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/<int:id>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'type(id)：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_3、内建服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、内建服务器"}},[t._v("#")]),t._v(" 3、内建服务器")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("Bash Shell：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLASK_APP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hello.py\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("FLASK_DEBUGE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ flask run\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ flask run --host "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0 \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ flask run --help\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" $ flask shell\n")])])]),a("br"),t._v(" "),a("p",[t._v("CMD:")]),t._v(" "),a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" > "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" FLASK_APP=hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("py\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" > "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),t._v(" FLASK_DEBUG=1\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("venv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" > flask run\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_4、请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、请求"}},[t._v("#")]),t._v(" 4、请求")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("4.1 应用上下文和请求上下文")])]),t._v(" "),a("p",[t._v("为了让视图函数能够访问请求对象，可以直接将请求对象传入视图函数，为了避免大量可有可无的参数把视图函数弄得一团糟，Flask 使用上下文"),a("strong",[t._v("临时")]),t._v("把某些对象变为全局可访问。")]),t._v(" "),a("p",[t._v("在多线程服务器中，多个线程同时处理不同客户端发送的不同请求时，每个线程看到的 "),a("code",[t._v("request")]),t._v(" 对象必然不同。Flask 使用上下文让特定的变量在一个线程中全局可访问，与此同时却不会干扰其他线程。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("变量名")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("上下文")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("current_app")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("应用上下文")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("当前应用的应用实例")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("g")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("应用上下文")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("处理请求时用作临时存储的对象，每次请求都会重设这个变量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("request")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求上下文")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求对象，封装了客户端发出的 HTTP 请求中的内容")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("session")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("请求上下文")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("用户会话，值为一个字典，存储请求之间需要“记住”的值")])])])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("应用上下文被推送后，就可以在当前线程中使用 "),a("code",[t._v("current_app")]),t._v(" 和 "),a("code",[t._v("g")]),t._v(" 变量。")])]),t._v(" "),a("li",[a("p",[t._v("请求上下文被推送后，就可以使用 "),a("code",[t._v("request")]),t._v(" 和 "),a("code",[t._v("session")]),t._v(" 变量。")])])]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("4.2 请求分派")])]),t._v(" "),a("p",[t._v("请求到来时，Flask会在"),a("strong",[t._v("URL映射")]),t._v("中查找对应的视图函数，通常使用app.route()装饰器构建映射。"),a("code",[t._v("app.url_map")]),t._v("参数可以查看url映射表。")]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("4.3 请求钩子")])]),t._v(" "),a("p",[t._v("有时在处理请求之前或之后执行代码会很有用。例如，在请求开始时，可能需要创建数据库连接或者验证发起请求的用户身份。为了避免在每个视图函数中都重复编写代码，Flask 提供了注册通用函数的功能，注册的函数可在请求被分派到视图函数之前或之后调用。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("钩子函数")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("before_request")])]),t._v(" "),a("td",[t._v("注册一个函数，在每次请求之前运行")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("before_request")])]),t._v(" "),a("td",[t._v("只在处理第一个请求之前运行")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("after_request")])]),t._v(" "),a("td",[t._v("如果没有未处理的异常抛出，在每次请求之后运行")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("teardown_request")])]),t._v(" "),a("td",[t._v("即使有未处理的异常抛出，也在每次请求之后运行")])])])]),t._v(" "),a("br"),t._v(" "),a("p",[a("strong",[t._v("4.4 请求方法")])]),t._v(" "),a("p",[t._v("Web 应用使用不同的 HTTP 方法处理 URL 。当你使用 Flask 时，应当熟悉 HTTP 方法。 缺省情况下，一个路由只回应 "),a("code",[t._v("GET")]),t._v(" 请求。 可以使用 route()装饰器的 "),a("code",[t._v("methods")]),t._v(" 参数来处理不同的 HTTP 方法:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("from flask import request\n\n@app.route('/login', methods=['GET', 'POST'])\ndef login():\n    if request.method == 'POST':\n        return do_the_login()\n    else:\n        return show_the_login_form()\n")])])]),a("p",[t._v("如果当前使用了 GET 方法， Flask 会自动添加 "),a("code",[t._v("HEAD")]),t._v(" 方法支持，并且同时还会 按照 "),a("a",{attrs:{href:"https://www.ietf.org/rfc/rfc2068.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP RFC"),a("OutboundLink")],1),t._v(" 来处理 "),a("code",[t._v("HEAD")]),t._v(" 请求。同样， "),a("code",[t._v("OPTIONS")]),t._v(" 也会自动实现。")]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_5、响应"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、响应"}},[t._v("#")]),t._v(" 5、响应")]),t._v(" "),a("br"),t._v(" "),a("p",[t._v("返回一个元组：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>Bad Request</h1>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dict")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xxx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("返回响应对象：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("resp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" make_response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("render_template"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'error.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'X-Something'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A value'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res\n")])])]),a("p",[t._v("返回重定向：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://www.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url_for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("返回404：")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" flask "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" abort\n\n"),a("span",{pre:!0,attrs:{class:"token decorator annotation punctuation"}},[t._v("@app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/<id>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_user")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" load_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        abort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<h1>Hello, {}</h1>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("br"),t._v(" "),a("h3",{attrs:{id:"_6、构建url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、构建url"}},[t._v("#")]),t._v(" 6、构建URL")]),t._v(" "),a("br"),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("函数")]),t._v(" "),a("th",[t._v("结果")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("url_for('index')")])]),t._v(" "),a("td",[a("code",[t._v("/")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("url_for('index', _external=True)")])]),t._v(" "),a("td",[a("code",[t._v("http://localhost:5000/")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("url_for('user', name='john', _external=True)")])]),t._v(" "),a("td",[a("code",[t._v("http://localhost:5000/user/john")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("url_for('user', name='john', page=2, version=1)")])]),t._v(" "),a("td",[a("code",[t._v("/user/john?page=2&version=1")])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("生成连接应用内不同路由的链接时，使用相对地址就足够了。如果要生成在浏览器之外使用的链接，则必须使用绝对地址，例如在电子邮件中发送的链接。")])]),t._v(" "),a("br"),t._v(" "),a("h3",{attrs:{id:"_7、使用静态文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、使用静态文件"}},[t._v("#")]),t._v(" 7、使用静态文件")]),t._v(" "),a("p",[t._v("静态文件默认放在应用的 /static 目录中。")]),t._v(" "),a("p",[t._v("生成相应的 URL："),a("code",[t._v("url_for('static', filename='css/styles.css')")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);