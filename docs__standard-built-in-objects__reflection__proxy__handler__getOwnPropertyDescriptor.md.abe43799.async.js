(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[342],{Zdbb:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(l);n("5Yjd");t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"proxy---handlergetownpropertydescriptor"},r.a.createElement("a",{"aria-hidden":"true",href:"#proxy---handlergetownpropertydescriptor"},r.a.createElement("span",{className:"icon icon-link"})),"Proxy - handler.getOwnPropertyDescriptor"),r.a.createElement("p",null,r.a.createElement("code",null,"handler.getOwnPropertyDescriptor()")," \u65b9\u6cd5\u7528\u4e8e\u62e6\u622a ",r.a.createElement("code",null,"Object.getOwnPropertyDescriptor()"),"\uff0c\u8fd4\u56de\u4e00\u4e2a\u5c5e\u6027\u63cf\u8ff0\u5bf9\u8c61\u6216\u8005 ",r.a.createElement("code",null,"undefined"),"\u3002"),r.a.createElement("h2",{id:"\u8bed\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),r.a.createElement(c.a,{code:"const proxy = new Proxy(target, {\n  getOwnPropertyDescriptor: function(target, property) {\n    // do something\n  },\n});\n",lang:"js"}),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53c2\u6570"),r.a.createElement("th",null,"\u8bf4\u660e"),r.a.createElement("th",null,"\u7c7b\u578b"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"target")),r.a.createElement("td",null,"\u76ee\u6807\u5bf9\u8c61"),r.a.createElement("td",null,"object")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("code",null,"property")),r.a.createElement("td",null,"\u8fd4\u56de\u5c5e\u6027\u540d\u79f0\u7684\u63cf\u8ff0"),r.a.createElement("td",null,"object / undefined")))),r.a.createElement("h2",{id:"\u8bf4\u660e"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u8bf4\u660e"},r.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),r.a.createElement("h3",{id:"\u62e6\u622a"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u62e6\u622a"},r.a.createElement("span",{className:"icon icon-link"})),"\u62e6\u622a"),r.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f1a\u62e6\u622a\u76ee\u6807\u5bf9\u8c61\u7684\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"Object.getOwnPropertyDescriptor")),r.a.createElement("li",null,r.a.createElement("code",null,"Reflect.getOwnPropertyDescriptor"))),r.a.createElement("h3",{id:"\u7ea6\u675f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u7ea6\u675f"},r.a.createElement("span",{className:"icon icon-link"})),"\u7ea6\u675f"),r.a.createElement("p",null,"\u5982\u679c\u8fdd\u80cc\u4e86\u4ee5\u4e0b\u7684\u7ea6\u675f\uff0c",r.a.createElement("code",null,"proxy")," \u4f1a\u629b\u51fa TypeError\uff1a"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"getOwnPropertyDescriptor")," \u5fc5\u987b\u8fd4\u56de\u4e00\u4e2a ",r.a.createElement("code",null,"object")," \u6216 ",r.a.createElement("code",null,"undefined")),r.a.createElement("li",null,"\u5982\u679c\u5c5e\u6027\u4f5c\u4e3a\u76ee\u6807\u5bf9\u8c61\u7684\u4e0d\u53ef\u914d\u7f6e\u7684\u5c5e\u6027\u5b58\u5728\uff0c\u5219\u8be5\u5c5e\u6027\u65e0\u6cd5\u62a5\u544a\u4e3a\u4e0d\u5b58\u5728"),r.a.createElement("li",null,"\u5982\u679c\u5c5e\u6027\u4f5c\u4e3a\u76ee\u6807\u5bf9\u8c61\u7684\u5c5e\u6027\u5b58\u5728\uff0c\u5e76\u4e14\u76ee\u6807\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55\uff0c\u5219\u8be5\u5c5e\u6027\u65e0\u6cd5\u62a5\u544a\u4e3a\u4e0d\u5b58\u5728"),r.a.createElement("li",null,"\u5982\u679c\u5c5e\u6027\u4e0d\u5b58\u5728\u4f5c\u4e3a\u76ee\u6807\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u5e76\u4e14\u76ee\u6807\u5bf9\u8c61\u7684\u4e0d\u53ef\u6269\u5c55\uff0c\u5219\u4e0d\u80fd\u5c06\u5176\u62a5\u544a\u4e3a\u5b58\u5728"),r.a.createElement("li",null,"\u5c5e\u6027\u4e0d\u80fd\u88ab\u62a5\u544a\u4e3a\u4e0d\u53ef\u914d\u7f6e\uff0c\u5982\u679c\u5b83\u4e0d\u4f5c\u4e3a\u76ee\u6807\u5bf9\u8c61\u7684\u81ea\u8eab\u5c5e\u6027\u5b58\u5728\uff0c\u6216\u8005\u4f5c\u4e3a\u76ee\u6807\u5bf9\u8c61\u7684\u53ef\u914d\u7f6e\u7684\u5c5e\u6027\u5b58\u5728"),r.a.createElement("li",null,r.a.createElement("code",null,"Object.getOwnPropertyDescriptor(target)")," \u7684\u7ed3\u679c\u53ef\u4ee5\u4f7f\u7528 ",r.a.createElement("code",null,"Object.defineProperty")," \u5e94\u7528\u4e8e\u76ee\u6807\u5bf9\u8c61\uff0c\u4e5f\u4e0d\u4f1a\u629b\u51fa\u5f02\u5e38")),r.a.createElement("h2",{id:"\u793a\u4f8b"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},r.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),r.a.createElement(c.a,{code:"const handler = {\n  getOwnPropertyDescriptor(target, key) {\n    if (key[0] === '_') {\n      return;\n    }\n    return Object.getOwnPropertyDescriptor(target, key);\n  },\n};\n\nconst target = {\n  _foo: 'bar',\n  baz: 'tar',\n};\n\nconst proxy = new Proxy(target, handler);\n\nObject.getOwnPropertyDescriptor(proxy, 'wat');\n// undefined\nObject.getOwnPropertyDescriptor(proxy, '_foo');\n// undefined\nObject.getOwnPropertyDescriptor(proxy, 'baz');\n// { value: 'tar', writable: true, enumerable: true, configurable: true }\n",lang:"js"})))}}}]);