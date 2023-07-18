function maxCount(m, n, ops) {
  let minX = m, minY = n;

  // Find the minimum x and y coordinates after all operations
  for (const [x, y] of ops) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
  }

  // The number of maximum integers is the area of the rectangle formed by minX and minY
  return minX * minY;
}

// Test with the given example
const m = 3;
const n = 3;
const ops = [[2, 2], [3, 3]];
const result = maxCount(m, n, ops);
console.log(result); // Output: 4
