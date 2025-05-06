function solution(bandage, health, attacks) {
  let answer = health;
  let count = 0;

  for (let i = 1; i <= attacks[attacks.length - 1][0]; i++) {
    const attacked = attacks.find((item) => item[0] === i);

    if (attacked) {
      answer -= attacked[1];
      count = 0;
    } else {
      count++;
      answer += bandage[1];
    }

    if (count === bandage[0]) {
      answer += bandage[2];
      count = 0;
    }

    answer = Math.min(answer, health);

    if (answer <= 0) return -1;
  }

  return answer;
}