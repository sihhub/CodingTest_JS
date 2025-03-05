const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const heightMap = input.slice(1).map((row) => row.split(" ").map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function createGraph(rainLevel) {
  const graph = new Map();

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (heightMap[i][j] > rainLevel) {
        // 물에 잠기지 않은 곳만 노드로 사용
        let nodeIdx = i * N + j;
        graph.set(nodeIdx, []);

        for (let d = 0; d < 4; d++) {
          let ni = i + dx[d],
            nj = j + dy[d];
          if (ni >= 0 && ni < N && nj >= 0 && nj < N && heightMap[ni][nj] > rainLevel) {
            let neighborIdx = ni * N + nj;
            graph.get(nodeIdx).push(neighborIdx);
          }
        }
      }
    }
  }
  return graph;
}

const dfs = (stack, visited, graph) => {
  while (stack.length > 0) {
    const node = stack[stack.length - 1];

    for (const neighbor of graph.get(node)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        stack.push(neighbor);
        dfs(stack, visited, graph);
      }
    }
    stack.pop();
  }
};

function solution() {
  let maxSafeAreas = 1; // 비가 하나도 안 올 경우 최소 1개의 영역 존재
  const maxHeight = Math.max(...heightMap.flat()); // 최대 높이 구하기

  for (let level = 0; level <= maxHeight; level++) {
    const graph = createGraph(level);

    let safeAreas = 0;
    const visited = new Set();

    for (let node of graph.keys()) {
      if (!visited.has(node)) {
        const stack = [node];
        dfs(stack, visited, graph);
        safeAreas++;
      }
    }

    maxSafeAreas = Math.max(maxSafeAreas, safeAreas);
  }

  return maxSafeAreas;
}

console.log(solution());
