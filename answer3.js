function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  // Create a new matrix with the dimensions swapped
  const transpose = new Array(cols).fill(null).map(() => new Array(rows));
  
  // Perform the transpose operation
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transpose[j][i] = matrix[i][j];
    }
  }
  
  return transpose;
}

// Test with the given example
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const result = transposeMatrix(matrix);
console.log(result);
