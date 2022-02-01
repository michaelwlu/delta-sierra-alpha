const isValidSudokuAttempt = (board) => {
	// check rows
	for (let row = 0; row < 9; row++) {
		const hashTable = Array(9).fill(false);

		for (let column = 0; column < 9; column++) {
			const num = board[row][column];

			if (num !== ".") {
				if (hashTable[num]) {
					return false;
				} else {
					hashTable[num] = true;
				}
			}
		}
	}

	// check columns
	for (let column = 0; column < 9; column++) {
		const hashTable = Array(9).fill(false);

		for (let row = 0; row < 9; row++) {
			const num = board[row][column];

			if (num !== ".") {
				if (hashTable[num]) {
					return false;
				} else {
					hashTable[num] = true;
				}
			}
		}
	}

	// check grids
	const gridCoordinates = [];

	for (let x = 0; x < 3; x++) {
		for (let y = 0; y < 3; y++) {
			gridCoordinates.push([x * 3, y * 3]);
		}
	}

	for (let gridIdx = 0; gridIdx < gridCoordinates.length; gridIdx++) {
		const hashTable = Array(9).fill(false);
		const [startingRow, startingColumn] = gridCoordinates[gridIdx];

		for (let row = startingRow; row < startingRow + 3; row++) {
			for (let column = startingColumn; column < startingColumn + 3; column++) {
				const num = board[row][column];

				if (num !== ".") {
					if (hashTable[num]) {
						return false;
					} else {
						hashTable[num] = true;
					}
				}
			}
		}
	}

	return true;
};

const board = [
	["8", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudokuAttempt(board)); // expect false
