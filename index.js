const form = document.querySelector("#form");
const Names = document.querySelector("#myArray");
const select = document.querySelector("#times");
const main = document.querySelector("#main");
const mainContainer = document.querySelector("#main-container");


let myArrays = Names.value;
let myArray = myArrays.split(",");
let totalNumber = myArray.length;
let numOfWinners = select.value
let winners = [];
let time = Date()
let watch = ""

// Random function
function getRandomIndex(array,numOfWinners){
	if(numOfWinners <= totalNumber){
		for(let i = 0; i < numOfWinners; i++){
			const winnerIndex = Math.floor(Math.random()*((array.length+1)-1)+1);
			winners.push(array[winnerIndex-1]);
			array=array.filter(item => item != array[winnerIndex -1]);

			

			
		}
			return winners
	};
	console.log( "Invalid number of winners")
	}	

// To ensures name display are on each paragraph
function pickData (){
	for (let i = 0; i < winners.length; i++){
		watch += winners[i] + "<br>"
	};
}

// Adding event listeners
function signupNotification(event) {
	event.preventDefault();
	getRandomIndex(myArray,numOfWinners);
	pickData();
	

	const win = watch;
	const nameCount = totalNumber;
	
	
	
	let paragraph = document.createElement("p");

	paragraph.classList.add("form-pop-up");
	paragraph.innerHTML = `<p> <strong> WINNERS </strong></p> <p> <span class = 'pop-up-name'>  ${win} </span> </p> <p>Total names: ${nameCount} <p> ${time} </p> </p> <p> thank you for been with us this far </p> `;
	mainContainer.style.display = "none";
	form.style.display = "none";
	form.submit();
	main.prepend(paragraph);
	
};





form.addEventListener("submit", signupNotification);