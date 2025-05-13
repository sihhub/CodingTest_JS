function solution(players, m, k) {
  let answer = 0;
  let servers = [];

  for (let t = 0; t < 24; t++) {
    servers = servers.filter((item) => item.end > t);

    const serverCount = servers.reduce((sum, item) => sum + item.count, 0);
    const needCount = Math.floor(players[t] / m);

    if (needCount > serverCount) {
      const count = needCount - serverCount;
      servers.push({ end: t + k, count });
      answer += count;
    }
  }

  return answer;
}