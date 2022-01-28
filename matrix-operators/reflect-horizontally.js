export const reflectHorizontally = (matrix) => {
	const n = matrix[0].length;

	// outer loop = Math.floor(n / 2)
	// inner loop = n

	for (let row = 0; row < Math.floor(n / 2); row++) {
		for (let column = 0; column < n; column++) {
			// let temp = matrix[i][j];
			// matrix[i][j] = matrix[n - 1 - i][j];
			// matrix[n - 1 - i][j] = temp;

			[matrix[row][column], matrix[n - 1 - row][column]] = [
				matrix[n - 1 - row][column],
				matrix[row][column],
			];
		}
	}

	return matrix;
};

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

// console.log(reflectHorizontally(m1));
// console.log(reflectHorizontally(m2));
