function getSumFunc(number) {
	return function (internalNumber) {
		return number + internalNumber;
	}
}

const sum = getSumFunc(3);

console.log(sum(10));
