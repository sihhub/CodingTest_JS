const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const nums = input.slice(1);

function solution() {
  for (let i = 0; i < N; i++) {
    const num = +nums[i];
    //0 <= num <= 40

    const dp = Array.from({ length: num + 1 }, () => [0, 0]);

    dp[0] = [1, 0];
    if (num >= 1) dp[1] = [0, 1];

    for (let j = 2; j <= num; j++) {
      dp[j] = [dp[j - 1][0] + dp[j - 2][0], dp[j - 1][1] + dp[j - 2][1]];
    }

    console.log(`${dp[dp.length - 1][0]} ${dp[dp.length - 1][1]}`);
  }
}

solution();
