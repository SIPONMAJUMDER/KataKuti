
var turn = document.getElementById("heading");
var	boxes = document.querySelectorAll("#container div");
var coundown;	


function selectWinnerBoxes(a, b, c) {
	a.classList.add("winner");
	b.classList.add("winner");
	c.classList.add("winner");
	turn.innerHTML = a.innerHTML + " Won Congrat";
    var second=5;
    countdown = setInterval(function() {
        if (second <= 0) {
            Replay();
        }
        else{
            turn.innerHTML=`New Game Start In ${second} sec`
        }
        second--;
        
    }, 1000);
}

function getWinner() {
	var box1 = document.getElementById("box1"),
		box2 = document.getElementById("box2"),
		box3 = document.getElementById("box3"),
		box4 = document.getElementById("box4"),
		box5 = document.getElementById("box5"),
		box6 = document.getElementById("box6"),
		box7 = document.getElementById("box7"),
		box8 = document.getElementById("box8"),
		box9 = document.getElementById("box9");

	// winning Logic
	if (
		box1.innerHTML !== "" &&
		box1.innerHTML === box2.innerHTML &&
		box1.innerHTML === box3.innerHTML
	)
		selectWinnerBoxes(box1, box2, box3);

	else if (
		box4.innerHTML !== "" &&
		box4.innerHTML === box5.innerHTML &&
		box4.innerHTML === box6.innerHTML
	)
		selectWinnerBoxes(box4, box5, box6);

	else if (
		box7.innerHTML !== "" &&
		box7.innerHTML === box8.innerHTML &&
		box7.innerHTML === box9.innerHTML
	)
		selectWinnerBoxes(box7, box8, box9);

	else if (
		box1.innerHTML !== "" &&
		box1.innerHTML === box4.innerHTML &&
		box1.innerHTML === box7.innerHTML
	)
		selectWinnerBoxes(box1, box4, box7);

	else if (
		box2.innerHTML !== "" &&
		box2.innerHTML === box5.innerHTML &&
		box2.innerHTML === box8.innerHTML
	)
		selectWinnerBoxes(box2, box5, box8);

	else if (
		box3.innerHTML !== "" &&
		box3.innerHTML === box6.innerHTML &&
		box3.innerHTML === box9.innerHTML
	)
		selectWinnerBoxes(box3, box6, box9);

	else if (
		box1.innerHTML !== "" &&
		box1.innerHTML === box5.innerHTML &&
		box1.innerHTML === box9.innerHTML
	)
		selectWinnerBoxes(box1, box5, box9);

	else if (
		box3.innerHTML !== "" &&
		box3.innerHTML === box5.innerHTML &&
		box3.innerHTML === box7.innerHTML
	)
		selectWinnerBoxes(box3, box5, box7);
}

// set event onclick
var X_or_O = 1;
for (var i = 0; i < boxes.length; i++) {
	boxes[i].onclick = function () {
		// not allow to change the value of the box
		if (this.innerHTML === "" ) {
			if (X_or_O % 2 !== 0) {
				this.innerHTML = "X";
				turn.innerHTML = "O Turn Now";
				getWinner();
				X_or_O += 1;
			} else {
				this.innerHTML = "O";
				turn.innerHTML = "X Turn Now";
				getWinner();
				X_or_O += 1;
			}
		}
	};
}

function Replay() {
    clearInterval(countdown);
	for (var i = 0; i < boxes.length; i++) {
		boxes[i].classList.remove("winner");
		boxes[i].innerHTML = "";
		turn.innerHTML = "Play";
		turn.style.fontSize = "25px";
	}
}
