export default function Popup() {

	const overLay = document.querySelector('#contentbox__popup');

	document.querySelector('#contentbox__openpopup').addEventListener('click', () => {
		overLay.style.display = "block";
	}) 
	
	document.querySelector('#contentbox__closepopup').addEventListener('click', () => {
		overLay.style.display = "none";
	}) 
	





}
