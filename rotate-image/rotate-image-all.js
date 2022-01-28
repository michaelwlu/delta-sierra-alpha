import { reflectHorizontally } from "../matrix-operators/reflect-horizontally.js";
import { reflectVertically } from "../matrix-operators/reflect-vertically.js";
import { transposeAntiDiagonal } from "../matrix-operators/transpose-anti-diagonal.js";
import { transposeMainDiagonal } from "../matrix-operators/transpose-main-diagonal.js";

const m1 = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

const m2 = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

// WATCH OUT FOR MUTATING ARRAYS IN PLACE

const rotate90method1 = (matrix) => {
	let step1 = transposeAntiDiagonal(matrix);
	let step2 = reflectHorizontally(step1);
	return step2;
};

const rotate90method2 = (matrix) => {
	let step1 = transposeMainDiagonal(matrix);
	let step2 = reflectVertically(step1);
	return step2;
};

const rotate180method1 = (matrix) => {
	let step1 = reflectHorizontally(matrix);
	let step2 = reflectVertically(step1);
	return step2;
};

const rotate180method2 = (matrix) => {
	let step1 = reflectVertically(matrix);
	let step2 = reflectHorizontally(step1);
	return step2;
};

const rotate270method1 = (matrix) => {
	let step1 = reflectHorizontally(matrix);
	let step2 = transposeAntiDiagonal(step1);
	return step2;
};

const rotate270method2 = (matrix) => {
	let step1 = reflectVertically(matrix);
	let step2 = transposeMainDiagonal(step1);
	return step2;
};

// console.log(rotate90method1(m1));
// console.log(rotate90method2(m1));
// console.log(rotate180method1(m1));
// console.log(rotate180method2(m1));
// console.log(rotate270method1(m1));
// console.log(rotate270method2(m1));
