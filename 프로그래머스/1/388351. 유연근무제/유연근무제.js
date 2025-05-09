function solution(schedules, timelogs, startday) {
  var answer = 0;
  const endShedules = schedules.map((time) => {
    let hour = Math.floor(time / 100);
    let minutes = time % 100;
    minutes += 10;
    if (minutes >= 60) {
      hour += Math.floor(minutes / 60);
      minutes = minutes % 60;
    }
    return hour * 100 + minutes;
  });

  for (let i = 0; i < timelogs.length; i++) {
    const endTime = endShedules[i];
    const timeLog = timelogs[i];
    let flag = 0;

    for (let d = 0; d < 7; d++) {
      const day = (d + startday - 1) % 7;
      if (day === 5 || day === 6) continue;

      if (endTime < timeLog[d]) {
        flag = 1;
        break;
      }
    }

    if (flag === 0) {
      answer++;
    }
  }

  return answer;
}
