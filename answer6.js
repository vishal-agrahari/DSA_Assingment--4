function sortedSquares(nums) {
  const squaredArr = nums.map(num => num * num);
  squaredArr.sort((a, b) => a - b);
  return squaredArr;
}

// Test with the given example
const nums = [-4, -1, 0, 3, 10];
const result = sortedSquares(nums);
console.log(result); // Output: [0, 1, 9, 16, 100]
