const  [a,b] = {
    a: 1,
    b: 2
}
console.log(a,b) // 1 2
// 1.对象解构赋值
// 2.解构赋值可以指定默认值
Object.prototype[Symbol.iterator] = function(){
    return Object.values(this)[Symbol.iterator]()
}