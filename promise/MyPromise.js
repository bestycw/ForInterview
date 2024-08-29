const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
    #state = PENDING
    #result = undefined
    #callbacks = []
    constructor(executor) {
        const resolve = (value) => {
            this.#changeStatus(FULFILLED, value)
        }
        const reject = (reason) => {
            this.#changeStatus(REJECTED, reason)
        }
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }

    }
    #changeStatus = (status, result) => {
        if (this.#state !== PENDING) return
        this.#state = status
        this.#result = result
        this.#run()
    }
    #isPromiseLike = (obj) => {
        return obj && typeof obj.then === 'function'
    }
    #microtask = (callback) => {
        setTimeout(callback, 0)

    }
    #runOnce = (callback, resolve, reject) => {
        this.#microtask(() => {
            if (typeof callback === 'function') {
                try {
                    // if(this.#isPromiseLike(callback)) {
                    // }
                    const data = callback(this.#result)
                    if (this.#isPromiseLike(data)) {
                        data.then(resolve, reject)

                    } else {
                        resolve(data)
                    }

                } catch (err) {
                    reject(err)
                }
            } else {
                //穿透就是隔级传值
                const settled = this.#state === FULFILLED ? resolve : reject
                settled(this.#result)
            }
        })

    }
    #run = () => {
        if (this.#state === PENDING) return
        while (this.#callbacks.length) {
            const value = this.#callbacks.shift()
            const { onFulfilled, onRejected, resolve, reject } = value
            if (this.#state === FULFILLED) {
                this.#runOnce(onFulfilled, resolve, reject)

            } else if (this.#state === REJECTED) {
                this.#runOnce(onRejected, resolve, reject)
            }
        }
    }
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            this.#callbacks.push({
                onFulfilled,
                onRejected,
                resolve,
                reject
            })
            this.#run()
        })
    }
}

const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
}).then(123, undefined).then((res) => {
    console.log(res)
})



