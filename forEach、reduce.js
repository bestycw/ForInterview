Array.prototype.myEach = (callback) => {
    // const that = globalThis;
    if(typeof callback !== 'function') {
        throw new Error('callback is not a function')
    };
    let n = this.length;
    // console.log(globalThis)
    let i = 0;
    while(i < n) {
        if(i in that){
            callback(this[i], i, this);
        }
        i++;
    }
}


const a = [1,3,4]

a.myEach((item,index,array) => {
    console.log(item)
})

//手写reduce
Array.prototype.myReduce = function (callback, initialValue) {
    // 判断传入的第一个参数是否为函数
    if (typeof callback !== 'function') {
        throw new TypeError(`${callback} is not a function`)
    }
    
    const arr = this
    let sum = 0
    let i = 0
    
    // 判断是否有传递第二个参数
    if (arguments.length === 1) { 
        // 没有传递第二个参数, 将sum设置为数组第一项，并且循环从第二项开始
        sum = arr[0]
        i = 1
    } else {
        // 有传递第二个参数，将sum设置传进来的initialValu
        sum = initialValue
    }
    
    for (; i < arr.length; i++) {
        callback(sum, arr[i], i, arr)
        sum += arr[i]
    }
    
    return sum
}
