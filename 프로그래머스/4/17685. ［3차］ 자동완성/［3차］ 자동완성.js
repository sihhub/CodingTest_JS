class Node {
  constructor(value = "") {
    this.value = value;
    this.count = 1;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      } else {
        currentNode.children.get(char).count++;
      }

      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }

    return true;
  }

  findNode(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return null;
      }
      currentNode = currentNode.children.get(char);
    }

    return currentNode;
  }
}

function solution(words) {
  const trie = new Trie();
  for (const word of words) {
    trie.insert(word);
  }

  let count = 0;

  for (const word of words) {
    let tempCount = 0;
    let currentNode = trie.root;

    for (const char of word) {
      tempCount++;
      currentNode = currentNode.children.get(char);

      if (currentNode.count === 1) {
        break;
      }
    }
    count += tempCount;
  }

  return count;
}