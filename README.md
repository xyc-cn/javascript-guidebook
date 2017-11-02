﻿# JavaScript Guidebook

这个Repository尽可能整理、收录完整的JavaScript语法知识，大部分资源来源于出版书籍以及网络。希望藉此Repo对JavaScript有更深入的研究。

资料来源

 - 《JavaScript高级程序设计》
 - 《JavaScript权威指南》
 - 《JavaScript DOM编程艺术》
 - 《JavaScript 语言精粹》
 - 《你不知道的JavaScript》系列
 - Mozilla Document
 - W3CSchool Tutorial

## 基本概念

 - 【语法】
   - [词法结构][1]
   - 标识符
   - 属性和变量
   - 表达式
   - [严格模式][2]
   - 关键字和保留字
   - 变量
 - 【数据类型】
   - [typeof操作符][3]
   - [Undefined类型和Null类型][4]
   - [Boolean类型][5]
   - [Number类型][6]
   - [String类型][7]
 - 【操作符】
   - 运算符语法概述
   - 算术运算符
   - 关系运算符
   - 逻辑运算符
   - 位运算符
   - 条件、逗号、赋值、()和void运算符
   - 运算符优先级
 - 【语句】
   - 表达式语句、块语句、空语句和声明语句
   - 条件语句、循环语句和跳转语句
   - eval和with
 - 【函数】
   - 函数概述
   - 函数参数
   - 函数的属性和方法
   - ES6函数扩展
   - 高级技巧
   - 函数式编程

## 变量、作用域和内存问题

 - 【作用域】
   - 内部原理
   - 词法作用域和动态作用域
   - 声明提升(hosting)
   - 块作用域
   - 一张图理解执行环境和作用域
 - 【闭包】
   - 到底什么才是闭包
   - 从执行环境角度看闭包
   - IIFE
   - 常见的一个循环和闭包的错误详解
   - 闭包的7种形式

## 引用类型
   
- 【构造器类型】
   - Object类型
     - 初识对象
     - 对象的属性操作
     - 对象的属性描述符
     - 对象拷贝
   - Math对象
   - Array数组类型
   - 正则表达式基础语法 
   - RegExp正则类型
   - 数组方法 
   - 数组复制
   - 字符串和数组的方法比较
   - 错误处理机制
 - 【日期对象】
   - 日期和时间基础知识
   - Date日期对象
   - 简易日历实现
   - 日期联动效果
 - 【类型识别】
   - 四种类型识别的方法
   - 数组检测方式
 - 【类型转换】
   - toString()
   - valueOf()
   - 数据类型转换

## 面向对象的程序设计

 - 【面向想象基础】
   - 对象的组成
   - 对象的创建和初始化
   - 工厂模式
   - 运算符new的执行过程和原理分析
 - 【this】
   - this的4中绑定规则
   - this绑定优先级
   - 箭头函数
 - 【原型链】
   - 一张图理解prototype\proto和constructor的三角关系
   - 构造函数和原型对象
   - 创建对象的5种模式
   - 实现继承的3种形式
   - 继承实例之选项卡的实现
   - 继承实例之拖拽
 - 【高级面向对象】
   - 内置对象
   - hasOwnProperty()方法实现
   - for...in/for...of的使用及特点
   - constructor属性的使用
   - instance运算符
 - 【组件开发】
   - 组件的特点
   - 组件配置的作用和实现
   - 组件方法的作用和实现
   - 实例配置和默认配置
   - 组件事件的作用和实现
   - 自定义事件机制的实现
   - 基于属性的事件弊端
   - 事件监听器addEventListener的实现
   - 事件触发器trigger的实现

## 函数表达式

- 【递归】
- 【闭包】

## 模块化

  - 实现javascript下的模块组织
  - commonJS规范及Node模块实现
  - 使用Browserify来实现CommonJS道德浏览器加载
  - AMD及requireJS
  - r.js打包
  - CMD及seaJS

## DOM

 - 【节点类型】
   - 节点类型概述
   - 元素节点
   - 特性节点
   - 文本节点
   - 注释节点和文档类型节点
   - 文档节点
   - 文档片段节点
 - 【获取节点】
   - 元素选择器
   - getElementByClassName
   - selector选择器
   - 动态集合
 - 【节点操作】
   - 节点关系
   - 节点操作
   - 节点内容
   - 节点遍历
   - 节点范围
   - 区分元素特性和对象属性
 - 【脚本化CSS】
   - 脚本化行间样式
   - 查询计算样式
   - 脚本化CSS类
   - 脚本化样式表
   - 动态样式
   - 脚本化伪元素
 - 【元素尺寸】
   - 偏移offset
   - 客户去Client
   - 滚动Scroll
   - 回到顶部
   - 元素视图方法

