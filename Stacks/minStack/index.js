class MinStack {
    constructor() {
        this.data = [];
        this.minData = Infinity;
    }

    push(val) {
        this.minData = Math.min(this.minData, val);
        this.data.push(val);
        return this.data;
    }

    pop() {
        const poppedElement = this.data.pop();
        this.minData = Math.min(...this.data);
        return poppedElement;
    }

    top() {
        return this.data[this.data.length - 1];
    }

    getMin() {
        return this.minData;
    }
}