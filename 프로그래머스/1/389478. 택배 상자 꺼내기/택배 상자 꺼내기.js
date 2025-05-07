function solution(n, w, num) {
  const floor = Math.floor((num - 1) / w);
  const col = floor % 2 === 0 ? (num - 1) % w : w - 1 - ((num - 1) % w);
  let count = 0;

  for (let f = floor; f * w + (f % 2 === 0 ? col : w - 1 - col) < n; f++) {
    count++;
  }

  return count;
}