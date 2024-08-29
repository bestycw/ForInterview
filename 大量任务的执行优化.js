//直接执行任务 阻塞页面

//

function runTask(task){
    return Promise((resolve,reject) => {
        //1.微队列   仍然会阻塞 因为要清空微队列才会进入下一帧渲染
        Promise.resolve().then((res) => {
            task();
        })
        //1.宏队列 没有阻塞 但是会卡顿。 取出一个宏任务 ->执行任务->判断是否达到渲染时机（渲染时机判断浏览器不同）->渲染
        setTimeout(() => {
            task()
        },0)
        // RAF也会阻塞
        requestAnimationFrame(() => {
            runTask()
        })
        //判断是否有空余时间运行，类似于react的requestIdleCallback
        function _runTask(task,callback){
            //兼容有问题
            requestIdleCallback((idle) => {
                if(idle.timeRemaining>0){
                    task();
                    callback();
                }else{
                    _runTask(task,callback)
                }
            })
            

            requestAnimationFrame((idle) => {
                const start = Date.now()
                if(Date.now()-start<16.6){
                    task();
                    callback();
                }else{
                    _runTask(task,callback)
                }
            })
        }

    })
}