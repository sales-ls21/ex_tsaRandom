// function getRandom() {
//   var randomNum = Math.random() * 6;
//   var finalRandom = Math.floor(randomNum);
//   return finalRandom

//   if (finalRandom > 3) {
//   		output.innerHTML = "<img src="tsa-arrow.gif">";
//   }
// }

window.addEventListener("click", getRandom)

function getRandom() {
	// console.log("image goes here");
	var output = document.getElementById("goArrow");
	output.innerHTML = "<img src='tsa-arrow.gif'>";
}
