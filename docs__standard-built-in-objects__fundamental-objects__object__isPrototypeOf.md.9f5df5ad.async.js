(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[275],{FNAL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),o=n.n(a),l=(n("B2uJ"),n("+su7"),n("qOys")),r=n.n(l);n("5Yjd");t["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"objectprototypeisprototypeof"},o.a.createElement("a",{"aria-hidden":"true",href:"#objectprototypeisprototypeof"},o.a.createElement("span",{className:"icon icon-link"})),"Object.prototype.isPrototypeOf"),o.a.createElement("p",null,o.a.createElement("code",null,"Object.prototype.isPrototypeOf()")," \u65b9\u6cd5\u7528\u4e8e\u6d4b\u8bd5\u6307\u5b9a\u5bf9\u8c61\u662f\u5426\u5b58\u5728\u4e8e\u76ee\u6807\u5bf9\u8c61\u7684\u539f\u578b\u94fe\u4e0a\u3002"),o.a.createElement("h2",{id:"\u8bed\u6cd5"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},o.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),o.a.createElement(r.a,{code:"O.prototype.isPrototypeOf(V);\n",lang:"js"}),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"\u53c2\u6570"),o.a.createElement("th",null,"\u8bf4\u660e"),o.a.createElement("th",null,"\u7c7b\u578b"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"V"),o.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61\uff08\u5728\u8be5\u5bf9\u8c61\u539f\u578b\u94fe\u4e0a\u641c\u5bfb\uff09"),o.a.createElement("td",null,"object")))),o.a.createElement("p",null,"\u8fd4\u56de\u6307\u5b9a\u5bf9\u8c61\u662f\u5426\u4f4d\u4e8e\u76ee\u6807\u5bf9\u8c61\u539f\u578b\u94fe\u4e0a\u7684 Boolean \u7c7b\u578b\u503c\u3002"),o.a.createElement("h2",{id:"\u793a\u4f8b"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},o.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),o.a.createElement(r.a,{code:"function Foo() {}\nfunction Bar() {}\nfunction Baz() {}\n\nBar.prototype = Object.create(Foo.prototype);\nBaz.prototype = Object.create(Bar.prototype);\n\nconst baz = new Baz();\n\nconsole.log(Baz.prototype.isPrototypeOf(baz));\n// true\n\nconsole.log(Bar.prototype.isPrototypeOf(baz));\n// true\n\nconsole.log(Foo.prototype.isPrototypeOf(baz));\n// true\n\nconsole.log(Object.prototype.isPrototypeOf(baz));\n// true\n",lang:"js"})))}}}]);