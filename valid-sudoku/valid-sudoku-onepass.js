const isValidSudokuOnePass = (board) => {
	const hArrays = [...Array(9)].map(() => Array(9).fill(false));
	const vArrays = [...Array(9)].map(() => Array(9).fill(false));
	const gridArrays = [...Array(9)].map(() => Array(9).fill(false));

	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			const num = board[row][col];
			if (num === ".") continue;

			if (hArrays[row][num]) {
				return false;
			}
			hArrays[row][num] = true;

			if (vArrays[col][num]) {
				return false;
			}
			vArrays[col][num] = true;

			const gridIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);

			if (gridArrays[gridIdx][num]) return false;
			gridArrays[gridIdx][num] = true;
		}
	}

	return true;
};

const validBoard = [
	["5", "3", ".", ".", "7", ".", ".", ".", "."],
	["6", ".", ".", "1", "9", "5", ".", ".", "."],
	[".", "9", "8", ".", ".", ".", ".", "6", "."],
	["8", ".", ".", ".", "6", ".", ".", ".", "3"],
	["4", ".", ".", "8", ".", "3", ".", ".", "1"],
	["7", ".", ".", ".", "2", ".", ".", ".", "6"],
	[".", "6", ".", ".", ".", ".", "2", "8", "."],
	[".", ".", ".", "4", "1", "9", ".", ".", "5"],
	[".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const invalidBoard = [
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

const invalidBoard2 = [
	[".", ".", ".", ".", "5", ".", ".", "1", "."],
	[".", "4", ".", "3", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", "3", ".", ".", "1"],
	["8", ".", ".", ".", ".", ".", ".", "2", "."],
	[".", ".", "2", ".", "7", ".", ".", ".", "."],
	[".", "1", "5", ".", ".", ".", ".", ".", "."],
	[".", ".", ".", ".", ".", "2", ".", ".", "."],
	[".", "2", ".", "9", ".", ".", ".", ".", "."],
	[".", ".", "4", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudokuOnePass(validBoard)); // expect true
console.log(isValidSudokuOnePass(invalidBoard)); // expect false
console.log(isValidSudokuOnePass(invalidBoard2)); // expect false
