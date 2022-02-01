const isValidSudokuBitmasking = (board) => {
	const hMasks = Array(9).fill(0);
	const vMasks = Array(9).fill(0);
	const gMasks = Array(9).fill(0);

	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
			if (board[row][col] === ".") continue;

			const num = board[row][col] - 1; // zero index

			if (hMasks[row] & (1 << num)) return false;
			hMasks[row] = hMasks[row] | (1 << num);

			if (vMasks[col] & (1 << num)) return false;
			vMasks[col] = vMasks[col] | (1 << num);

			const gIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3);
			if (gMasks[gIdx] & (1 << num)) return false;
			gMasks[gIdx] = gMasks[gIdx] | (1 << num);
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

console.log(isValidSudokuBitmasking(validBoard)); // expect true
console.log(isValidSudokuBitmasking(invalidBoard)); // expect false
console.log(isValidSudokuBitmasking(invalidBoard2)); // expect false
