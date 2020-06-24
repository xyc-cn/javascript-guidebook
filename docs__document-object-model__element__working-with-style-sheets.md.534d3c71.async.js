(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[177],{"4aEx":function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u8bbe\u7f6e\u6837\u5f0f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bbe\u7f6e\u6837\u5f0f"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bbe\u7f6e\u6837\u5f0f"),l.a.createElement("p",null,"DOM \u8bbe\u7f6e\u6837\u5f0f\u7684\u4e3b\u8981\u65b9\u6cd5\u6709\u4e09\u79cd\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"HTMLELement.style"),l.a.createElement("li",null,"Element.className"),l.a.createElement("li",null,"Element.classList")),l.a.createElement("h2",{id:"htmlelementstyle"},l.a.createElement("a",{"aria-hidden":"true",href:"#htmlelementstyle"},l.a.createElement("span",{className:"icon icon-link"})),"HTMLElement.style"),l.a.createElement("p",null,l.a.createElement("code",null,"HTMLElement.style")," \u5c5e\u6027\u8fd4\u56de\u4e00\u4e2a CSSStyleDeclaration \u5bf9\u8c61\uff0c\u8868\u793a\u5143\u7d20\u7684\u5185\u8054 style \u5c5e\u6027\uff0c\u4f46\u5ffd\u7565\u4efb\u4f55\u6837\u5f0f\u8868\u5e94\u7528\u7684\u5c5e\u6027\u3002\u901a\u8fc7 style \u5c5e\u6027\u53ef\u4ee5\u8bbf\u95ee\u7684 CSS \u5c5e\u6027\u5217\u8868\uff0c\u53ef\u4ee5\u67e5\u770b ",l.a.createElement("a",{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference",target:"_blank",rel:"noopener noreferrer"},"CSS Properties Reference",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\u3002"),l.a.createElement("p",null,"\u6ce8\u610f\u4e0d\u80fd\u901a\u8fc7 ",l.a.createElement("code",null,"style")," \u5c5e\u6027\u8bbe\u7f6e\u5b57\u7b26\u4e32\u6765\u8bbe\u7f6e ",l.a.createElement("code",null,"style"),"\uff0c\u56e0\u4e3a ",l.a.createElement("code",null,"style")," \u5e94\u88ab\u5f53\u6210\u662f\u53ea\u8bfb\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u901a\u8fc7 ",l.a.createElement("code",null,"style")," \u5c5e\u6027\u8fd4\u56de\u7684 CSSStyleDeclaration \u5bf9\u8c61\u662f\u53ea\u8bfb\u7684\u3002"),l.a.createElement(c.a,{code:"// Wrong\nelement.style = 'color: blue;';\n",lang:"js"}),l.a.createElement("p",null,"\u4f46\u662f ",l.a.createElement("code",null,"style")," \u5c5e\u6027\u672c\u8eab\u7684\u5c5e\u6027\u80fd\u591f\u7528\u6765\u8bbe\u7f6e\u884c\u5185\u6837\u5f0f\u3002\u6b64\u5916\uff0c\u901a\u8fc7\u5355\u72ec\u7684\u6837\u5f0f\u5c5e\u6027\u8bbe\u7f6e\u4f1a\u66f4\u52a0\u7b80\u4fbf\u5feb\u6377\uff0c\u9664\u975e\u4f60\u5e0c\u671b\u5b8c\u5168\u901a\u8fc7\u4e00\u4e2a\u5355\u72ec\u8bed\u53e5\u6765\u8bbe\u7f6e\u5143\u7d20\u7684\u5168\u90e8\u6837\u5f0f\uff0c\u56e0\u4e3a\u901a\u8fc7 ",l.a.createElement("code",null,"style")," \u672c\u8eab\u5c5e\u6027\u8bbe\u7f6e\u7684\u6837\u5f0f\u4e0d\u4f1a\u5f71\u54cd\u5230\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u8bbe\u7f6e\u7684\u5176\u4ed6 CSS \u5c5e\u6027\u7684\u6837\u5f0f\u3002"),l.a.createElement(c.a,{code:"// Bad\nelement.style.cssText = 'color: blue; border: 1px solid black;';\nelement.setAttribute('style', 'color: blue; border: 1px solid black;');\n\n// Good\nelement.style.color = 'blue';\n\nlet st = element.style;\nst.color = 'blue';\n",lang:"js"}),l.a.createElement("h2",{id:"elementclassname"},l.a.createElement("a",{"aria-hidden":"true",href:"#elementclassname"},l.a.createElement("span",{className:"icon icon-link"})),"Element.className"),l.a.createElement("p",null,l.a.createElement("code",null,"className")," \u5c5e\u6027\u53ef\u7528\u4e8e\u83b7\u53d6\u6216\u8bbe\u7f6e\u6307\u5b9a\u5143\u7d20\u7684\u7c7b\u540d\u5c5e\u6027\u3002"),l.a.createElement("h3",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"// Get class name\nconst cls = element.className;\n\n// Set class name\nelement.className = cls;\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"element"),l.a.createElement("td",null,"\u9700\u8981\u83b7\u53d6\u6216\u8bbe\u7f6e\u7684\u5143\u7d20\u5f15\u7528"),l.a.createElement("td",null,"HTMLElement")),l.a.createElement("tr",null,l.a.createElement("td",null,"cls"),l.a.createElement("td",null,"\u7c7b\u540d\u5c5e\u6027\u7684\u503c\uff0c\u53ef\u7531\u7a7a\u683c\u5206\u9694\u7684\u591a\u4e2a\u5c5e\u6027\u503c"),l.a.createElement("td",null,"DOMString")))),l.a.createElement("h3",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement(c.a,{code:'<style dangerouslySetInnerHTML={{ __html: `\n  .big {\n    height: 100px;\n    width: 100px;\n    background-color: blue;\n  }\n  .small {\n    height: 50px;\n    width: 50px;\n    background-color: green;\n  }\n` }} />\n<div id="test" class="big"></div>\n<script dangerouslySetInnerHTML={{ __html: `\n  test.onclick = function() {\n    test.className = \'small\';\n  };\n` }} />\n',lang:"html"}),l.a.createElement("h2",{id:"elementclasslist"},l.a.createElement("a",{"aria-hidden":"true",href:"#elementclasslist"},l.a.createElement("span",{className:"icon icon-link"})),"Element.classList"),l.a.createElement("p",null,l.a.createElement("code",null,"Element.classList")," \u5c5e\u6027\u8fd4\u56de\u5143\u7d20\u7684\u7c7b\u5c5e\u6027\u7684\u5b9e\u65f6 DOMTokenList \u96c6\u5408\u3002"),l.a.createElement("p",null,"\u5728\u64cd\u4f5c\u7c7b\u540d\u65f6\uff0c\u9700\u8981\u901a\u8fc7 ",l.a.createElement("code",null,"className")," \u5c5e\u6027\u6dfb\u52a0\u3001\u5220\u9664\u548c\u66ff\u6362\u7c7b\u540d\u3002\u56e0\u4e3a ",l.a.createElement("code",null,"className")," \u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u6240\u4ee5\u5373\u4f7f\u53ea\u4fee\u6539\u5b57\u7b26\u4e32\u4e00\u90e8\u5206\uff0c\u4e5f\u5fc5\u987b\u6bcf\u6b21\u90fd\u8bbe\u7f6e\u6574\u4e2a\u5b57\u7b26\u4e32\u7684\u503c\u3002\u8981\u4ece ",l.a.createElement("code",null,"className")," \u5b57\u7b26\u4e32\u4e2d\u5220\u9664\u4e00\u4e2a\u7c7b\u540d\uff0c\u9700\u8981\u628a\u7c7b\u540d\u62c6\u5f00\uff0c\u5220\u9664\u4e0d\u60f3\u8981\u7684\u90a3\u4e2a\uff0c\u518d\u91cd\u65b0\u62fc\u6210\u4e00\u4e2a\u65b0\u5b57\u7b26\u4e32"),l.a.createElement("h3",{id:"\u5c5e\u6027"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027"},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),l.a.createElement("p",null,"length \u5c5e\u6027\uff0c\u8868\u793a\u5143\u7d20\u7c7b\u540d\u7684\u4e2a\u6570\uff0c\u53ea\u8bfb"),l.a.createElement("h3",{id:"\u65b9\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u65b9\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),l.a.createElement("h4",{id:"item"},l.a.createElement("a",{"aria-hidden":"true",href:"#item"},l.a.createElement("span",{className:"icon icon-link"})),"item()"),l.a.createElement("p",null,l.a.createElement("code",null,"item()")," \u65b9\u6cd5\u83b7\u53d6\u7c7b\u540d\u5728\u5143\u7d20\u7c7b\u540d\u5217\u8868\u4e2d\u7684\u7d22\u5f15\u503c\u3002\u7d22\u5f15\u503c\u4ece 0 \u5f00\u59cb\u3002"),l.a.createElement(c.a,{code:"item(index);\n",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5982\u679c\u7d22\u5f15\u8d85\u51fa\u8303\u56f4\uff0c\u5219\u8fd4\u56de ",l.a.createElement("code",null,"null"))),l.a.createElement(c.a,{code:"document.body.classList.item(3);\n",lang:"js"}),l.a.createElement("h5",{id:"add"},l.a.createElement("a",{"aria-hidden":"true",href:"#add"},l.a.createElement("span",{className:"icon icon-link"})),"add()"),l.a.createElement("p",null,l.a.createElement("code",null,"add()")," \u65b9\u6cd5\u4e3a\u5143\u7d20\u6dfb\u52a0\u4e00\u4e2a\u6216\u591a\u4e2a\u7c7b\u540d\u3002\u5982\u679c\u7c7b\u540d\u5df2\u7ecf\u5b58\u5728\uff0c\u5219\u4e0d\u4f1a\u6dfb\u52a0\u3002"),l.a.createElement(c.a,{code:"add(className1, className2, ...)\n",lang:"js"}),l.a.createElement("h5",{id:"remove"},l.a.createElement("a",{"aria-hidden":"true",href:"#remove"},l.a.createElement("span",{className:"icon icon-link"})),"remove()"),l.a.createElement("p",null,l.a.createElement("code",null,"remove()"),"\xa0 \u65b9\u6cd5\u4e3a\u5143\u7d20\u79fb\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u7c7b\u540d\u3002\u79fb\u9664\u4e0d\u5b58\u5728\u7684\u7c7b\u540d\uff0c\u4e0d\u4f1a\u62a5\u9519\u3002"),l.a.createElement(c.a,{code:"remove(className1, className2, ...)\n",lang:"js"}),l.a.createElement("h5",{id:"toggle"},l.a.createElement("a",{"aria-hidden":"true",href:"#toggle"},l.a.createElement("span",{className:"icon icon-link"})),"toggle()"),l.a.createElement("p",null,l.a.createElement("code",null,"toggle()"),"\xa0 \u65b9\u6cd5\u5728\u5143\u7d20\u4e2d\u5207\u6362\u7c7b\u540d\u3002"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u8981\u5728\u5143\u7d20\u4e2d\u79fb\u9664\u7684\u7c7b\u540d\uff0c\u5e76\u8fd4\u56de ",l.a.createElement("code",null,"false"),"\u3002\xa0 \u5982\u679c\u8be5\u7c7b\u540d\u4e0d\u5b58\u5728\u5219\u4f1a\u5728\u5143\u7d20\u4e2d\u6dfb\u52a0\u7c7b\u540d\uff0c\u5e76\u8fd4\u56de ",l.a.createElement("code",null,"true"),"\u3002"),l.a.createElement("li",null,"\u7b2c\u4e8c\u4e2a\u662f\u53ef\u9009\u53c2\u6570\uff0c\u662f\u4e2a\u5e03\u5c14\u503c\u7528\u4e8e\u8bbe\u7f6e\u5143\u7d20\u662f\u5426\u5f3a\u5236\u6dfb\u52a0\u6216\u79fb\u9664\u7c7b\uff0c\u4e0d\u7ba1\u8be5\u7c7b\u540d\u662f\u5426\u5b58\u5728\u3002")),l.a.createElement(c.a,{code:"// remove a class\nelement.classList.toggle('classToRemove', false);\n\n// add a class\nelement.classList.toggle('classToAdd', true);\n",lang:"js"}),l.a.createElement("h5",{id:"contains"},l.a.createElement("a",{"aria-hidden":"true",href:"#contains"},l.a.createElement("span",{className:"icon icon-link"})),"contains()"),l.a.createElement("p",null,l.a.createElement("code",null,"contains()")," \u65b9\u6cd5\u7528\u4e8e\u68c0\u67e5\u5143\u7d20\u4e2d\u7c7b\u540d\u5217\u8868\u4e2d\u662f\u5426\u5305\u542b\u8be5\u7c7b\u540d\u3002\u5982\u679c\u5305\u542b\uff0c\u8fd4\u56de ",l.a.createElement("code",null,"true"),"\uff0c\u5426\u5219\u8fd4\u56de ",l.a.createElement("code",null,"false"),"\u3002"),l.a.createElement(c.a,{code:"contains(className);\n",lang:"js"}),l.a.createElement("h4",{id:"\u517c\u5bb9\u6027"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u517c\u5bb9\u6027"},l.a.createElement("span",{className:"icon icon-link"})),"\u517c\u5bb9\u6027"),l.a.createElement("p",null,"\u7531\u4e8e IE9-\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 ",l.a.createElement("code",null,"classList")," \u5c5e\u6027\uff0c\u4e5f\u5c31\u4e0d\u652f\u6301 ",l.a.createElement("code",null,"add()"),"\u3001",l.a.createElement("code",null,"contains()"),"\u3001",l.a.createElement("code",null,"remove()")," \u548c ",l.a.createElement("code",null,"toggle()")," \u8fd9\u56db\u4e2a\u65b9\u6cd5\uff0c\u4e0b\u9762\u662f\u8fd9\u56db\u4e2a\u65b9\u6cd5\u7684\u517c\u5bb9\u5199\u6cd5\u3002"),l.a.createElement("p",null,"\u7531\u4e8e ",l.a.createElement("code",null,"indexOf()")," \u548c ",l.a.createElement("code",null,"trim()")," \u65b9\u6cd5\u90fd\u662f ES5 \u65b0\u589e\u65b9\u6cd5\uff0c\u5728\u4f4e\u7248\u672c IE \u6d4f\u89c8\u5668\u4e2d\u4e0d\u652f\u6301\uff0c\u6240\u4ee5\u9700\u8981\u91cd\u65b0\u5c01\u88c5\u3002"),l.a.createElement(c.a,{code:"// \u6570\u7ec4\u7684indexOf\u65b9\u6cd5\u5c01\u88c5\nfunction indexOf(arr, value, start) {\n  //\u5982\u679c\u4e0d\u8bbe\u7f6estart,\u5219\u9ed8\u8ba4start\u4e3a0\n  if (arguments.length == 2) {\n    start = 0;\n  }\n  //\u5982\u679c\u6570\u7ec4\u4e2d\u5b58\u5728indexOf\u65b9\u6cd5\uff0c\u5219\u7528\u539f\u751f\u7684indexOf\u65b9\u6cd5\n  if (arr.indexOf) {\n    return arr.indexOf(value, start);\n  }\n  for (var i = start; i < arr.length; i++) {\n    if (arr[i] === value) {\n      return i;\n    }\n  }\n  return -1;\n}\n\n// \u6570\u7ec4\u53bb\u91cd\u65b9\u6cd5\u5c01\u88c5\nfunction noRepeat(arr) {\n  var result = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (indexOf(result, arr[i]) == -1) {\n      result.push(arr[i]);\n    }\n  }\n  return result;\n}\n//inArray\u65b9\u6cd5\u5c01\u88c5\nfunction inArray(arr, value) {\n  for (var i = 0; i < arr.length; i++) {\n    if (arr[i] === value) {\n      return true;\n    }\n  }\n  return false;\n}\n//\u53bb\u9664\u9996\u5c3e\u7a7a\u683c\u51fd\u6570\u5c01\u88c5\nfunction trim(arr) {\n  var result = arr.replace(/^\\s+|\\s+$/g, '');\n  return result;\n}\n",lang:"javascript"}),l.a.createElement("h5",{id:"addclass"},l.a.createElement("a",{"aria-hidden":"true",href:"#addclass"},l.a.createElement("span",{className:"icon icon-link"})),"addClass()"),l.a.createElement(c.a,{code:"function addClass(obj, classStr) {\n  var array = noRepeat(trim(obj.className).split('s+'));\n  if (!inArray(array, classStr)) {\n    array.push(classStr);\n  }\n  obj.className = array.join(' ');\n  return obj;\n}\n",lang:"javascript"}),l.a.createElement("h5",{id:"containsclass"},l.a.createElement("a",{"aria-hidden":"true",href:"#containsclass"},l.a.createElement("span",{className:"icon icon-link"})),"containsClass()"),l.a.createElement(c.a,{code:"function containsClass(obj, classStr) {\n  var array = noRepeat(trim(obj.className).split('s+'));\n  if (inArray(array, classStr)) {\n    return true;\n  }\n  return false;\n}\n",lang:"javascript"}),l.a.createElement("h5",{id:"removeclass"},l.a.createElement("a",{"aria-hidden":"true",href:"#removeclass"},l.a.createElement("span",{className:"icon icon-link"})),"removeClass()"),l.a.createElement(c.a,{code:"function removeClass(obj,classStr){\n    var array = noRepeat(trim(obj.className).split('\\s+'));\n    var index = indexOf(array,classStr);\n    if(index != -1){\n        array.splice(index,1);\n        obj.className = array.join(' ');\n    }\n    return obj;\n}\n",lang:"unknown"}),l.a.createElement("h5",{id:"toggleclass"},l.a.createElement("a",{"aria-hidden":"true",href:"#toggleclass"},l.a.createElement("span",{className:"icon icon-link"})),"toggleClass()"),l.a.createElement(c.a,{code:"function toggleClass(obj, classStr) {\n  var array = noRepeat(trim(obj.className).split('s+'));\n  if (inArray(array, classStr)) {\n    removeClass(obj, classStr);\n  } else {\n    addClass(obj, classStr);\n  }\n}\n",lang:"javascript"}),l.a.createElement(c.a,{code:'<style dangerouslySetInnerHTML={{ __html: `\n  .cB {\n    color: blue;\n  }\n` }} />\n\n<div id="test">\u6d4b\u8bd5\u6587\u5b57</div>\n<button id="btn1" onclick="addClass(test,\'cB\')">add</button>\n<button id="btn2" onclick="containsClass(test,\'cB\')?alert(true):alert(false)">contains</button>\n<button id="btn3" onclick="removeClass(test,\'cB\')">remove</button>\n<button id="btn4" onclick="toggleClass(test,\'cB\')">toggle</button>\n',lang:"html"}),l.a.createElement("h3",{id:"\u6027\u80fd"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6027\u80fd"},l.a.createElement("span",{className:"icon icon-link"})),"\u6027\u80fd"),l.a.createElement(c.a,{code:'<div id="test" style="height:100px;width:100px;background-color:blue;"></div>\n<script dangerouslySetInnerHTML={{ __html: `\n  test.onclick = function() {\n    console.time();\n    for (var i = 0; i < 10000; i++) {\n      test.style.backgroundColor = \'green\';\n      test.style.height = \'50px\';\n      test.style.width = \'50px\';\n    }\n    console.timeEnd(); //59.937ms\n  };\n` }} />\n/*****************************/\n<div id="test" style="height:100px;width:100px;background-color:blue;"></div>\n<script dangerouslySetInnerHTML={{ __html: `\n  test.onclick = function() {\n    console.time();\n    for (var i = 0; i < 10000; i++) {\n      test.style.cssText = \'height:50px;width:50px;background-color:green\';\n    }\n    console.timeEnd(); //38.065ms\n  };\n` }} />\n/*****************************/\n<style dangerouslySetInnerHTML={{ __html: `\n  .big {\n    --------------height: 100px;\n    width: 100px;\n    background-color: blue;\n  }\n  .small {\n    height: 50px;\n    width: 50px;\n    background-color: green;\n  }\n` }} />\n<div id="test" class="big"></div>\n<script dangerouslySetInnerHTML={{ __html: `\n  test.onclick = function() {\n    console.time();\n    for (var i = 0; i < 10000; i++) {\n      test.className = \'small\';\n    }\n    console.timeEnd(); //9.534ms\n  };\n` }} />\n',lang:"html"}),l.a.createElement("p",null,"\u5728 1 \u4e07\u6b21\u5faa\u73af\u4e2d\uff0c\u6539\u53d8 ",l.a.createElement("code",null,"style")," \u5c5e\u6027\u4e2d\u7684\u5177\u4f53\u6837\u5f0f\u82b1\u8d39\u4e86 59.937ms\uff0c\u6539\u53d8 ",l.a.createElement("code",null,"style")," \u5c5e\u6027\u4e2d\u7684 ",l.a.createElement("code",null,"cssText")," \u82b1\u8d39\u4e86 38.065ms\uff0c\u800c\u6539\u53d8 CSS \u7c7b\u540d\u53ea\u82b1\u8d39\u4e86 9.534ms\u3002"),l.a.createElement("p",null,"\u7531\u6b64\u53ef\u89c1\uff0c\u4f7f\u7528\u811a\u672c\u5316 CSS \u7c7b\u7684\u65b9\u5f0f\u53ef\u4ee5\u5927\u5927\u5730\u63d0\u9ad8\u6027\u80fd\u3002"),l.a.createElement("hr",null),l.a.createElement("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://juejin.im/entry/573e97e3ad5b9500576fc758",target:"_blank",rel:"noopener noreferrer"},"HTML5 DOM \u5143\u7d20\u7c7b\u540d\u76f8\u5173\u64cd\u4f5c API classList \u7b80\u4ecb",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);