const move = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

function solution(storage, requests) {
  storage = storage.map((item) => item.split(""));

  const rLength = storage.length;
  const cLength = storage[0].length;

  function dfs(x, y, visited) {
    visited.push(`${x},${y}`);

    if (x === 0 || x === rLength - 1 || y === 0 || y === cLength - 1) {
      return true;
    }

    for (const m of move) {
      const nX = x + m[0];
      const nY = y + m[1];
      if (visited.includes(`${nX},${nY}`)) continue;
      if (storage[nX][nY] === "*" && dfs(nX, nY, visited)) {
        return true;
      }
    }

    return false;
  }

  for (let req of requests) {
    let flag = 0;

    if (req.length === 2) {
      flag = 1;
      req = req[0];
    }

    const deleted = [];
    for (let r = 0; r < rLength; r++) {
      for (let c = 0; c < cLength; c++) {
        if (storage[r][c] === req) {
          if (flag === 1) {
            deleted.push([r, c]);
          } else if (dfs(r, c, [])) {
            deleted.push([r, c]);
          }
        }
      }
    }

    for (const d of deleted) {
      storage[d[0]][d[1]] = "*";
    }
  }

  return storage.reduce((sum, row) => {
    return sum + row.filter((el) => el !== "*").length;
  }, 0);
}
