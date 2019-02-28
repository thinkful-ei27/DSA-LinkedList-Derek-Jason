'use strict';

class _Node {
  constructor(value, next, previous) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head, null);

    if (this.tail === null){
      this.tail = this.head;}
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  insertBefore(value, key) {
    if (!this.head) {
      console.log('Nothing in list');
      return;
    }
    if (this.head.value === key) {
      this.insertFirst(value);
    }
    let previousNode = this.head;
    let currNode = this.head;

    while ((currNode !== null) && (currNode.value !== key)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    previousNode.next = new _Node(value, currNode);
  }

  insertAfter(value, key) {
    if (!this.head) {
      console.log('Nothing in list');
      return;
    }

    let currNode = this.head;

    while ((currNode !== null) && (currNode.value !== key)) {
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    currNode.next = new _Node(value, currNode.next);
  }

  insertAt(value, pos) {
    if (!this.head) {
      console.log('Nothing in list');
      return;
    }

    let previousNode = this.head;
    let currNode = this.head;

    for (let i = 0; i < pos - 1; i++) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    previousNode.next = new _Node(value, currNode);
  }
}