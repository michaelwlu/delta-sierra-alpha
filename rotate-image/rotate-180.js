import { n3Matrix } from "../matrix-operators/matrices.js";
import { reflectHorizontally } from "../matrix-operators/reflect-horizontally.js";
import { reflectVertically } from "../matrix-operators/reflect-vertically.js";
import { transposeAntiDiagonal } from "../matrix-operators/transpose-anti-diagonal.js";
import { transposeMainDiagonal } from "../matrix-operators/transpose-main-diagonal.js";
import { chainOperators } from "../utils/chain-operators.js";

const rotate180MethodOne = (matrix) =>
	chainOperators(matrix, [reflectHorizontally, reflectVertically]);

const rotate180MethodTwo = (matrix) =>
	chainOperators(matrix, [reflectVertically, reflectHorizontally]);

const rotate180MethodThree = (matrix) =>
	chainOperators(matrix, [transposeAntiDiagonal, transposeMainDiagonal]);

const rotate180MethodFour = (matrix) =>
	chainOperators(matrix, [transposeMainDiagonal, transposeAntiDiagonal]);

console.log(rotate180MethodOne(n3Matrix));
console.log(rotate180MethodTwo(n3Matrix));
console.log(rotate180MethodThree(n3Matrix));
console.log(rotate180MethodFour(n3Matrix));
