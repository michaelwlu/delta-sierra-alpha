export const transposeAntiDiagonal = (matrix) => {
	const n = matrix[0].length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j <= i; j++) {
			// let temp = matrix[j][i - j];
			// matrix[j][i - j] = matrix[n - 1 - i + j][n - 1 - j];
			// matrix[n - 1 - i + j][n - 1 - j] = temp;

			[matrix[j][i - j], matrix[n - 1 - i + j][n - 1 - j]] = [
				matrix[n - 1 - i + j][n - 1 - j],
				matrix[j][i - j],
			];
		}
	}

	return matrix;
};

// n = 4

// [y, x]

// y1 = j
// x2 = i - j

// y2 = n - 1 - i + j
// x2 = n - 1 - j

// i = 0, j = 0
// [0, 0], [3, 3]

// i = 1, j = 0
// [0, 1], [2, 3]
// i = 1, j = 1
// [1, 0], [3, 2]

// i = 2, j = 0
// [0, 2], [1, 3]
// i = 2, j = 1
// [1, 1], [2, 2]
// i = 2, j = 2
// [2, 0], [3, 1]

// const m1 = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];

// const m2 = [
// 	[1, 2, 3, 4],
// 	[5, 6, 7, 8],
// 	[9, 10, 11, 12],
// 	[13, 14, 15, 16],
// ];

// console.log(transposeAntiDiagonal(m1));
