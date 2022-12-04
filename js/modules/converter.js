export default function AgeConverter() {
	/**
	 * 1 human year =
	 * 19 cat years
	 * 18 dog years
	 *	16 budgie years
	* 4 parrot years
	* 20 bunny years
	*/

	/*
	const humanYearsInput = document.getElementById('human');
	const dogAge = document.querySelector('converter__output-dog');
	const catAge = document.querySelector('converter__output-cat');
	const budgieAge = document.querySelector('converter__output-budgie');
	const parrotAge = document.querySelector('converter__output-parrot');
	const bunnyAge = document.querySelector('converter__output-cat');
	
	function humanToPetAge(val) {
		dogAge.value.innerHTML = val*7;
		catAge.value.innerHTML = val*8;
		budgieAge.value.innerHTML = val*7;
		parrotAge.value.innerHTML = val*4;
		bunnyAge.value.innerHTML = val*10;
	}

	humanToPetAge();
	*/



	const humanYearsInput = document.querySelector('#human');
	// const dogAge = document.querySelector('.converter__output-dog');
	// const catAge = document.querySelector('.converter__output-cat');
	// const budgieAge = document.querySelector('.converter__output-budgie');
	// const parrotAge = document.querySelector('.converter__output-parrot');
	// const bunnyAge = document.querySelector('.converter__output-cat');


	/* check if element exists before attempting to add an event listener */
	if (humanYearsInput) {
		humanYearsInput.addEventListener('input', () => {
			document.querySelector('.converter__output-dog').innerHTML = humanYearsInput.value * 7;
			document.querySelector('.converter__output-cat').innerHTML = humanYearsInput.value * 8;
			document.querySelector('.converter__output-budgie').innerHTML = humanYearsInput.value * 16;
			document.querySelector('.converter__output-parrot').innerHTML = humanYearsInput.value * 4;
			document.querySelector('.converter__output-bunny').innerHTML = humanYearsInput.value * 10;
		});
	}

	console.log('HALLOOOOOO');
}