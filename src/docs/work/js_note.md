---
title: JS 笔记
---
学习的 [Mr.Hope 的教程](https://mrhope.site/code/language/js/)，仅记录与 Java 不同且需要注意的地方

## 变量

- JavaScript 的保留字：arguments、break、case、catch、class、const、continue、debugger、default、delete、do、else、enum、eval、export、extends、false、finally、for、function、if、implements、import、in、instanceof、interface、let、new、null、package、private、protected、public、return、static、super、switch、this、throw、true、try、typeof、var、void、while、with、yield
- 申明变量别用`var`，最好用`let`或`const`代替
- 最好用 strict 模式：在代码第一行加上`'use strict';`
- 转换为布尔值的结果：
  - 仅这些为`false`: `undefined`, `null`, `false`, `0`, `NaN`, `""`, `''`
  - 特别注意这些为`true`: `[]`, `{}`
- `NaN`与所有值都不相等，包括自己，只能用`isNaN(NaN);`判断
- 浮点数得用差的绝对值判断：`Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001;`
- `for ... in`对数组循环得到的元素为字符串
  - 遍历集合类型时用`for ... of`或`forEach()`
- 反引号对` `` `可表示跨行字符串，且可以用模版`${}`填充多个字符变量
- 对象类似 python 的字典，且定义时最后的键值对后不加`,`，用`.`访问属性
  - 若键为非法变量名，则需写成字符串形式，且用`[]`访问
  - 访问不存在的属性返回`undefined`
- ES6 添加了`Set`和`Map`数据类型

## 运算符

- 坚持用`===`进行比较，避免`==`自动转换类型导致的错误
  - `switch`内部采用的是`===`
- `typeof`可用于检查变量是否声明，`instanceof`可区分数组和对象

## 数组

- 数组可同时含不同类型元素
- 可通过给`length`属性赋值改变数组长度，通过索引赋值时超范围也会改变数组长度（但最好别）
- 空数组`pop()`返回`undefined`
- 在数组头添加/删除：`unshift()`/`shift()`
- `splice()`: 在指定索引处开始删除若干元素，再添加若干元素
- `concat()`: 连接两个数组，并返回新数组（会将参数数组中的数组拆成单个元素）
- `join()`: 把数组元素用参数连成字符串
