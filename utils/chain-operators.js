export const chainOperators = (original, operatorArr) => {
	const deepCopy = JSON.parse(JSON.stringify(original));

	let result = deepCopy;

	operatorArr.forEach((operator) => {
		result = operator(result);
	});

	return result;
};
