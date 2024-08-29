function isPromiseList(val){
    if(val!==null &&(typeof val ==='object' || typeof val ==='function')&& val.then && (typeof val.then === 'function')) return true
    return false
}

function runMicoTask(){
//实现微队列

}