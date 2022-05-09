(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{454:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-git-clone"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-clone"}},[t._v("#")]),t._v(" 1. "),a("code",[t._v("git clone")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程库克隆到本地")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:YourName/Yourprj.git \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:YourName/Yourprj.git mydir\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:YourName/Yourprj.git "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-git-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-remote"}},[t._v("#")]),t._v(" 2. "),a("code",[t._v("git remote")])]),t._v(" "),a("p",[a("strong",[t._v("git remote")]),t._v(" 命令用于在远程仓库的操作")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 显示所有远程仓库")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连网查看某个远程仓库的最新信息")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("shortname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程版本库，并设置别名")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" name  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程仓库")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" old_name new_name  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 修改仓库名")]),t._v("\n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-git-push"}},[t._v("#")]),t._v(" 3. "),a("code",[t._v("git push")])]),t._v(" "),a("p",[a("strong",[t._v("git push")]),t._v(" 命用于从将本地的分支版本上传到远程并合并")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" （分支名相同）\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin main  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首次推送到origin的main分支，并将main设为默认分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到首次push时指定的默认的主机和分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin main     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到指定主机和分支")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --force origin master  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 有冲突，但又要强制推送")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除 origin 主机的 master 分支")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("由于远程库是空的，第一次推送main分支时，加上了-u参数，Git不但会把本地的main分支内容推送的远程新的main分支，还会把本地的main分支和远程的main分支关联起来，在以后的推送或者拉取时就可以简化命令。")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_4-git-pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-git-pull"}},[t._v("#")]),t._v(" 4. "),a("code",[t._v("git pull")])]),t._v(" "),a("p",[t._v("git pull命令用于从远程获取代码并合并本地的版本。git pull其实就是"),a("code",[t._v("git fetch")]),t._v("和"),a("code",[t._v("git merge origin/branch")]),t._v("的简写。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取默认主机的默认分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取origin主机的默认分支")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将远程主机 origin 的 master 分支拉取过来，与本地的 brantest 分支合并")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master:brantest \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果远程分支是与当前分支合并，则冒号后面的部分可以省略")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin dev \n")])])]),a("br"),t._v(" "),a("h2",{attrs:{id:"_5-git-fetch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-git-fetch"}},[t._v("#")]),t._v(" 5. "),a("code",[t._v("git fetch")])]),t._v(" "),a("p",[a("strong",[t._v("git fetch")]),t._v(" 将最新的代码信息从远程仓库拉取到本地。")]),t._v(" "),a("blockquote",[a("p",[t._v("如果确定不会有冲突，可以直接git pull，如果不知道有没有冲突或先查看冲突，可以先fetch再查看diff冲突，最后再merge。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);