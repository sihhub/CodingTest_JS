const PATTERNS = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];

function solution(answers) {
  const result = [];
  const scores = Array.from({ length: PATTERNS.length }, () => 0);

  for (let [index, answer] of answers.entries()) {
    PATTERNS.forEach((pattern, i) => {
      if (pattern[index % pattern.length] === answer) {
        scores[i]++;
      }
    });
  }

  const maxScore = Math.max(...scores);

  scores.forEach((score, i) => {
    if (score === maxScore) result.push(i + 1);
  });

  return result;
}