export default function Popup() {

	const background = document.querySelector('#contentbox__popup');

	document.querySelector('#contentbox__openpopup').addEventListener('click', () => {
		background.style.display = "block";
	}) 
	
	document.querySelector('#contentbox__closepopup').addEventListener('click', () => {
		background.style.display = "none";
	}) 
	
	const arneWoof = document.querySelector('arne-woof');
	




}
