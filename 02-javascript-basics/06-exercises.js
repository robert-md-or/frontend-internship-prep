// 1. grade function
function grade(score) {
  if (score >= 90) return 'A';
  if (score >= 75) return 'B';
  if (score >= 60) return 'C';
  return 'F';
}

// 2. Test with different scores
console.log(grade(95));
console.log(grade(80));
console.log(grade(65));
console.log(grade(40));

// 3. isEven function
const isEven = (n) => n % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));