this在JS中是一个关键字，不是变量也不是属性名，JS中不允许给this赋值，且其是动态作用域，所取值取决于被谁调用


this指向的是函数运行时所在的环境，也就是说函数在哪个环境中运行，this的值就指向哪个环境，函数的this在调用时绑定的，完全取决于函数的调用位置（也就是函数的调用方法）。为了搞清楚this的指向是什么，必须知道相关函数是如何调用的。


# new 操作符

1. 创建了一个全新的对象。

let obj = {}


2. 这个对象会被执行[[Prototype]]（也就是__proto__）链接。

obj.__proto__ = Func.prototype


3. 生成的新对象会绑定到函数调用的this。
4. 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。

let res = Func.apply(obj, arguments)


5. 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。

return typeof res === 'object' ? res || obj : obj

# 箭头函数调用模式
箭头函数与普通函数的重要区别：

没有自己的this、super、arguments和new.target绑定。
不能使用new来调用。
没有原型对象。
不可以改变this的绑定。
形参名称不能重复。
箭头函数永远缓存上层函数的this，注意是上层函数，并非上层对象，当没有上层函数时，会绑定全局对象
无法直接改变箭头函数的this指向