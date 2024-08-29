Function.prototype.MyCall = (ctx,...args) => {
    ctx =(ctx === null || ctx === undefined)?globalThis:Object(ctx);
    const key = Symbol();
    // const fn = this;
    Object.defineProperty(ctx,key,{
        value:fn,
        enumerable:false
    })
    console.log(fn);
    ctx[key] = this;
    const result = ctx[key](...args)
    delete ctx[key];
    return result;
    // if (typeof this!== 'function') {
    //     throw new TypeError('必须在函数上调用 myCall');
    //   }
    //   const context = thisArg instanceof Object? thisArg : new Object(thisArg);
    //   const uniqueSymbol = Symbol('unique');
    //   context[uniqueSymbol] = this;
    //   const result = context[uniqueSymbol](...args);
    //   delete context[uniqueSymbol];
    //   return result;
}

//实现bind方法
Function.prototype.myBind = function (context, ...args) {
    //新建一个变量赋值为this，表示当前函数
    const fn = this
    //判断有没有传参进来，若为空则赋值[]
    args = args ? args : []
    //返回一个newFn函数，在里面调用fn
    return function newFn(...newFnArgs) {
        if (this instanceof newFn) {
            return new fn(...args, ...newFnArgs)
        }
        return fn.apply(context, [...args,...newFnArgs])
    }
}
const obj = {
    name:'hello'
}
const name = 'nihao'

function helloWorldA(a,b){
    console.log(this)
}
helloWorldA.MyCall(obj)