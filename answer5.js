function countStaircaseRows(n) {
  let k = 0;
  while (n >= k + 1) {
    k++;
    n -= k;
  }
  return k;
}

// Test with the given example
const n = 5;
const result = countStaircaseRows(n);
console.log(result); // Output: 2
