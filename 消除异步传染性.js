//因为异步会具有传染性，所以需要消除异步传染性，让代码看起来是同步的

//思路就是让请求直接报错，但是网络线程还在运行，然后缓存结果，再次调用获取结果


