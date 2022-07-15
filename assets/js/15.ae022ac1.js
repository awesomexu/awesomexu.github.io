(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{308:function(t,_,v){"use strict";v.r(_);var r=v(5),a=Object(r.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("center",[v("img",{staticStyle:{zoom:"100%"},attrs:{src:"/2022-1/git1.png"}})]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_1-初始化-init"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-初始化-init"}},[t._v("#")]),t._v(" 1. 初始化（init）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("git init")]),t._v(" "),v("td",[t._v("初始化仓库，创建.git文件夹管理文件")])])])]),t._v(" "),v("p",[t._v("该命令将创建一个名为 "),v("code",[t._v(".git")]),t._v(" 的子目录，这个子目录含有初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。 但是，在这个时候，仅仅是做了一个初始化的操作，项目里的文件还没有被跟踪。")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_2-提交到暂存区-add"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-提交到暂存区-add"}},[t._v("#")]),t._v(" 2. 提交到暂存区（add）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("git add")]),t._v(" "),v("td",[t._v("将工作区文件提交到暂存区")])]),t._v(" "),v("tr",[v("td",[t._v("git add .")]),t._v(" "),v("td",[t._v("批量提交到暂存区")])])])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_3-提交到本地仓库-commit"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交到本地仓库-commit"}},[t._v("#")]),t._v(" 3. 提交到本地仓库（commit）")]),t._v(" "),v("center",[v("img",{staticStyle:{zoom:"100%"},attrs:{src:"/2022-1/git2.png"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v('git commit -m "..."')]),t._v(" "),v("td",[t._v("提交暂存区到本地仓库，并附带信息")])]),t._v(" "),v("tr",[v("td",[t._v('git commit -am "..."')]),t._v(" "),v("td",[t._v("把所有跟踪的文件改动一并add到暂存区，然后提交")])]),t._v(" "),v("tr",[v("td",[t._v('git commit -amend -m "..."')]),t._v(" "),v("td",[t._v("修改（替换）最后一次的提交信息")])])])]),t._v(" "),v("aside",[t._v("\n💡 如果新增了一个文件，那么必须要用 git add 命令跟踪新文件，再用 git commit -m 提交。\n"),v("p",[t._v("如果只是修改了已跟踪的文件，那么可以用 git commit -am 命令一起完成“提交文件到暂存区、提交暂存区的文件”（省略了 git add 命令，因为修改文件也必须add才能commit）。")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_4-状态-status"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-状态-status"}},[t._v("#")]),t._v(" 4. 状态（status）")]),t._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:"/2022-1/git3.png"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("git status")]),t._v(" "),v("td",[t._v("命令输出仓库当前的状态")])]),t._v(" "),v("tr",[v("td",[t._v("git status -s/--short")]),t._v(" "),v("td",[t._v("格式更为紧凑的输出")])])])]),t._v(" "),v("p",[t._v("新添加的未跟踪文件前面有 "),v("code",[t._v("??")]),t._v(" 标记，新添加到暂存区中的文件前面有 "),v("code",[t._v("A")]),t._v(" 标记，修改过的文件前面有 "),v("code",[t._v("M")]),t._v(" 标记。 输出中有两栏，左栏指明了暂存区的状态，右栏指明了工作区的状态。")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_5-比较差异-diff"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_5-比较差异-diff"}},[t._v("#")]),t._v(" 5. 比较差异（diff）")]),t._v(" "),v("center",[v("img",{staticStyle:{zoom:"25%"},attrs:{src:"/2022-1/git4.png"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("git diff")]),t._v(" "),v("td",[t._v("比较工作区与暂存区")])]),t._v(" "),v("tr",[v("td",[t._v("git diff --cached(staged)")]),t._v(" "),v("td",[t._v("比较暂存区与与上一次commit")])]),t._v(" "),v("tr",[v("td",[t._v("git diff HEAD")]),t._v(" "),v("td",[t._v("比较工作区与上一次commit")])]),t._v(" "),v("tr",[v("td",[t._v("git diff HEAD^")]),t._v(" "),v("td",[t._v("比较工作区与上上次commit")])]),t._v(" "),v("tr",[v("td",[t._v("git diff HEAD^^")]),t._v(" "),v("td",[t._v("比较工作区与上上上次commit")])]),t._v(" "),v("tr",[v("td",[t._v("git diff HEAD~2")]),t._v(" "),v("td",[t._v("比较工作区与上上上次commit")])]),t._v(" "),v("tr",[v("td",[t._v("git diff "),v("code",[t._v("<commitId>")])]),t._v(" "),v("td",[t._v("比较工作区与指定 commitid")])])])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_6-版本回退-reset"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_6-版本回退-reset"}},[t._v("#")]),t._v(" 6. 版本回退（reset）")]),t._v(" "),v("center",[v("img",{staticStyle:{zoom:"100%"},attrs:{src:"/2022-1/git5.png"}})]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("git reset [HEAD]")]),t._v(" "),v("td",[t._v("重置当前分支的HEAD为指定commit，同时重置暂存区，但工作区不变")])]),t._v(" "),v("tr",[v("td",[t._v("git reset [HEAD] [--] files")]),t._v(" "),v("td",[t._v("取消对某个文件的暂存")])]),t._v(" "),v("tr",[v("td",[t._v("git reset --hard HEAD")]),t._v(" "),v("td",[t._v("重置当前分支的HEAD为指定commit，同时重置暂存区和工作区")])]),t._v(" "),v("tr",[v("td",[t._v("git reset --keep HEAD")]),t._v(" "),v("td",[t._v("重置当前分支的HEAD为指定commit，同时保持暂存区和工作区不变")])])])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_7-删除和移动-rm-mv"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_7-删除和移动-rm-mv"}},[t._v("#")]),t._v(" 7. 删除和移动（rm，mv）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("git rm file")]),t._v(" "),v("td",[t._v("将文件从暂存区和工作区中删除")])]),t._v(" "),v("tr",[v("td",[t._v("git rm --cached file")]),t._v(" "),v("td",[t._v("从暂存区中删除，但不删除工作目录中的文件")])]),t._v(" "),v("tr",[v("td",[t._v("git rm -f file")]),t._v(" "),v("td",[t._v("强行从暂存区和工作区中删除修改后的文件")])]),t._v(" "),v("tr",[v("td",[t._v("git mv [file] [newfile]")]),t._v(" "),v("td",[t._v("移动或重命名一个文件、目录或软连接")])]),t._v(" "),v("tr",[v("td",[t._v("git mv -f [file] [newfile]")]),t._v(" "),v("td",[t._v("新文件名已经存在，但还是要重命名它")])])])]),t._v(" "),v("p",[t._v("运行 "),v("code",[t._v("git mv")]),t._v(" 就相当于运行了下面三条命令：")]),t._v(" "),v("div",{staticClass:"language-bash extra-class"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" README.md README\n$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" README.md\n$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" README\n")])])]),v("aside",[t._v("\n💡 如此分开操作，Git 也会意识到这是一次重命名，所以不管何种方式结果都一样。 两者唯一的区别在于，`git mv` 是一条命令而非三条，直接使用 `git mv` 方便得多。 不过在使用其他工具重命名文件时，记得在提交前 `git rm` 删除旧文件名，再 `git add` 添加新文件名。\n")]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_8-日志-log"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_8-日志-log"}},[t._v("#")]),t._v(" 8. 日志（log）")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("含义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("git log")]),t._v(" "),v("td",[t._v("查看 commit 提交历史")])]),t._v(" "),v("tr",[v("td",[t._v("git log --pretty=oneline")]),t._v(" "),v("td",[t._v("简化log输出内容")])]),t._v(" "),v("tr",[v("td",[t._v("git log --grapg")]),t._v(" "),v("td",[t._v("图形化显示提交记录")])]),t._v(" "),v("tr",[v("td",[t._v("git reflog")]),t._v(" "),v("td",[t._v("查看git命令的历史记录")])])])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"_9-取消跟踪-gitignore"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_9-取消跟踪-gitignore"}},[t._v("#")]),t._v(" 9. 取消跟踪（gitignore）")]),t._v(" "),v("blockquote",[v("p",[v("code",[t._v(".gitignore")]),t._v("中指定的的文件不会被跟踪")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("# 忽略所有的 .a 文件\n*.a\n\n# 但跟踪所有的 lib.a，即便你在前面忽略了 .a 文件\n!lib.a\n\n# 只忽略当前目录下的 TODO 文件，而不忽略 subdir/TODO\n/TODO\n\n# 忽略任何目录下名为 build 的文件夹\nbuild/\n\n# 忽略 doc/notes.txt，但不忽略 doc/server/arch.txt\ndoc/*.txt\n\n# 忽略 doc/ 目录及其所有子目录下的 .pdf 文件\ndoc/**/*.pdf\n")])])]),v("blockquote",[v("p",[t._v("GitHub 有一个十分详细的针对数十种项目及语言的 "),v("code",[t._v(".gitignore")]),t._v("文件列表， 可以在 "),v("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/github/gitignore"),v("OutboundLink")],1),t._v(" 找到。")])]),t._v(" "),v("br"),t._v(" "),v("h2",{attrs:{id:"参考文档"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),v("ul",[v("li",[v("p",[v("a",{attrs:{href:"https://git-scm.com/book/zh/v2/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git-Book"),v("OutboundLink")],1)])]),t._v(" "),v("li",[v("p",[v("a",{attrs:{href:"http://marklodato.github.io/visual-git-guide/index-zh-cn.html#commit",target:"_blank",rel:"noopener noreferrer"}},[t._v("图解Git"),v("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);_.default=a.exports}}]);