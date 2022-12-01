export default function Popup() {

	const background = document.querySelector('#contentbox__popup');

	document.querySelector('#contentbox__openpopup').addEventListener('click', () => {
		background.style.display = "block";
	}) 
	
	document.querySelector('#contentbox__closepopup').addEventListener('click', () => {
		background.style.display = "none";
	}) 
	
	/* Animal sounds */ 

	// This one works, but turns all buttons into sound buttons:
	 const audio = new Audio('./assets/sounds/dog_barking-6296.mp3');
	 const buttons = document.querySelectorAll('button');

	  buttons.forEach(button => {
	  	button.addEventListener('click', () => {
	  		audio.play();
	  	});
	  });
	

	// This one does not work (yet)
 	//const audio = new Audio('./assets/sounds/dog_barking-6296.mp3');

  	//document.querySelector('arnewoof').addEventListener('click', () => {
  	//	audio.play();
  	//})







}
