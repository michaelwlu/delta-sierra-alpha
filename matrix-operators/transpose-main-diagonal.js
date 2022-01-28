export const transposeMainDiagonal = (matrix) => {
	const n = matrix[0].length;

	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j <= i; j++) {
			// let temp = matrix[j][n - 1 - i + j];
			// matrix[j][n - 1 - i + j] = matrix[n - 1 - i + j][j];
			// matrix[n - 1 - i + j][j] = temp;

			[matrix[j][n - 1 - i + j], matrix[n - 1 - i + j][j]] = [
				matrix[n - 1 - i + j][j],
				matrix[j][n - 1 - i + j],
			];
		}
	}

	return matrix;
};
