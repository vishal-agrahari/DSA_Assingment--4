function arrayPairSum(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let maxSum = 0;
  // Pair consecutive elements and add the smaller value to the sum
  for (let i = 0; i < nums.length; i += 2) {
    maxSum += nums[i];
  }

  return maxSum;
}

// Test with the given example
const nums = [1, 4, 3, 2];
const result = arrayPairSum(nums);
console.log(result); // Output: 4
