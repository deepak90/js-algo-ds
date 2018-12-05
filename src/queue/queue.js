// First in, first out

class Queue {
    constructor(...arr) {
        this.arr = arr;
    }
    enqueue(el) {
        return el ? this.arr.unshift(el) : this.arr;
    }
    dequeue() {
        const el = this.arr.length ? this.arr.pop() : [];
        return el;
    }
    peek() {
        return this.arr[this.arr.length - 1];
    }
    print() {
        return this.arr;
    }
}

module.exports = Queue;
