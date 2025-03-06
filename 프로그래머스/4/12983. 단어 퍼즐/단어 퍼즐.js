function solution(strs, t) {
  //DP ...
  const dp = Array.from({ length: t.length }, () => 0);
  strs = new Set(strs); // 문자열 검사를 빠르게 하기 위해서 문자열 리스트를 set으로 만든다.

  for (let i = 0; i < t.length; i += 1) {
    dp[i] = Infinity;
    for (let j = 0; j < Math.min(i + 1, 5); j += 1) {
      const start = i - j;
      const end = i + 1;
      const sub = t.slice(start, end);

      if (strs.has(sub)) {
        const prev = start - 1 === -1 ? 0 : dp[start - 1];
        dp[i] = Math.min(dp[i], prev + 1);
      }
    }
  }

  return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}
