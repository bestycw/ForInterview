class Task {
    constructor() {
        this.taskList = [];
        this.currentIndex = 0;
        this.isRuning = false
    }

    addTask(task) {
        this.taskList.push(task)
    }
    async #next(){
        this.currentIndex++;
       await this.#runTask();
    }
    async #runTask() {
        const task = this.taskList[this.currentIndex];
        const i = this.currentIndex
        await task(this.#next);
        const  j = this.currentIndex;
        if(i === j && this.currentIndex < this.taskList.length){
            this.currentIndex++;
            this.#runTask();
        }
        // while (this.currentIndex < this.taskList.length) {

        //     // this.currentIndex++;
        // }
    }
    run() {
        if (this.isRuning || this.taskList.length === 0) return
        this.isRuning = true;
        this.#runTask();
    }
}