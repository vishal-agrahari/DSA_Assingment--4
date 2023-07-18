function findDistinctInFirst(nums1, nums2) {
  const distinctInFirst = [];
  const nums2Set = new Set(nums2);

  for (const num of nums1) {
    if (!nums2Set.has(num)) {
      distinctInFirst.push(num);
    }
  }

  return distinctInFirst;
}

function findDistinctInSecond(nums1, nums2) {
  const distinctInSecond = [];
  const nums1Set = new Set(nums1);

  for (const num of nums2) {
    if (!nums1Set.has(num)) {
      distinctInSecond.push(num);
    }
  }

  return distinctInSecond;
}

function findDistinctInBothArrays(nums1, nums2) {
  const distinctInFirst = findDistinctInFirst(nums1, nums2);
  const distinctInSecond = findDistinctInSecond(nums1, nums2);
  return [distinctInFirst, distinctInSecond];
}

// Test with the given example
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const result = findDistinctInBothArrays(nums1, nums2);
console.log(result); // Output: [[1, 3], [4, 6]]
