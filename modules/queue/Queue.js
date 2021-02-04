class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    return this.first.value;
  }

  all() {
    let queueArray = [];
    let currentNode = this.first;
    if (this.first && !this.last) {
      queueArray.push(this.first.value);
      return queueArray;
    }
    while (currentNode) {
      queueArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return queueArray;
  }
}

module.exports = Queue;
