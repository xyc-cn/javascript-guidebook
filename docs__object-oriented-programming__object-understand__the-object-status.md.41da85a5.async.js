(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[238],{"8os9":function(e,n,t){"use strict";t.r(n);var a=t("55Ip"),l=t("q1tI"),o=t.n(l),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u5bf9\u8c61\u72b6\u6001"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u5bf9\u8c61\u72b6\u6001"},o.a.createElement("span",{className:"icon icon-link"})),"\u5bf9\u8c61\u72b6\u6001"),o.a.createElement("p",null,"JavaScript \u5bf9\u8c61\u5177\u6709\u6269\u5c55\u3001\u5bc6\u5c01\u4ee5\u53ca\u51bb\u7ed3\u4e09\u5927\u7279\u5f81\u3002"),o.a.createElement("p",null,"\u8fd9\u4e9b\u7279\u5f81\u6709\u76f8\u5bf9\u5e94\u7684\u65b9\u6cd5\uff1a"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"#%E6%89%A9%E5%B1%95%E7%89%B9%E6%80%A7"},"\u6269\u5c55\u7279\u6027")),o.a.createElement("li",null,o.a.createElement("a",{href:"#%E5%AF%86%E5%B0%81%E7%89%B9%E6%80%A7"},"\u5bc6\u5c01\u7279\u6027")),o.a.createElement("li",null,o.a.createElement("a",{href:"#%E5%86%BB%E7%BB%93%E7%89%B9%E6%80%A7"},"\u51bb\u7ed3\u7279\u6027"))),o.a.createElement("h2",{id:"\u6269\u5c55\u7279\u6027"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u6269\u5c55\u7279\u6027"},o.a.createElement("span",{className:"icon icon-link"})),"\u6269\u5c55\u7279\u6027"),o.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8c61\u662f\u53ef\u6269\u5c55\u7684\uff0c\u53ef\u6269\u5c55\u7684\u5bf9\u8c61\u80fd\u591f\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\uff0c\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\u4e5f\u53ef\u4ee5\u88ab\u66f4\u6539\u3002"),o.a.createElement(c.a,{code:"const foo = {};\n\nfoo.a = 1;\n\nfoo.__proto__ = null;\n\nconsole.log(foo);\n// { a: 1 }\n",lang:"js"}),o.a.createElement("p",null,"\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/isExtensible"},"Object.isExtensible")," \u53ef\u4ee5\u68c0\u6d4b\u6307\u5b9a\u5bf9\u8c61\u662f\u5426\u53ef\u6269\u5c55\u3002"),o.a.createElement(c.a,{code:"const foo = {};\n\nconsole.log(Object.isExtensible(foo));\n// true\n",lang:"js"}),o.a.createElement("p",null,"\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/preventExtensions"},"Object.preventExtensions")," \u65b9\u6cd5\u53ef\u4ee5\u6807\u8bb0\u4e00\u4e2a\u5bf9\u8c61\u4e3a\u4e0d\u53ef\u6269\u5c55\uff08Non-Extensible\uff09\u3002"),o.a.createElement("p",null,"\u4e0d\u53ef\u6269\u5c55\u7684\u5bf9\u8c61\u5177\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u4e0d\u80fd\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027"),o.a.createElement("li",null,"\u4e0d\u80fd\u53d8\u66f4\u539f\u578b\u5bf9\u8c61")),o.a.createElement("p",null,"\u5bf9\u8c61\u5c5e\u6027\u4ecd\u80fd\u5220\u9664\uff0c\u4ecd\u53ef\u4e3a\u8be5\u5bf9\u8c61\u539f\u578b\u6dfb\u52a0\u5c5e\u6027\u3002"),o.a.createElement(c.a,{code:"const foo = { a: 1 };\n\nObject.preventExtensions(foo);\n\n// \u6dfb\u52a0\u6216\u5220\u9664\u5c5e\u6027\u5747\u4e3a\u9759\u9ed8\u5931\u8d25\u4e0d\u629b\u51fa\u9519\u8bef\n// \u4e25\u683c\u6a21\u5f0f\u4e0b\u4f1a\u629b\u51fa\u9519\u8bef\nfoo.b = 1;\ndelete foo.a;\n\nconsole.log(foo);\n// {}\n",lang:"js"}),o.a.createElement("p",null,"\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/defineProperty"},"Object.defineProperty")," \u4e3a\u4e0d\u53ef\u6269\u5c55\u5bf9\u8c61\u6dfb\u52a0\u5c5e\u6027\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),o.a.createElement(c.a,{code:"const foo = { a: 1};\n\nObject.preventExtensions(foo);\n\nObject.defineProperty(foo, 'a', {\n    value: 2\n})\n\nconsole.log(foo.a);\n// 2\n\nObject.defineProperty(foo, 'b', {\n    value: 1\n})\n// Uncaught TypeError: Cannot define property a, object is not extensible\n",lang:"js"}),o.a.createElement("h2",{id:"\u5bc6\u5c01\u7279\u6027"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u5bc6\u5c01\u7279\u6027"},o.a.createElement("span",{className:"icon icon-link"})),"\u5bc6\u5c01\u7279\u6027"),o.a.createElement("p",null,"\u5bc6\u5c01\u5bf9\u8c61\u5177\u6709\u4ee5\u4e0b\u7279\u6027\uff1a"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5bc6\u5c01\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55",o.a.createElement("ul",null,o.a.createElement("li",null,"\u4e0d\u80fd\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027"),o.a.createElement("li",null,"\u4e0d\u80fd\u8bbe\u7f6e\u539f\u578b\u5bf9\u8c61"))),o.a.createElement("li",null,"\u6240\u6709\u5df2\u6709\u5c5e\u6027\u53d8\u4e3a\u4e0d\u53ef\u914d\u7f6e ",o.a.createElement("code",null,"configurable: false"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u610f\u5473\u7740\u5df2\u6709\u5c5e\u6027\u4e0d\u53ef\u5220\u9664"),o.a.createElement("li",null,"\u6570\u636e\u5c5e\u6027\u4e0d\u80fd\u88ab\u91cd\u65b0\u5b9a\u4e49"))),o.a.createElement("li",null,"\u6240\u6709\u5df2\u6709\u5c5e\u6027\u4ecd\u53ef\u4ee5\u88ab\u4fee\u6539 ",o.a.createElement("code",null,"writable: true"))),o.a.createElement("p",null,"\u5bc6\u5c01\u5bf9\u8c61\u65e0\u6cd5\u6dfb\u52a0\u65b0\u5c5e\u6027\uff0c\u4e5f\u65e0\u6cd5\u5220\u9664\u5df2\u6709\u5c5e\u6027\u3002"),o.a.createElement(c.a,{code:"const foo = Object.seal({ a: 1 });\n\n// \u65e0\u6cd5\u5220\u9664\u5c5e\u6027\ndelete foo.a;\n// \u4e5f\u65e0\u6cd5\u6dfb\u52a0\u65b0\u5c5e\u6027\nfoo.b = 1;\n\nconsole.log(foo.a);\n// 1\nconsole.log(foo.b);\n// undefined\n",lang:"js"}),o.a.createElement("p",null,"\u5c1d\u8bd5\u5220\u9664\u4e00\u4e2a\u5bc6\u5c01\u5bf9\u8c61\u7684\u5c5e\u6027\u6216\u8005\u5c06\u67d0\u4e2a\u5bc6\u5c01\u5bf9\u8c61\u7684\u5c5e\u6027\u4ece\u6570\u636e\u5c5e\u6027\u8f6c\u6362\u6210\u8bbf\u95ee\u5668\u5c5e\u6027\uff0c\u7ed3\u679c\u4f1a\u9759\u9ed8\u5931\u8d25\u6216\u629b\u51fa TypeError\u3002"),o.a.createElement(c.a,{code:"// \u65e0\u6cd5\u5c06\u6570\u636e\u5c5e\u6027\u91cd\u65b0\u5b9a\u4e49\u4e3a\u8bbf\u95ee\u5668\u5c5e\u6027\nObject.defineProperty(foo, 'c', {\n    get: function(){ return 'c' }\n});\n// Uncaught TypeError: Cannot define property b, object is not extensible\n\nObject.defineProperty(foo, 'd', {\n    value: 1\n})\n// Uncaught TypeError: Cannot define property c, object is not extensible\n",lang:"js"}),o.a.createElement("p",null,"\u5bf9\u8c61\u5bc6\u5c01\u524d\u5df2\u6709\u5c5e\u6027\u5728\u5bc6\u5c01\u540e\u4ecd\u53ef\u4ee5\u88ab\u4fee\u6539\u3002"),o.a.createElement(c.a,{code:"Object.defineProperty(foo, 'a', {\n    value: 2\n});\nconsole.log(foo.a);\n// 2\n",lang:"js"}),o.a.createElement("p",null,"\u4f7f\u7528\u65b9\u6cd5 ",o.a.createElement(a["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/seal"},"Object.seal")," \u53ef\u5c06\u5bf9\u8c61\u53d8\u4e3a",o.a.createElement("strong",null,"\u5bc6\u5c01\u72b6\u6001"),"\u3002"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u5982\u679c\u628a\u4e00\u4e2a\u7a7a\u5bf9\u8c61\u53d8\u5f97\u4e0d\u53ef\u6269\u5c55\uff0c\u5219\u5b83\u540c\u65f6\u4e5f\u4f1a\u53d8\u6210\u4e2a\u5bc6\u5c01\u5bf9\u8c61"),o.a.createElement("li",null,"\u5982\u679c\u8be5\u5bf9\u8c61\u4e0d\u662f\u7a7a\u5bf9\u8c61\uff0c\u5219\u5b83\u4e0d\u4f1a\u53d8\u6210\u5bc6\u5c01\u5bf9\u8c61\uff0c\u56e0\u4e3a\u5bc6\u5c01\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab\u5c5e\u6027\u5fc5\u987b\u662f\u4e0d\u53ef\u914d\u7f6e\u7684"),o.a.createElement("li",null,"\u5982\u679c\u628a\u5bf9\u8c61\u6240\u6709\u81ea\u8eab\u5c5e\u6027\u53d8\u4e3a\u4e0d\u53ef\u914d\u7f6e\uff0c\u5219\u8fd9\u4e2a\u5bf9\u8c61\u662f\u5bc6\u5c01\u5bf9\u8c61")),o.a.createElement(c.a,{code:"const foo = Object.seal({});\n\nconsole.log(Object.isSealed(foo));\n// true\n",lang:"js"}),o.a.createElement("p",null,"\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/isSealed"},"Object.isSealed")," \u53ef\u4ee5\u68c0\u6d4b\u6307\u5b9a\u5bf9\u8c61\u662f\u5426\u5df2\u5bc6\u5c01\u3002"),o.a.createElement(c.a,{code:"const foo = {};\nconst bar = Object.seal({});\n\nconsole.log(Object.isSealed(foo));\n// false\nconsole.log(Object.isSealed(bar));\n// true\n",lang:"js"}),o.a.createElement("h2",{id:"\u51bb\u7ed3\u7279\u6027"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u51bb\u7ed3\u7279\u6027"},o.a.createElement("span",{className:"icon icon-link"})),"\u51bb\u7ed3\u7279\u6027"),o.a.createElement("p",null,"\u51bb\u7ed3\u5bf9\u8c61\u5177\u6709\u4ee5\u4e0b\u7279\u5f81\uff1a"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u51bb\u7ed3\u5bf9\u8c61\u4e0d\u53ef\u6269\u5c55",o.a.createElement("ul",null,o.a.createElement("li",null,"\u4e0d\u80fd\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027"),o.a.createElement("li",null,"\u4e0d\u80fd\u8bbe\u7f6e\u539f\u578b\u5bf9\u8c61"))),o.a.createElement("li",null,"\u6240\u6709\u5df2\u6709\u5c5e\u6027\u53d8\u4e3a\u4e0d\u53ef\u914d\u7f6e ",o.a.createElement("code",null,"configurable: false"),o.a.createElement("ul",null,o.a.createElement("li",null,"\u610f\u5473\u7740\u5df2\u6709\u5c5e\u6027\u4e0d\u53ef\u5220\u9664"),o.a.createElement("li",null,"\u6570\u636e\u5c5e\u6027\u4e0d\u80fd\u88ab\u91cd\u65b0\u5b9a\u4e49"),o.a.createElement("li",null,"\u8bbf\u95ee\u5668\u5c5e\u6027\u4e5f\u4e0d\u80fd\u88ab\u91cd\u65b0\u5b9a\u4e49\uff0c\u4f46\u7531\u4e8e\u662f\u51fd\u6570\u8c03\u7528\uff0c\u7ed9\u4eba\u7684\u9519\u89c9\u662f\u8fd8\u662f\u53ef\u4ee5\u4fee\u6539\u8fd9\u4e2a\u5c5e\u6027"))),o.a.createElement("li",null,"\u4e0d\u80fd\u4fee\u6539\u5df2\u6709\u5c5e\u6027\u503c ",o.a.createElement("code",null,"writable: false"))),o.a.createElement("p",null,"\u8fd9\u4e5f\u610f\u5473\u7740\uff0c\u51bb\u7ed3\u5bf9\u8c61\u6c38\u8fdc\u4e0d\u53ef\u53d8\u3002"),o.a.createElement("p",null,"\u51bb\u7ed3\u5bf9\u8c61\u4e0d\u80fd\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u3002"),o.a.createElement(c.a,{code:"const foo = Object.freeze({ a: 1 })\n\nfoo.b = 1\n\nconsole.log(foo.b);\n// undefined\n\nObject.defineProperty(foo, 'c', {\n    value: 1\n});\n// Uncaught TypeError: Cannot define property c, object is not extensible\n",lang:"js"}),o.a.createElement("p",null,"\u51bb\u7ed3\u5bf9\u8c61\u4e0d\u80fd\u8bbe\u7f6e\u539f\u578b\u5bf9\u8c61\u3002\u4e0b\u9762\u4e24\u4e2a\u8bed\u53e5\u90fd\u4f1a\u629b\u51fa TypeError \u9519\u8bef\u3002"),o.a.createElement(c.a,{code:"const foo = Object.freeze({ a: 1 });\n\nObject.setPrototypeOf(foo, { x: 20 });\n// Uncaught TypeError: #<Object> is not extensible\n\nfoo.__proto__ = { x: 20 };\n// Uncaught TypeError: #<Object> is not extensible\n",lang:"js"}),o.a.createElement("p",null,"\u5982\u679c\u4e00\u4e2a\u5c5e\u6027\u7684\u503c\u662f\u4e2a\u5bf9\u8c61\uff0c\u5219\u8fd9\u4e2a\u5bf9\u8c61\u4e2d\u7684\u5c5e\u6027\u662f\u53ef\u4ee5\u4fee\u6539\u7684\uff0c\u9664\u975e\u5b83\u4e5f\u662f\u4e2a\u51bb\u7ed3\u5bf9\u8c61\u3002"),o.a.createElement(c.a,{code:"const foo = { bar: {} };\n\nObject.freeze(foo);\n\nfoo.bar.a = 1;\n\nconsole.log(foo.bar.a);\n// 1\n",lang:"js"}),o.a.createElement("p",null,"\u6570\u7ec4\u4f5c\u4e3a\u4e00\u79cd\u5bf9\u8c61\uff0c\u88ab\u51bb\u7ed3\uff0c\u5176\u5143\u7d20\u4e0d\u80fd\u88ab\u4fee\u6539\u3002\u6ca1\u6709\u6570\u7ec4\u5143\u7d20\u53ef\u4ee5\u88ab\u6dfb\u52a0\u6216\u79fb\u9664\u3002"),o.a.createElement(c.a,{code:"const foo = [0];\n\nObject.freeze(foo);\n\na[0] = 1;\na.push(2);\n\nconsole.log(a);\n// [0]\n",lang:"js"}),o.a.createElement("p",null,"\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"../../standard-built-in-objects/fundamental-objects/object-objects/properties-of-the-object-constructor/isFrozen"},"Object.isFrozen")," \u53ef\u4ee5\u68c0\u6d4b\u6307\u5b9a\u5bf9\u8c61\u662f\u5426\u5df2\u51bb\u7ed3\u3002"),o.a.createElement(c.a,{code:"const foo = Object.freeze({})\n\nconsole.log(Object.isFrozen(foo));\n// true\n",lang:"js"}),o.a.createElement("p",null,"\u5018\u82e5\u4e00\u4e2a\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u90a3\u4e48\u5bf9\u8fd9\u4e2a\u5916\u90e8\u5bf9\u8c61\u8fdb\u884c\u51bb\u7ed3\uff0c\u5185\u90e8\u5bf9\u8c61\u7684\u5c5e\u6027\u662f\u4f9d\u65e7\u53ef\u4ee5\u6539\u53d8\u7684\uff0c\u8fd9\u5c31\u53eb\u6d45\u51bb\u7ed3\uff0c\u82e5\u628a\u5916\u90e8\u5bf9\u8c61\u51bb\u7ed3\u7684\u540c\u65f6\u628a\u5176\u6240\u6709\u5185\u90e8\u5bf9\u8c61\u751a\u81f3\u662f\u5185\u90e8\u7684\u5185\u90e8\u65e0\u9650\u5ef6\u4f38\u7684\u5bf9\u8c61\u5c5e\u6027\u4e5f\u51bb\u7ed3\u4e86\uff0c\u8fd9\u5c31\u53eb\u6df1\u51bb\u7ed3\u3002"),o.a.createElement(c.a,{code:"// \u6df1\u51bb\u7ed3\u51fd\u6570.\nfunction deepFreeze(o) {\n\n  // \u53d6\u56de\u5b9a\u4e49\u5728obj\u4e0a\u7684\u5c5e\u6027\u540d\n  const propNames = Object.getOwnPropertyNames(o);\n\n  // \u5728\u51bb\u7ed3\u81ea\u8eab\u4e4b\u524d\u51bb\u7ed3\u5c5e\u6027\n  propNames.forEach(function(name) {\n    const prop = o[name];\n\n    // \u5982\u679c prop \u662f\u4e2a\u5bf9\u8c61\uff0c\u51bb\u7ed3\u5b83\n    if (typeof prop == 'object' && prop !== null)\n      deepFreeze(prop);\n  });\n\n  // \u51bb\u7ed3\u81ea\u8eab(no-op if already frozen)\n  return Object.freeze(o);\n}\n\nconst foo = { bar: {} };\n\ndeepFreeze(foo);\n\nfoo.bar.a = 1;\n\nconsole.log(foo.bar.a);\n// undefined\n",lang:"js"}),o.a.createElement("h2",{id:"\u603b\u7ed3"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u603b\u7ed3"},o.a.createElement("span",{className:"icon icon-link"})),"\u603b\u7ed3"),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{align:"left"}),o.a.createElement("th",{align:"center"},"\u6dfb\u52a0\u65b0\u5c5e\u6027"),o.a.createElement("th",{align:"center"},"\u5220\u9664\u5df2\u6709\u5c5e\u6027"),o.a.createElement("th",{align:"center"},"\u914d\u7f6e\u6570\u636e\u5c5e\u6027"),o.a.createElement("th",{align:"center"},"\u5df2\u6709\u5c5e\u6027\u53ef\u5199"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",{align:"left"},"\u6269\u5c55\u7279\u6027"),o.a.createElement("td",{align:"center"},"\u274e"),o.a.createElement("td",{align:"center"},"\u2705"),o.a.createElement("td",{align:"center"},"\u2705"),o.a.createElement("td",{align:"center"},"\u2705")),o.a.createElement("tr",null,o.a.createElement("td",{align:"left"},"\u5bc6\u5c01\u7279\u6027"),o.a.createElement("td",{align:"center"},"\u274e"),o.a.createElement("td",{align:"center"},"\u274e"),o.a.createElement("td",{align:"center"},"\u274e"),o.a.createElement("td",{align:"center"},"\u2705")),o.a.createElement("tr",null,o.a.createElement("td",{align:"left"},"\u51bb\u7ed3\u7279\u6027"),o.a.createElement("td",{align:"center"},"\u274e"),o.a.createElement("td",{align:"center"},"\u274e"),o.a.createElement("td",{align:"center"},"\u274e"),o.a.createElement("td",{align:"center"},"\u274e")))),o.a.createElement("hr",null),o.a.createElement("p",null,o.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://segmentfault.com/a/1190000003894119",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u6d45\u8c08 JavaScript \u5bf9\u8c61\u4e4b\u6269\u5c55\u3001\u5bc6\u5c01\u53ca\u51bb\u7ed3\u4e09\u5927\u7279\u5f81",o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},o.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),o.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);