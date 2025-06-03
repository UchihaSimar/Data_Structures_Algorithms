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

    isEmpty() {
        return this.data.length == 0;
    }
}

function getPriority(operator) {
    if (operator === '^') return 3;
    if (operator === '*' || operator === '/') return 2;
    if (operator === '-' || operator === '+') return 1;
    return -1;
}

function infix_to_postfix(str) {
    let stackCalc = new Stack();
    let ans = "";

    for (let i = 0; i <= str.length - 1; i++) {
        if ((str[i] >= 'A' && str[i] <= 'Z') || (str[i] >= 'a' && str[i] <= 'z') || (str[i] >= '0' && str[i] <= '9')) {
            ans = ans + str[i];
        } else if (str[i] === '(') {
            stackCalc.push(str[i]);
        } else if (str[i] === ')') {
            while (!stackCalc.isEmpty() && stackCalc.top() !== '(') {
                ans = ans + stackCalc.pop();
            }
            stackCalc.pop();
        } else {
            if(getPriority(stackCalc.top()) < getPriority(str[i])){
                stackCalc.push(str[i]);
            }else{
                ans = ans + stackCalc.pop();
                stackCalc.push(str[i]);
            }
        }
    }

    while(!stackCalc.isEmpty()){
        ans = ans + stackCalc.pop();
    }

    return ans;

}

console.log(infix_to_postfix("a+b*(c^d-e)"));