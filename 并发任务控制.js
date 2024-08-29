//根据下面完成 SuperTask
function timeout(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, time)
    })
}
//同时处理两个任务，后续任务排队，等有任务完成后后续任务进行处理
class SuperTask {
    constructor(maxRunningNum = 2) {
        this._tasks = [];
        this.maxRunningNum = maxRunningNum;
        this._runningNum = 0;

    }
    add(task) {
        return new Promise((resolve, reject) => {
            this._tasks.push({
                task,
                resolve,
                reject
            });
            this._run();
        })
    }
    async _run() {
        while (this._runningNum <= this.maxRunningNum && this._tasks.length) {
            const {task,resolve,reject} = this._tasks.shift();
            this._runningNum++
            //  Promise.resolve().then(() => {
            task().then(resolve,reject).finally(() => {
                this._runningNum--;
                this._run();
            })
            //  })
            //  const res = await  task();
        }
    }
}
const superTask = new SuperTask();
function addTask(time, name) {
    superTask.add(() =>
        timeout(time)
    ).then(() => console.log(`任务${name} 完成`))
}

addTask(10000, 1) //10000ms后输出 任务1
addTask(5000, 2) //5000ms后输出 任务2
addTask(3000, 3) //8000ms后输出 任务3
addTask(4000, 4) //12000ms后输出 任务4

