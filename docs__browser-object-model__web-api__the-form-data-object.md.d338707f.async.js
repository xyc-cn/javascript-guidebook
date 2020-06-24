(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[85],{RodB:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=(t("B2uJ"),t("+su7"),t("qOys")),m=t.n(r);t("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"formdata\u5bf9\u8c61"},l.a.createElement("a",{"aria-hidden":"true",href:"#formdata\u5bf9\u8c61"},l.a.createElement("span",{className:"icon icon-link"})),"FormData\u5bf9\u8c61"),l.a.createElement("p",null,"XMLHttpRequest Level 2\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u7684\u63a5\u53e3 FormData\u3002\u5229\u7528 FormData\u5bf9\u8c61\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 JavaScript \u7528\u4e00\u4e9b\u952e\u503c\u5bf9\u6765\u6a21\u62df\u4e00\u7cfb\u5217\u8868\u5355\u63a7\u4ef6\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u4f7f\u7528 XMLHttpRequest \u7684 ",l.a.createElement("code",null,"send()"),' \u65b9\u6cd5\u6765\u5f02\u6b65\u7684\u63d0\u4ea4\u8fd9\u4e2a"\u8868\u5355"\u3002\u6bd4\u8d77\u666e\u901a\u7684 AJAX\uff0c\u4f7f\u7528 FormData \u7684\u6700\u5927\u4f18\u70b9\u5c31\u662f\u6211\u4eec\u53ef\u4ee5\u5f02\u6b65\u4e0a\u4f20\u4e00\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002'),l.a.createElement("h3",{id:"\u6784\u9020\u51fd\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6784\u9020\u51fd\u6570"},l.a.createElement("span",{className:"icon icon-link"})),"\u6784\u9020\u51fd\u6570"),l.a.createElement(m.a,{code:"const formData = new FormData( form ? :HTMLFormElement );\n",lang:"js"}),l.a.createElement("h4",{id:"\u53c2\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570"},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"form"),l.a.createElement("td",null,"\uff08\u53ef\u9009\uff09\u4e00\u4e2a HTML \u8868\u5355\u5143\u7d20\uff0c\u53ef\u4ee5\u5305\u542b\u4efb\u4f55\u5f62\u5f0f\u7684\u8868\u5355\u63a7\u4ef6\uff0c\u5305\u62ec\u6587\u4ef6\u8f93\u5165\u6846")))),l.a.createElement("h3",{id:"\u65b9\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u65b9\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),l.a.createElement("h4",{id:"append"},l.a.createElement("a",{"aria-hidden":"true",href:"#append"},l.a.createElement("span",{className:"icon icon-link"})),"append()"),l.a.createElement("p",null,"\u8c03\u7528 ",l.a.createElement("code",null,"apeend()")," \u65b9\u6cd5\u7ed9\u5f53\u524d FormData \u5b9e\u4f8b\u5bf9\u8c61\u6dfb\u52a0\u4e00\u4e2a\u952e\u503c\u5bf9\u6570\u636e\u3002"),l.a.createElement(m.a,{code:"void append(DOMString name, Blob value, optional DOMString filename);\nvoid append(DOMString name, DOMString value);\n",lang:"js"}),l.a.createElement("h5",{id:"\u53c2\u6570-1"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u53c2\u6570-1"},l.a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"name"),l.a.createElement("td",null,"\u5b57\u6bb5\u540d\u79f0\u3002")),l.a.createElement("tr",null,l.a.createElement("td",null,"value"),l.a.createElement("td",null,"\u5b57\u6bb5\u503c\u3002")),l.a.createElement("tr",null,l.a.createElement("td",null,"filename"),l.a.createElement("td",null,"\uff08\u53ef\u9009\uff09\uff0c\u6307\u5b9a\u6587\u4ef6\u7684\u6587\u4ef6\u540d\uff0c\u5f53 value \u53c2\u6570\u88ab\u6307\u5b9a\u4e3a\u4e00\u4e2a Blob \u5bf9\u8c61\u6216\u8005\u4e00\u4e2a File \u5bf9\u8c61\u65f6\uff0c\u8be5\u6587\u4ef6\u540d\u4f1a\u88ab\u53d1\u9001\u5230\u670d\u52a1\u5668\u4e0a\uff0c\u5bf9\u4e8e Blob \u5bf9\u8c61\u6765\u8bf4\uff0c\u8fd9\u4e2a\u503c\u9ed8\u8ba4\u4e3a ",l.a.createElement("code",null,'"blob"'),"\u3002")))),l.a.createElement("h5",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("p",null,"\u4f7f\u7528\u5df2\u6709\u7684\u8868\u5355\u6765\u521d\u59cb\u5316\u4e00\u4e2a\u5bf9\u8c61\u5b9e\u4f8b\u3002\u5047\u5982\u73b0\u5728\u9875\u9762\u5df2\u7ecf\u6709\u4e00\u4e2a\u8868\u5355\u3002"),l.a.createElement(m.a,{code:'<form id="myForm" action="" method="post">\n    <input type="text" name="name" />\u540d\u5b57\n    <input type="password" name="psw" />\u5bc6\u7801\n    <input type="submit" value="\u63d0\u4ea4" />\n</form>\n',lang:"html"}),l.a.createElement("p",null,"\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u8868\u5355\u5143\u7d20\u4f5c\u4e3a\u521d\u59cb\u5316\u53c2\u6570\uff0c\u6765\u5b9e\u4f8b\u5316\u4e00\u4e2a FormData \u5bf9\u8c61\u3002"),l.a.createElement(m.a,{code:'// \u83b7\u53d6\u9875\u9762\u5df2\u6709\u7684\u4e00\u4e2aform\u8868\u5355\nconst form = document.getElementById(\'myform\');\n// \u7528\u8868\u5355\u6765\u521d\u59cb\u5316\nconst formData = new FormData(form);\n// \u6211\u4eec\u53ef\u4ee5\u6839\u636ename\u6765\u8bbf\u95ee\u8868\u5355\u4e2d\u7684\u5b57\u6bb5\nconst name = formData.get("name");  // \u83b7\u53d6\u540d\u5b57\nconst psw = formData.get("psw");    // \u83b7\u53d6\u5bc6\u7801\n// \u5f53\u7136\u4e5f\u53ef\u4ee5\u5728\u6b64\u57fa\u7840\u4e0a\uff0c\u6dfb\u52a0\u5176\u4ed6\u6570\u636e\nformData.append("token", "kshdfiwi3rh");\n',lang:"js"})))}}}]);