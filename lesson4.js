function printNumberFromRange(startNumber, endNumber) {
		const intervalId = setInterval(function () {
			if (startNumber > endNumber ) {
				clearInterval(intervalId);
			} else {
				console.log(startNumber);
				startNumber++;
			}
		}, 1000);
}

printNumberFromRange(10, 15);

