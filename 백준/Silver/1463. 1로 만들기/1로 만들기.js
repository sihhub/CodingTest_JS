const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];

function solution() {
  const dp = Array.from({ length: N + 1 }).fill(() => Infinity);
  dp[1] = 0;
  if (N >= 2) dp[2] = 1;
  if (N >= 3) dp[3] = 1;

  for (let i = 4; i <= N; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, i % 3 === 0 ? dp[i / 3] + 1 : Infinity, i % 2 === 0 ? dp[i / 2] + 1 : Infinity);
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}

console.log(solution());
