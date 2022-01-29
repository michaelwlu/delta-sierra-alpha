import { reflectHorizontally } from "../matrix-operators/reflect-horizontally.js";
import { reflectVertically } from "../matrix-operators/reflect-vertically.js";
import { transposeAntiDiagonal } from "../matrix-operators/transpose-anti-diagonal.js";
import { transposeMainDiagonal } from "../matrix-operators/transpose-main-diagonal.js";
import { chainOperators } from "../utils/chain-operators.js";

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
// using chainOperators utility function will deep copy the original object and allow you to list operators in order

const rotate90MethodOne = (matrix) =>
	chainOperators(matrix, [transposeAntiDiagonal, reflectHorizontally]);

const rotate90MethodTwo = (matrix) =>
	chainOperators(matrix, [transposeMainDiagonal, reflectVertically]);

const rotate180MethodOne = (matrix) =>
	chainOperators(matrix, [reflectHorizontally, reflectVertically]);

const rotate180MethodTwo = (matrix) =>
	chainOperators(matrix, [reflectVertically, reflectHorizontally]);

const rotate270MethodOne = (matrix) =>
	chainOperators(matrix, [reflectHorizontally, transposeAntiDiagonal]);

const rotate270MethodTwo = (matrix) =>
	chainOperators(matrix, [reflectVertically, transposeMainDiagonal]);

console.log(rotate90MethodOne(m1));
console.log(rotate90MethodTwo(m1));
console.log(rotate180MethodOne(m1));
console.log(rotate180MethodTwo(m1));
console.log(rotate270MethodOne(m1));
console.log(rotate270MethodTwo(m1));
