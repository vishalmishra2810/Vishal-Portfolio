
var numsq =25;
var colors=[];
var pick;

var squares = document.querySelectorAll("td");
var display1 =document.querySelector("h1");
var decision =document.querySelector("span");
var box= document.querySelector(".heading");
var reset= document.querySelector("#reset");
var modebutton= document.querySelectorAll(".mode");
// var button= document.querySelector("button")

init();

function init(){
	setupModebutton();
	setupsq();
	resetb();

}

function setupModebutton(){
	for(var i=0; i<modebutton.length; i++){
		modebutton[i].addEventListener("click",function(){
			modebutton[0].classList.remove("selected");
			modebutton[1].classList.remove("selected");
			modebutton[2].classList.remove("selected");
			modebutton[3].classList.remove("selected");
			this.classList.add("selected");
			// this.textContent==="EASY" ?numsq=4: numsq=8;
			if( this.textContent==="EASY"){
				numsq=5;
				resetb();
			}
			else if(this.textContent==="MEDIUM"){
				numsq=10;
				resetb();
			}
			else if(this.textContent==="DIFFICULT"){
				numsq=15;
				resetb();
			}
			else {
				numsq=25;
				resetb();
			}
			// figure out hoe many squares to show
			// pick new colors
			// pick a new pickedcolor
			// update page to reflect changes
		});
	}

}


function setupsq(){
	for (var i =0; i<squares.length; i++){
		// squares[i].style.backgroundColor= colors[i];

		squares[i].addEventListener("click", function(){
			var clicked = this.style.backgroundColor;
			
			if (clicked === pick){
				decision.textContent = "Solved";
				chngecolor(clicked);
				box.style.backgroundColor=pick;
				reset.textContent= "PLAY AGAIN?";
			}
			else{
				
				this.style.backgroundColor= "#232323";
				decision.textContent="Try again";
			}


		});

	}
}


function chngecolor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
}
	
function pickcolor(){
	var random= Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generaterandm(num){
	var arr=[];
	for (var i=0; i<num; i++){
		arr.push(randC());
	}
	return arr;
}
function randC(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+ red +", " +green+ ", "+ blue+ ")"

}


reset.addEventListener("click", function(){
	resetb();

});



function resetb(){
	colors= generaterandm(numsq);
	pick= pickcolor();
	display1.textContent=pick;
	decision.textContent= "";
	for (var i =0; i<squares.length; i++){
		if (colors[i]){
			squares[i].style.display="inline-block";
			squares[i].style.backgroundColor= colors[i];
		}
		else{
			squares[i].style.display= "none";
		}
	
	}
	reset.textContent= "NEW COLORS";
	box.style.backgroundColor="#ed3868"

}



// easy.addEventListener("click",function(){
// 	easy.classList.add("selected");
// 	hard.classList.remove("selected");
// 	numsq =4
// 	colors= generaterandm(numsq);
// 	pick= pickcolor();
// 	display1.textContent=pick;
// 	for (var i =0; i<squares.length; i++){
// 		if (colors[i]){
// 			squares[i].style.backgroundColor= colors[i];
// 		}
// 		else{
// 			squares[i].style.display= "none";
// 		}
// 	squares[i].style.backgroundColor= colors[i];
// 	reset.textContent= "NEW COLORS";
// 	decision.textContent=" "
// 	}
// });
// hard.addEventListener("click",function(){
// 	hard.classList.add("selected");
// 	easy.classList.remove("selected");
// 	numsq= 8;
// 	colors= generaterandm(numsq);
// 	pick= pickcolor();
// 	display1.textContent=pick;
// 	for (var i =0; i<squares.length; i++){
// 		squares[i].style.backgroundColor= colors[i];
// 		squares[i].style.display= "block";

// 	}

// });













