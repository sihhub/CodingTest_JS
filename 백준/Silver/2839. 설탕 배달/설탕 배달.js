const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];

function solution() {
  const dp = Array.from({ length: N + 1 }, () => Infinity);

  if (N >= 3) dp[3] = 1;
  if (N >= 5) dp[5] = 1;

  for (let i = 6; i <= N; i++) {
    if (dp[i - 3] !== Infinity || dp[i - 5] !== Infinity) {
      dp[i] = Math.min(dp[i - 3] + 1, dp[i - 5] + 1);
    }
  }

  return dp[N] === Infinity ? -1 : dp[N];
}

console.log(solution());
