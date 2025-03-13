function dfs(n, computers, index, visited) {
  visited[index] = true;

  for (let i = 0; i < n; i++) {
    if (i !== index && computers[index][i] === 1 && !visited[i]) {
      dfs(n, computers, i, visited);
    }
  }
}

function solution(n, computers) {
  const visited = Array.from({ length: n }, () => false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(n, computers, i, visited);
      count += 1;
    }
  }

  return count;
}
