class Queue {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
        return this.data;
    }

    pop() {
        const val = this.data.shift();
        return val;
    }

    size() {
        return this.data.length;
    }

    top() {
        return this.data[0];
    }
}

const newQueue = new Queue();
console.log(newQueue.push(2));
console.log(newQueue.push(1));
console.log(newQueue.push(3));
console.log(newQueue.push(4));
console.log(newQueue.pop());
console.log(newQueue.top());
console.log(newQueue.pop());
console.log(newQueue.top());
console.log(newQueue.push(7));
console.log(newQueue.top());
console.log(newQueue.size());