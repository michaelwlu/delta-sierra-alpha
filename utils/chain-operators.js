export const chainOperators = (original, operatorArr) => {
	// deep copy object
	let result = JSON.parse(JSON.stringify(original));

	// apply operator functions in order
	operatorArr.forEach((operator) => {
		result = operator(result);
	});

	return result;
};
