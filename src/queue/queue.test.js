const Queue = require('./queue');

describe('A queue', () => {
    it('when Initialized, peeking at it, results undefined', () => {
        const queue = new Queue();
        expect(queue.peek()).toEqual(undefined);
    });

    it('when Initialized with items, peeking at it yields the last item', () => {
        const queue = new Queue(1, 2, 'a');
        expect(queue.peek()).toEqual('a');
    });

    it('enqueing an item adds it to the first index of the array', () => {
        const queue = new Queue(1, 2, 3);
        queue.enqueue(4);
        expect(queue.print()).toEqual([4, 1, 2, 3]);
    });

    it('passing nothing to an enqueue function, returns the initial array', () => {
        const queue = new Queue();
        queue.enqueue();
        expect(queue.print()).toEqual([]);
    });

    it('enqueing an item to an empty queue, has only one item', () => {
        const queue = new Queue();
        queue.enqueue(1);
        expect(queue.print()).toEqual([1]);
    });

    it('dequeuing an empty queue, returns an empty queue', () => {
        const queue = new Queue();
        expect(queue.dequeue()).toEqual([]);
    });

    it('dequeuing a queue returns us the element that was dequeued', () => {
        const queue = new Queue(1, 2, 3);
        expect(queue.dequeue()).toEqual(3);
    });
});
