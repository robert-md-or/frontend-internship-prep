const scores = [85, 42, 91, 67, 73, 55, 88];

// 1. for...of loop
for (const score of scores) {
  console.log(score);
}

// 2. for loop with index
for (let i = 0; i < scores.length; i++) {
  console.log("Score " + i + ": " + scores[i]);
}

// 3. filter scores above 70
const highScores = scores.filter(score => score > 70);
console.log(highScores);

// 4. map to multiply every score by 2
const doubledScores = scores.map(score => score * 2);
console.log(doubledScores);