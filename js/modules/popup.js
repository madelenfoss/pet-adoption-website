export default function Popup() {
	
	// Arne dog popup card
	const backgroundArne = document.querySelector('#contentbox__popup-1');

	document.querySelector('#contentbox__openpopup-1').addEventListener('click', () => {
		backgroundArne.style.display = "block";
	}) 
	
	document.querySelector('#contentbox__closepopup-1').addEventListener('click', () => {
		backgroundArne.style.display = "none";
	}) 

	// Berta dog popup card
	const backgroundBerta = document.querySelector('#contentbox__popup-2');

	document.querySelector('#contentbox__openpopup-2').addEventListener('click', () => {
		backgroundBerta.style.display = "block";
	}) 
	
	document.querySelector('#contentbox__closepopup-2').addEventListener('click', () => {
		backgroundBerta.style.display = "none";
	}) 

	


	
	/* Animal sounds - See Arne the dog for example */ 

	// This one works, but turns all buttons into sound buttons:

	//  const audio = new Audio('./assets/sounds/dog_barking-6296.mp3');
	//  const buttons = document.querySelectorAll('button');

	//   buttons.forEach(button => {
	//   	button.addEventListener('click', () => {
	//   		audio.play();
	//   	});
	//   });
	

	/* Dog sounds */
 	const arneAudio = new Audio('./assets/sounds/dog_barking-6296.mp3');

	if (arneAudio) {
  		document.querySelector('.arnewoof').addEventListener('click', () => {
  			arneAudio.play();
  	});
 }


 	const bertaAudio = new Audio('./assets/sounds/tubby-bark-1-48313.mp3');

	if (bertaAudio) {
		document.querySelector('.bertawoof').addEventListener('click', () => {
			bertaAudio.play();
	})
}

 	/* Cat sounds */
	const katlaAudio = new Audio('./assets/sounds/cat-meow-14536.mp3');

	if (katlaAudio) {
		document.querySelector('.katlameow').addEventListener('click', () => {
			katlaAudio.play();
		})
	}



}
