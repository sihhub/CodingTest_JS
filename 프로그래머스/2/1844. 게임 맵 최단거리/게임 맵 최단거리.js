//큐
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(item) {
    this.queue[this.rear++] = item;
  }

  dequeue() {
    const item = this.queue[this.front];
    delete this.queue[this.front++];
    return item;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  print() {
    console.log(this.queue);
  }
}

function solution(maps) {
  const n = maps.length; // 행 개수
  const m = maps[0].length; // 열 개수
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]; // 상하좌우 이동

  const queue = new Queue();
  queue.enqueue([0, 0, 1]);

  while (!queue.isEmpty()) {
    const [x, y, dist] = queue.dequeue();

    if (x === n - 1 && y === m - 1) return dist;

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        maps[nx][ny] = 0;
        queue.enqueue([nx, ny, dist + 1]);
      }
    }
  }

  return -1;
}
