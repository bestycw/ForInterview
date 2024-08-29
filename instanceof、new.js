function myInstanceOf(a, b) {
    let left = a.__proto__;
    let right = b.prototype;
    while (true) {
        if (left == null) {
            return false
        }
        if (left == right) {
            return true
        }
        left = left.__proto__
    }
}

function myNew(constructor, ...args) {
    // 1. 创建一个新的空对象  
    const obj = {};

    // 2. 将这个新对象的内部原型链接到构造函数的 prototype 对象  
    obj.__proto__ = constructor.prototype;

    // 3. 将这个新对象作为 this 上下文，并调用构造函数  
    const result = constructor.apply(obj, args);

    // 4. 如果构造函数返回的是一个对象，则返回这个对象；否则返回新创建的对象  
    return result instanceof Object ? result : obj;
}

