//发布订阅
class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(type, callback) {
        if (!this.events[type]) {
            this.events[type] = []
        }
        this.events[type].push(callback)
    }
    emit(type, ...args) {
        if (this.events[type]) {
            this.events[type].forEach(fn => fn(...args))
        }
    }
    off(type, callback) {
        
        if (this.events[type]) {
            this.events[type] = this.events[type].filter(fn => fn !== callback)
        }   
    }
    once(type, callback) {
        const fn = (...args) => {
            callback(...args)
            this.off(type, fn)
        }
        this.on(type, fn);
        return this;
    }
    
}