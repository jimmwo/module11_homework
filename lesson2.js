function isPrime(number) {
	if (number > 1000) {
		console.log('Данные неверны');

		return;
	}

	for(let i = 2; i < number; i++) {
		if(number % i === 0) {
			console.log('Число не простое');

			return;
		}
	}

	console.log('Число простое');
	return;
}

isPrime(3);
