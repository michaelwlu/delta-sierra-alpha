import { n3Matrix } from "../matrix-operators/matrices.js";
import { reflectHorizontally } from "../matrix-operators/reflect-horizontally.js";
import { reflectVertically } from "../matrix-operators/reflect-vertically.js";
import { transposeAntiDiagonal } from "../matrix-operators/transpose-anti-diagonal.js";
import { transposeMainDiagonal } from "../matrix-operators/transpose-main-diagonal.js";
import { chainOperators } from "../utils/chain-operators.js";

const rotate270MethodOne = (matrix) =>
	chainOperators(matrix, [reflectHorizontally, transposeAntiDiagonal]);

const rotate270MethodTwo = (matrix) =>
	chainOperators(matrix, [reflectVertically, transposeMainDiagonal]);

const rotate270MethodThree = (matrix) =>
	chainOperators(matrix, [transposeMainDiagonal, reflectHorizontally]);

const rotate270MethodFour = (matrix) =>
	chainOperators(matrix, [transposeAntiDiagonal, reflectVertically]);

console.log(rotate270MethodOne(n3Matrix));
console.log(rotate270MethodTwo(n3Matrix));
console.log(rotate270MethodThree(n3Matrix));
console.log(rotate270MethodFour(n3Matrix));
