/**
 * 1 human year =
 * 19 cat years
 * 18 dog years
 *	16 budgie years
 * 4 parrot years
 * 20 bunny years
 */

 const humanYearsInput = document.querySelector('#human');
//  const dogAge = document.querySelector('.converter__output-dog');
//  const catAge = document.querySelector('.converter__output-cat');
//  const budgieAge = document.querySelector('.converter__output-budgie');
//  const parrotAge = document.querySelector('.converter__output-parrot');
//  const bunnyAge = document.querySelector('.converter__output-cat');

//  function humanToPetAge(val) {
//  	dogAge.value = (val*7);
//  	catAge.value = (val*8);
//  	budgieAge.value = (val*7);
//  	parrotAge.value = (val*4);
//  	bunnyAge.value = (val*10);
//  }

 humanYearsInput.addEventListener('oninput', () => {
	document.querySelector('converter__output-dog').innerHTML = humanYearsInput * 7;
	document.querySelector('converter__output-cat').innerHTML = humanYearsInput * 7;
	document.querySelector('converter__output-budgie').innerHTML = humanYearsInput * 7;
	document.querySelector('converter__output-parrot').innerHTML = humanYearsInput * 7;
	document.querySelector('converter__output-bunny').innerHTML = humanYearsInput * 7;

 });










