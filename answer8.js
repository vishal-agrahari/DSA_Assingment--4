function shuffle(nums, n) {
  const xElements = nums.slice(0, n); // Extract the first n elements
  const yElements = nums.slice(n); // Extract the last n elements

  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(xElements[i], yElements[i]);
  }

  return result;
}

// Test with the given example
const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
const result = shuffle(nums, n);
console.log(result); // Output: [2, 3, 5, 4, 1, 7]
