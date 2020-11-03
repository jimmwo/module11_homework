const ODD = 'odd';
const EVEN = 'even';
const ZERO = 'zero';

function countOddAndEvenElements(array) {
	let result = {[ZERO]: 0, [EVEN]: 0, [ODD]: 0};

	result = array.reduce((acc, item) => {
		if (item === 0) {
			acc[ZERO] += 1;
		} else if(typeof item === "number" && isFinite(item) && !isNaN(item)) {
			let prop = item % 2 === 0 ? EVEN : ODD;
			acc[prop] += 1;
		}

		return acc;
	}, result);

	console.log(result);

	return result;
}

countOddAndEvenElements([0, 1,2,3,'s', 0, 0, 6, null, Infinity, '15', true, false, NaN]);
