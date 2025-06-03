class Stack {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
        return this.data;
    }

    pop() {
        const val = this.data.pop();
        return val;
    }

    size() {
        return this.data.length;
    }

    top() {
        return this.data[this.data.length - 1];
    }
}

const newStack = new Stack();
console.log(newStack.push(2));
console.log(newStack.push(3));
console.log(newStack.push(4));
console.log(newStack.push(1));
console.log(newStack.pop());
console.log(newStack.top());
console.log(newStack.top());
console.log(newStack.pop());
console.log(newStack.push(5));
console.log(newStack.top());
console.log(newStack.size());