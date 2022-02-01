import { n3Matrix } from "../matrix-operators/matrices.js";
import { reflectHorizontally } from "../matrix-operators/reflect-horizontally.js";
import { reflectVertically } from "../matrix-operators/reflect-vertically.js";
import { transposeAntiDiagonal } from "../matrix-operators/transpose-anti-diagonal.js";
import { transposeMainDiagonal } from "../matrix-operators/transpose-main-diagonal.js";
import { chainOperators } from "../utils/chain-operators.js";

const rotate90MethodOne = (matrix) =>
	chainOperators(matrix, [transposeAntiDiagonal, reflectHorizontally]);

const rotate90MethodTwo = (matrix) =>
	chainOperators(matrix, [transposeMainDiagonal, reflectVertically]);

const rotate90MethodThree = (matrix) =>
	chainOperators(matrix, [reflectHorizontally, transposeMainDiagonal]);

const rotate90MethodFour = (matrix) =>
	chainOperators(matrix, [reflectVertically, transposeAntiDiagonal]);

console.log(rotate90MethodOne(n3Matrix));
console.log(rotate90MethodTwo(n3Matrix));
console.log(rotate90MethodThree(n3Matrix));
console.log(rotate90MethodFour(n3Matrix));
