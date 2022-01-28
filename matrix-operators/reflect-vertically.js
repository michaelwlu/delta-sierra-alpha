export const reflectVertically = (matrix) => {
	const n = matrix[0].length;

	// outer loop: Math.floor(n/2)
	// inner loop: n

	for (let column = 0; column < Math.floor(n / 2); column++) {
		for (let row = 0; row < n; row++) {
			// let temp = matrix[row][column];
			// matrix[row][column] = matrix[row][n - 1 - column];
			// matrix[row][n - 1 - column] = temp;

			[matrix[row][column], matrix[row][n - 1 - column]] = [
				matrix[row][n - 1 - column],
				matrix[row][column],
			];
		}
	}

	return matrix;
};

// n = 4

// [0,0] = [0,3] i=0, j=0
// [1,0] = [1,3] i=0, j=1
// [2,0] = [2,3] i=0, j=2
// [3,0] = [3,3] i=0, j=3

// [0,1] = [0,2] i=1, j=0
// [1,1] = [2,2] i=1, j=1
// [2,1] = [2,2] i=1, j=2
// [3,1] = [2,2] i=1, j=3

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

// console.log(reflectVertically(m1));
// console.log(reflectVertically(m2));
