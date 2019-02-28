'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);

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

const display = list => {
  let currNode = list.head;

  if (!list.head) {
    console.log('Nothing to display');
  }

  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
};

const size = list => {
  let counter = 0;
  let currNode = list.head;

  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }

  return counter;
};

const isEmpty = list => {
  return !list.head;
};

const findPrevious = (list, item) => {
  if (!list.head) {
    console.log('Nothing in list');
    return;
  }
  if (list.head.value === item) {
    console.log('There is no previous node');
    return;
  }
  let previousNode = list.head;
  let currNode = list.head;

  while ((currNode !== null) && (currNode.value !== item)) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log('Item not found');
    return;
  }
  return previousNode.value;
};

const findLast = (list) => {
  if (!list.head) {
    console.log('Nothing in list');
    return;
  }
  let previousNode = list.head;
  let currNode = list.head;

  while (currNode !== null) {
    previousNode = currNode;
    currNode = currNode.next;
  }
  return previousNode.value;
};

const reverseList = list => {
  if (!list.head) {
    console.log('Nothing in list');
    return;
  }
  let previousNode = null;
  let currNode = list.head;
  let nextNode = list.head.next;

  while (currNode !== null) {
    nextNode = currNode.next;
    currNode.next = previousNode;
    previousNode = currNode;
    currNode = nextNode;
  }
  list.head = previousNode;
  return list;
};

const thirdFromEnd = list => {
  const listSize = size(list);

  if (!list.head) {
    console.log('Nothing in list');
    return;
  }

  let currNode = list.head;

  for (let i = 0; i < listSize - 3; i++) {
    currNode = currNode.next;
  }

  if (currNode === null) {
    console.log('Item not found');
    return;
  }

  return currNode.value;
};

const middleOfList = list => {
  if (!list.head) {
    console.log('Nothing in list');
    return;
  }

  const arr = [];

  let currNode = list.head;

  while (currNode !== null) {
    arr.push(currNode.value);
    currNode = currNode.next;
  }

  const mid = arr.length % 2 === 0 ? arr.length / 2 : Math.floor(arr.length / 2);

  return arr[mid];
};

function main() {
  const SSL = new LinkedList();
  const emptySSL = new LinkedList();
  SSL.insertLast('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');
  SSL.insertLast('Tauhida');
  SSL.remove('squirrel');
  SSL.insertBefore('Athena', 'Boomer');
  SSL.insertAfter('Hotdog', 'Helo');
  SSL.insertAt('Kat', 3);
  SSL.remove('Tauhida');
  display(SSL);
  console.log(size(SSL));
  // console.log(isEmpty(SSL));
  //console.log(isEmpty(emptySSL));
  //  console.log(findPrevious(SSL, 'Hotdog'));
  // console.log(findLast(SSL));
  // reverseList(SSL);
  // display(SSL);
  // console.log(thirdFromEnd(SSL));
  console.log(middleOfList(SSL));
}

main();