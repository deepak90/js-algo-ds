// First in, First out
class Queue {
    constructor(...arr) {
        this.arr = arr;
    }
    get length() {
        return this.arr.length;
    }
    enqueue(el) {
        return el ? this.arr.unshift(el) : this.arr;
    }
    dequeue() {
        return !this.isEmpty() ? this.arr.pop() : [];
    }
    peek() {
        return !this.isEmpty() ? this.arr[this.length - 1] : null;
    }
    isEmpty() {
        return this.length === 0;
    }
    print() {
        return this.arr;
    }
}

module.exports = Queue;
