class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(val) {
      // 将元素压入栈
      this.stack.push(val);
      // 如果最小栈为空或者新元素小于等于最小栈栈顶元素，则将新元素压入最小栈
      if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
      }
    }
  
    pop() {
      // 弹出栈顶元素
      const popped = this.stack.pop();
      // 如果弹出的元素等于最小栈栈顶元素，则同时从最小栈弹出
      if (popped === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return popped;
    }
  
    top() {
      // 返回栈顶元素
      return this.stack[this.stack.length - 1];
    }
  
    getMin() {
      // 返回最小栈的栈顶元素，即当前栈中的最小元素
      return this.minStack[this.minStack.length - 1];
    }
  }