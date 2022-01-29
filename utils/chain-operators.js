export const chainOperators = (original, operatorArr) => {
	const copyOriginal = JSON.parse(JSON.stringify(original));

	let result = copyOriginal;

	operatorArr.forEach((operator) => {
		result = operator(result);
	});

	return result;
};
