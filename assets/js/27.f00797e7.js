(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{320:function(t,a,s){"use strict";s.r(a);var e=s(5),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("center",[s("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-1/jwt1.png"}})]),t._v(" "),s("blockquote",[s("p",[t._v("JSON Web Token（JWT）是一种基于JSON的开放标准（"),s("a",{attrs:{href:"https://tools.ietf.org/html/rfc7519",target:"_blank",rel:"noopener noreferrer"}},[t._v("(RFC 7519"),s("OutboundLink")],1),t._v(")，也是目前最流行的跨域认证解决方案。")])]),t._v(" "),s("p",[t._v("传统的 cookie 认证方式看起来遵守了 REST 架构的无状态要求，但在 REST 式 Web 服务中使用 cookie 有点不现实，因为 Web 浏览器之外的客户端很难提供对 cookie 的支持。鉴于此，在 API 中使用 JWT 是一个很好的设计选择。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"一、jwt原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、jwt原理"}},[t._v("#")]),t._v(" 一、JWT原理")]),t._v(" "),s("p",[t._v("服务器认证以后，生成一个 JSON 对象，发回给用户。以后，用户与服务端通信的时候，都要发回这个 JSON 对象。服务器完全只靠这个对象认定用户身份。为了防止用户篡改数据，服务器在生成这个对象的时候，会加上"),s("strong",[t._v("签名")]),t._v("。")]),t._v(" "),s("p",[t._v("服务器就不保存任何 session 数据了，也就是说，服务器变成无状态了，从而比较容易实现扩展。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"二、jtw的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、jtw的结构"}},[t._v("#")]),t._v(" 二、JTW的结构")]),t._v(" "),s("p",[t._v("JWT 是一个很长的字符串，中间用点（"),s("code",[t._v(".")]),t._v("）分隔成三个部分：")]),t._v(" "),s("center",[s("img",{staticStyle:{zoom:"70%"},attrs:{src:"/2022-1/jwt2.jpg"}})]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Header（头部）")])]),t._v(" "),s("li",[s("p",[t._v("Payload（负载）")])]),t._v(" "),s("li",[s("p",[t._v("Signature（签名）")])])]),t._v(" "),s("h3",{attrs:{id:"_2-1-header"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-header"}},[t._v("#")]),t._v(" 2.1 Header")]),t._v(" "),s("p",[t._v("Header 部分是一个 JSON 对象，描述 JWT 的元数据，通常是下面的样子：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[s("code",[t._v("alg")]),t._v("属性表示签名的算法（algorithm），默认是 "),s("code",[t._v("HMAC SHA256")]),t._v("（写成 HS256）")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("typ")]),t._v("属性表示这个令牌（token）的类型（type），JWT 令牌统一写为"),s("code",[t._v("JWT")])])])]),t._v(" "),s("p",[t._v("最后，将上面的 JSON 对象使用 Base64URL 算法转成字符串。")]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"_2-2-payload"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-payload"}},[t._v("#")]),t._v(" 2.2 Payload")]),t._v(" "),s("p",[t._v("Payload 部分也是一个 JSON 对象，用来存放实际需要传递的数据。JWT 规定了7个官方字段，供选用：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("iss (issuer)：签发人")])]),t._v(" "),s("li",[s("p",[t._v("exp (expiration time)：过期时间")])]),t._v(" "),s("li",[s("p",[t._v("sub (subject)：主题")])]),t._v(" "),s("li",[s("p",[t._v("aud (audience)：受众")])]),t._v(" "),s("li",[s("p",[t._v("nbf (Not Before)：生效时间")])]),t._v(" "),s("li",[s("p",[t._v("iat (Issued At)：签发时间")])]),t._v(" "),s("li",[s("p",[t._v("jti (JWT ID)：编号")])])]),t._v(" "),s("p",[t._v("除了官方字段，还可以在这个部分定义私有字段，Payload JSON 对象也要使用 Base64URL 算法转成字符串")]),t._v(" "),s("blockquote",[s("p",[t._v("注："),s("strong",[t._v("JWT 默认是不加密")]),t._v("的，任何人都可以读到，所以不要把秘密信息放在这个部分。")])]),t._v(" "),s("br"),t._v(" "),s("h3",{attrs:{id:"_2-3-signature"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-signature"}},[t._v("#")]),t._v(" 2.3 Signature")]),t._v(" "),s("p",[t._v("Signature 部分是对前两部分的签名，防止数据篡改。")]),t._v(" "),s("p",[t._v("首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret )\n')])])]),s("p",[t._v('算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（'),s("code",[t._v(".")]),t._v("）分隔，就可以返回给用户。")]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"三、jwt的使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、jwt的使用方式"}},[t._v("#")]),t._v(" 三、JWT的使用方式")]),t._v(" "),s("p",[t._v("最好的做法是放在 HTTP 请求的头信息"),s("code",[t._v("Authorization")]),t._v("字段里面")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Authorization: Bearer <token>\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"四、jwt的特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、jwt的特点"}},[t._v("#")]),t._v(" 四、JWT的特点")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("JWT 默认是不加密，但也是"),s("strong",[t._v("可以加密")]),t._v("的。生成原始 Token 以后，可以用密钥再加密一次。")])]),t._v(" "),s("li",[s("p",[t._v("JWT 不加密的情况下，不能将秘密数据写入 JWT。")])]),t._v(" "),s("li",[s("p",[t._v("JWT 不仅可以用于认证，也可以用于交换信息。有效使用 JWT，可以降低服务器查询数据库的次数。")])]),t._v(" "),s("li",[s("p",[t._v("JWT 的最大缺点是，由于服务器不保存 session 状态，因此无法在使用过程中废止某个 token，或者更改 token 的权限。也就是说，一旦 JWT 签发了，在到期之前就会始终有效，除非服务器部署额外的逻辑。")])]),t._v(" "),s("li",[s("p",[t._v("JWT 本身包含了认证信息，一旦泄露，任何人都可以获得该令牌的所有权限。为了减少盗用，JWT 的"),s("strong",[t._v("有效期应该设置得比较短")]),t._v("。对于一些比较重要的权限，使用时应该再次对用户进行认证。")])]),t._v(" "),s("li",[s("p",[t._v("为了减少盗用，JWT 不应该使用 HTTP 协议明码传输，要"),s("strong",[t._v("使用 HTTPS 协议传输")]),t._v("。")])])]),t._v(" "),s("br"),t._v(" "),s("h2",{attrs:{id:"五、node示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、node示例"}},[t._v("#")]),t._v(" 五、Node示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jwt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jsonwebtoken'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" token "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" jwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sign")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'secret'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("expiresIn")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\njwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("verify")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njwt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("br"),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt.io"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON Web Token 入门教程"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://securityboulevard.com/2020/06/authentication-vs-authorization-defined-whats-the-difference-infographic/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authentication vs. Authorization Defined: What’s the Difference?"),s("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);a.default=r.exports}}]);