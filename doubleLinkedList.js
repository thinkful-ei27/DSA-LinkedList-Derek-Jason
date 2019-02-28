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

    this.tail === null ? this.tail = this.head : this.tail = this.tail.next;
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
      const newNode = new _Node(item, null, tempNode);
      tempNode.next = newNode;
      this.tail = newNode;
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
    let nextNode = currNode.next;
    nextNode.previous = currNode.previous;
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

    const newNode = new _Node(value, currNode, previousNode);
    previousNode.next = newNode;
    currNode.previous = newNode;
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

    let nextNode = currNode.next;
    const newNode = new _Node(value, nextNode, currNode);
    currNode.next = newNode;
    nextNode.previous = newNode;
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

    const newNode = new _Node(value, currNode, previousNode);
    previousNode.next = newNode;
    currNode.previous = newNode;
  }
}

const reverseDLL = list => {
  if (!list.head) {
    console.log('Nothing in list');
    return;
  }

  let previousNode = list.head;
  let currNode = list.head;

  while (currNode !== null) {
    let origNext = currNode.next;
    let origPrev = currNode.previous;
    previousNode = currNode;
    currNode = currNode.next;
    previousNode.next = origPrev;
    previousNode.previous = origNext;
  }

  let origHead = list.head;
  let origTail = list.tail;
  list.head = origTail;
  list.tail = origHead;

  return list;
};

const display = list => {
  let currNode = list.head;

  if (!list.head) {
    console.log('Nothing to display');
  }

  while (currNode !== null) {
    console.log(`Value: ${currNode.value}, Next: ${currNode.next}, Previous: ${currNode.previous}`);
    currNode = currNode.next;
  }
};

const mainDLL = () => {
  const DLL = new DoublyLinkedList();
  DLL.insertLast('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');

  display(DLL);

  reverseDLL(DLL);
  display(DLL);
};

mainDLL();