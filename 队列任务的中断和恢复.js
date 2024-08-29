//有一个任务列表，能够通过返回的 start 和pause进行控制开始和暂停。并返回最终的结果

function queueTask(tasks) {
    let i = 0
    let isRuning = false
    const res = []
    let prom = null;
    return{
        async start(){
            return new Promise(async (resolve,reject) => {
                if(prom) return prom.then(resolve,reject)
                if(isRuning) return 
                isRuning=true
                while(i<tasks.length){
                    try{
                        res.push(await tasks[i]())
                    }catch(err){
                        reject(err);
                        isRuning = false
                        prom = Promise.reject(err)
                        return 
                    }
                 
                    i++;
                    if(!isRuning && i<tasks.length-1){
    
                        return
                    }
    
                }
                isRuning = false
                resolve(res)
                prom = Promise.resolve(res);
            })
        },
        pause(){
            isRuning = false
        }
    }
}