## DOM扩展

 - 选择符API
 - 元素便利
 - HTML5
 - 专有扩展
 
## 事件
    
 - 【事件流】
 - 【事件处理程序】
 - 【事件对象】
 - 【事件机制】
   - 事件流
   - 事件处理程序
   - 事件对象
   - 事件模拟
 - 【事件类型】
   - 鼠标事件
   - 键盘事件
   - 变动事件
   - 剪贴板事件
   - 文本事件
   - 加载事件
   - 焦点管理
 - 【内存和性能】
 - 【模拟事件】

## 表单脚本

 - 【表单的基础知识】
 - 【文本框脚本】
 - 【选择框脚本】
 - 【表单序列化】
 - 【富文本编辑】

## Canvas

 - canvas基础语法
 - canvas图形处理和进阶用法
 - canvas图形绘制
 - canvas图像编辑
 - canvas贝塞尔曲线演示
 - canvas自适应圆形时钟
 - canvas粒子时钟
 - canvas探照灯效果
 - canvas粒子系统的构建

## SVG

 - SVG基本形状和样式设置
 - SVG文本
 - SVG路径
 - SVG辅助标签
 - SVG视野
 - SVG坐标系统及图形变换
 - SVG渐变
 - SVG图案
 - SVG裁切和蒙版
 - SVG动画
 - SVG基恩操作API

## HTML5脚本编程

  - 【跨文档消息传递】
  - 【原生拖放】
  - 【媒体元素】
  - 【历史状态管理】

## 错误处理与测试

  - 浏览器报告的错误
  - 错误处理
  - 测试技术
  - 常见的IE错误

## JavaScript与XML

 - 浏览器对XML DOM的支持
 - 浏览器对XPath的支持
 - 浏览器对XSLT的支持


## JSON

 - 语法
 - 解析与序列化

## Ajax与Comet

 - 【基础】
   - JSON
   - XHR对象
   - 请求方式
   - 响应解码
   - FormData
   - 进度事件
   - 头部信息
   - 传递JSON
   - 表单提交
   - jQuery中的ajax
 - 【跨域】
   - CORS
   - 图片Ping
   - JSONP

## 高级技巧

 - 高级函数
 - 防篡改对象
 - 高级定时器
 - 自定义事件
 - 拖放

## 离线应用与客户端存储

 - 离线检测
 - 应用缓存
 - 数据存储


## 动画和运动

 - 【动画】
   - 原生拖放
   - 模拟拖拽
   - 磁性吸附
   - 碰撞检测
   - 拖拽改变元素大小
   - 模拟滚动条
 - 【运动】
   - 匀速运动
   - 变速运动
   - 曲线运动
   - 抖动
   - 缓冲运动和弹性运动
   - 投掷和轨迹
   - 鼠标跟随运动
   - 碰壁运动
   - 碰撞运动


  [1]: https://github.com/tsejx/JavaScript-Guidebook/blob/master/1-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/1-%E8%AF%AD%E6%B3%95/1-1%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84.md#%E8%AF%8D%E6%B3%95%E7%BB%93%E6%9E%84
  [2]: https://github.com/tsejx/JavaScript-Guidebook/blob/master/1-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/1-%E8%AF%AD%E6%B3%95/1-2%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F.md#%E4%B8%A5%E6%A0%BC%E6%A8%A1%E5%BC%8F
  [3]: https://github.com/tsejx/JavaScript-Guidebook/blob/master/1-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/2-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2-1typeof%20%E6%93%8D%E4%BD%9C%E7%AC%A6.md#typeof-%E6%93%8D%E4%BD%9C%E7%AC%A6
  [4]: https://github.com/tsejx/JavaScript-Guidebook/blob/master/1-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/2-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2-2Undefined%E7%B1%BB%E5%9E%8B%E5%92%8CNull%E7%B1%BB%E5%9E%8B.md#undefined%E7%B1%BB%E5%9E%8B%E5%92%8Cnull%E7%B1%BB%E5%9E%8B
  [5]: https://github.com/tsejx/JavaScript-Guidebook/blob/master/1-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/2-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2-3Boolean%E7%B1%BB%E5%9E%8B.md#boolean%E7%B1%BB%E5%9E%8B
  [6]: https://github.com/tsejx/JavaScript-Guidebook/blob/master/1-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/2-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2-4Number%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B.md#number%E6%95%B0%E5%AD%97%E7%B1%BB%E5%9E%8B
  [7]: https://github.com/tsejx/JavaScript-Guidebook/blob/master/1-%E5%9F%BA%E7%A1%80%E6%A6%82%E5%BF%B5/2-%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B/2-5String%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B1%BB%E5%9E%8B.md#string%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B1%BB%E5%9E%8B