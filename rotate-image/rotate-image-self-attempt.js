const rotate = (matrix) => {
	const n = matrix[0].length;
	const rotateVectors = [
		[-1, 1],
		[-1, -1],
		[1, -1],
		[1, 1],
	];
	const vectors = [
		[1, 0],
		[0, 1],
		[-1, 0],
		[0, -1],
	];

	for (let layer = 0; layer < Math.floor(n / 2); layer++) {
		const stripeLength = n - 1 - layer * 2;

		for (let stripe = 0; stripe < stripeLength; stripe++) {
			let x = layer + stripe;
			let y = layer;

			let replacer = matrix[y][x];

			for (let rotate = 0; rotate < 4; rotate++) {
				const newX =
					x +
					vectors[rotate][0] * stripeLength +
					rotateVectors[rotate][0] * stripe;
				const newY =
					y +
					vectors[rotate][1] * stripeLength +
					rotateVectors[rotate][1] * stripe;

				let replaced = matrix[newY][newX];
				matrix[newY][newX] = replacer;
				replacer = replaced;

				x = newX;
				y = newY;
			}
		}
	}

	return matrix;
};

const m = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

console.log(rotate(m));
