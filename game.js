const reSult1 = document.getElementById("result1");
const reSult2 = document.getElementById("result2");
const div_over = document.querySelectorAll(".div_over");
const imageRow = document.getElementById("image_row1");
const imageRow2 = document.getElementById("image_row2");
const imageRow3 = document.getElementById("image_row3");
const imageRow4 = document.getElementById("image_row4");
const imageRow5 = document.getElementById("image_row5");
const imageRow6 = document.getElementById("image_row6");
const imageRow7 = document.getElementById("image_row7");
const imageRow8 = document.getElementById("image_row8");
const imageRow9 = document.getElementById("image_row9");
const imageRow10 = document.getElementById("image_row10");
const imageRow11 = document.getElementById("image_row11");
const imageRow12 = document.getElementById("image_row12");
const imageRow13 = document.getElementById("image_row13");
const imageRow14 = document.getElementById("image_row14");
const imageRow15 = document.getElementById("image_row15");
const imageRow16 = document.getElementById("image_row16");
const imageRow17 = document.getElementById("image_row17");
const imageRow18 = document.getElementById("image_row18");
const imageRow19 = document.getElementById("image_row19");
const imageRow20 = document.getElementById("image_row20");
const imageRow21 = document.getElementById("image_row21");
const imageRow22 = document.getElementById("image_row22");
const imageRow23 = document.getElementById("image_row23");
const imageRow24 = document.getElementById("image_row24");
const imageRow25 = document.getElementById("image_row25");
const imageRow26 = document.getElementById("image_row26");
const errormessage = document.getElementById("errormessage");
const Congratulationcomment = document.getElementById("game_comment");
const play = document.getElementById("play");
const startGame = document.getElementById("startbtn");
const popup = document.querySelector(".popup");
const stopBtn = document.getElementById("stop");
const restart = document.getElementById("restart");
const pause = document.getElementById("pause");
const submitBTN = document.getElementById("submit");
const popup2 = document.querySelector(".popup2");
const saveScoreButton = document.querySelector("#saveScore");
const overIcon = document.getElementById("ddd-dd");
const overMessage = document.getElementById("s-s-d");
const InstructionBtn = document.getElementById("instruction");
const playAgain = document.getElementById("playAgain");

/**TIMER START  */
const timer = document.querySelector(".time");
const CountDownTimer = document.getElementById("countDown");

const startingMinutes = 1;
let time = startingMinutes * 60;

function updateCountdown() {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = seconds < 10 ? "0" + seconds : seconds;

	CountDownTimer.innerHTML = `${minutes}:${seconds}`;
	time--;

	if (time === 0) {
		time = startingMinutes * 60;
		timer.style.display = "none";
		popup2.style.display = "block";
		errormessage.innerHTML = "Sorry you Result Input was Empty";
		openCover.map((single) => {
			single.style.pointerEvents = "none";
		});
		openCover2.map((single2) => {
			single2.style.pointerEvents = "none";
		});
		submitBTN.style.pointerEvents = "none";
		pause.style.pointerEvents = "none";
		play.style.pointerEvents = "none";
		stopBtn.style.pointerEvents = "none";
	}
}

/* TIMER END */

// play again = set the popup2 back to display none, set errormessage back to display none, opencover, opencover2 will be set back to pointevent paint, submitbtn,pause,play,stopbtn will be set back to pointevent paint.

// quit game will set all to display none, will also display in the center a thank you for playing our game and have a button of back to game link.

/**STARTING OF SHUFFLING IMAGES */

const CardImage = [
	imageRow,
	imageRow2,
	imageRow3,
	imageRow4,
	imageRow5,
	imageRow6,
	imageRow7,
	imageRow8,
	imageRow9,
	imageRow10,
	imageRow11,
	imageRow12,
	imageRow13,
	imageRow14,
	imageRow15,
	imageRow16,
	imageRow17,
	imageRow18,
	imageRow19,
	imageRow20,
	imageRow21,
	imageRow22,
	imageRow23,
	imageRow24,
	imageRow25,
	imageRow26,
];
const gameBody = document.getElementById("game_body");
const indomieTables = gameBody.querySelectorAll(".indomie_table");
// Convert NodeList to array and shuffle
const indomieArray = Array.from(indomieTables);
for (let i = indomieArray.length - 1; i > 0; i--) {
	const randomIndomieImage = Math.floor(Math.random() * (i + 1));
	gameBody.appendChild(indomieArray[randomIndomieImage]);
}

/**END OF SHUFFLING IMAGES */

const openCover = [
	imageRow,
	imageRow2,
	imageRow3,
	imageRow4,
	imageRow5,
	imageRow6,
	imageRow7,
	imageRow8,
	imageRow9,
	imageRow10,
	imageRow11,
	imageRow12,
	imageRow13,
];

const openCover2 = [
	imageRow14,
	imageRow15,
	imageRow16,
	imageRow17,
	imageRow18,
	imageRow19,
	imageRow20,
	imageRow21,
	imageRow22,
	imageRow23,
	imageRow24,
	imageRow25,
	imageRow26,
];

window.onload = () => {
	InstructionBtn.style.display = "none";
	if (openCover || openCover2) {
		openCover.map((single) => {
			single.style.pointerEvents = "none";

			Congratulationcomment.innerText =
				" WELCOME!! PLEASE INITIATE THE PLAY BUTTON FOR INSTRUCTION";
			Congratulationcomment.style.color = "red";
			Congratulationcomment.style.fontSize = "30px";
			errormessage.innerText =
				"WELCOME!! Please Initiate The Play Button For Instruction";
		});

		openCover2.map((single2) => {
			single2.style.pointerEvents = "none";
			Congratulationcomment.innerText =
				"WELCOME!! PLEASE INITIATE THE PLAY BUTTON FOR INSTRUCTION";
			Congratulationcomment.style.color = "red";
			Congratulationcomment.style.fontSize = "30px";
			errormessage.innerText =
				"WELCOME!! Please Initiate The Play Button For Instruction";
		});

		setTimeout(() => {
			Congratulationcomment.style.display = "none";
			errormessage.style.display = "none";
		}, 9000);
	}
};

InstructionBtn.addEventListener("click", () => {
	// errormessage.style.display = "block";
	// errormessage.innerText = "Please Initiate the Play Button to get Started";
	// setTimeout(() => {
	// 	errormessage.style.display = "none";
	// }, 2000);
});

submitBTN.addEventListener("click", submitButton);

function submitButton() {
	Congratulationcomment.style.display = "block";
	Congratulationcomment.innerHTML =
		"Error!!! Refresh with the Restart Button, You Must Initiate the Play Button First";
	setTimeout(() => {
		Congratulationcomment.style.display = "none";
	}, 4000);
	play.style.pointerEvents = "none";

	setTimeout(() => {
		submitBTN.style.pointerEvents = "none";
	}, 3000);
}

function handleResultChange() {
	let resultDetails1 = reSult1.innerHTML;
	let resultDetails2 = reSult2.innerHTML;

	if (resultDetails1 === "" && resultDetails2 === "") {
		popup2.style.display = "block";
		overIcon.innerHTML = "&#128127;";
		overMessage.innerHTML = "Sorry Input can must not be Empty, Try Again!!";
		errormessage.innerText = "Sorry Input can must not be Empty";
		Congratulationcomment.innerText = "Sorry Input can must not be Empty";
		Congratulationcomment.style.color = "red";
		Congratulationcomment.style.fontSize = "30px";
	} else if (resultDetails1 === resultDetails2) {
		popup2.style.display = "block";
		overMessage.innerHTML = "CONGRATULATION!!! YOU WON";
		popup2.style.backgroundColor = "green";
		overMessage.style.color = "white";
		overIcon.innerHTML = "&#129305;";
		saveScoreButton.style.display = "block";
		Congratulationcomment.innerText = "CONGRATULATION!!! YOU WON";
		Congratulationcomment.style.color = "green";
		Congratulationcomment.style.fontSize = "30px";
		errormessage.innerText = "CONGRATULATION!!! YOU WON";
		errormessage.style.color = "green";
		errormessage.style.fontSize = "30px";
		clearInterval(updateCountdown());
	} else if (resultDetails1) {
		popup2.style.display = "block";
		overIcon.innerHTML = "&#128127;";
		overMessage.innerHTML = "Not Correct,  Please try again";
		Congratulationcomment.innerText = "Not Correct,  Please try again";
		errormessage.innerText = "Not Correct,  Please try again";
		Congratulationcomment.style.color = "red";
		Congratulationcomment.style.fontSize = "30px";
	} else if (resultDetails2) {
		popup2.style.display = "block";
		overIcon.innerHTML = "&#128127;";
		overMessage.innerHTML = "Please Select the next input";
		errormessage.innerText = "Please Select the next input";
		Congratulationcomment.innerText = "Please Select the next input ";
		Congratulationcomment.style.color = "red";
		Congratulationcomment.style.fontSize = "30px";
	} else {
		alert("NOTHING");
	}
}

restart.addEventListener("click", () => {
	location.reload();
});

playAgain.addEventListener("click", PlayAgainEvent);
function PlayAgainEvent() {
	location.reload();
}

play.addEventListener("click", handlePlay);
function handlePlay() {
	popup.style.display = "block";
	errormessage.style.display = "none";
	Congratulationcomment.style.display = "none";
	openCover.map((pic1) => {
		pic1.style.pointerEvents = "none";
	});
	openCover2.map((pic2) => {
		pic2.style.pointerEvents = "none";
	});
	submitBTN.style.pointerEvents = "none";
	// pause.style.pointerEvents = "none";
	play.style.pointerEvents = "none";
	// stopBtn.style.pointerEvents = "none";

	InstructionBtn.addEventListener("click", () => {
		popup.style.display = "block";
		startGame.innerText = "Continue";
		startGame.addEventListener("click", () => {
			popup.style.display = "none";
			// timer.style.display = "none";
		});
	});

	submitBTN.addEventListener("click", submitButton);

	function submitButton() {
		timer.style.display = "none";
		Congratulationcomment.style.display = "block";
		errormessage.style.display = "block";
		handleResultChange();
		InstructionBtn.style.display = "none";
	}
}

startGame.addEventListener("click", GameStartNow);
function GameStartNow() {
	InstructionBtn.style.display = "block";
	popup.style.display = "none";
	timer.style.display = "block";
	openCover.map((pic1) => {
		pic1.style.pointerEvents = "painted";
	});
	openCover2.map((pic2) => {
		pic2.style.pointerEvents = "painted";
	});

	submitBTN.style.pointerEvents = "painted";
	play.style.pointerEvents = "none";

	setInterval(() => {
		updateCountdown();
	}, 1000);
}

function disableButton() {
	if (reSult1.children.length === 1) {
		imageRow.style.pointerEvents = "none";
		imageRow2.style.pointerEvents = "none";
		imageRow3.style.pointerEvents = "none";
		imageRow4.style.pointerEvents = "none";
		imageRow5.style.pointerEvents = "none";
		imageRow6.style.pointerEvents = "none";
		imageRow7.style.pointerEvents = "none";
		imageRow8.style.pointerEvents = "none";
		imageRow9.style.pointerEvents = "none";
		imageRow10.style.pointerEvents = "none";
		imageRow11.style.pointerEvents = "none";
		imageRow12.style.pointerEvents = "none";
		imageRow13.style.pointerEvents = "none";
	}
}

function disableButton2() {
	if (reSult2.children.length === 1) {
		imageRow14.style.pointerEvents = "none";
		imageRow15.style.pointerEvents = "none";
		imageRow16.style.pointerEvents = "none";
		imageRow17.style.pointerEvents = "none";
		imageRow18.style.pointerEvents = "none";
		imageRow19.style.pointerEvents = "none";
		imageRow20.style.pointerEvents = "none";
		imageRow21.style.pointerEvents = "none";
		imageRow22.style.pointerEvents = "none";
		imageRow23.style.pointerEvents = "none";
		imageRow24.style.pointerEvents = "none";
		imageRow25.style.pointerEvents = "none";
		imageRow26.style.pointerEvents = "none";
	}
}

imageRow.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/1.jpeg");
		reSult1.appendChild(img);
		imageRow.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow.style.display = "none";
		disableButton();

		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow2.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/2.jpeg");
		reSult1.appendChild(img);
		imageRow2.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow2.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow3.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/3.jpeg");
		reSult1.appendChild(img);
		imageRow3.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow3.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow4.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/4.jpeg");
		reSult1.appendChild(img);
		imageRow4.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow4.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow5.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/5.jpeg");
		reSult1.appendChild(img);
		imageRow5.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow5.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow6.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/6.jpeg");
		reSult1.appendChild(img);
		imageRow6.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow6.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow7.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/7.jpeg");
		reSult1.appendChild(img);
		imageRow7.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow7.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow8.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/8.jpeg");
		reSult1.appendChild(img);
		imageRow8.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow8.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow9.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/9.jpeg");
		reSult1.appendChild(img);
		imageRow9.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow9.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow10.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/10.jpeg");
		reSult1.appendChild(img);
		imageRow10.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow10.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});
imageRow11.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/11.jpeg");
		reSult1.appendChild(img);
		imageRow11.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow11.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow12.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/12.jpeg");
		reSult1.appendChild(img);
		imageRow12.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow12.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow13.addEventListener("click", () => {
	if (reSult1.children.length === 0) {
		const img = document.createElement("img");
		img.id = "image_row";
		img.setAttribute("src", "images/13.jpeg");
		reSult1.appendChild(img);
		imageRow13.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow13.style.display = "none";
		disableButton();
		openCover.map((item) => {
			item.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

/**
 * the second result div
 */

imageRow14.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/1.jpeg");
		reSult2.appendChild(img2);
		imageRow14.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow14.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow15.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/2.jpeg");
		reSult2.appendChild(img2);
		imageRow15.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow15.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow16.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/3.jpeg");
		reSult2.appendChild(img2);
		imageRow16.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow16.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow17.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/4.jpeg");
		reSult2.appendChild(img2);
		imageRow17.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow17.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow18.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/5.jpeg");
		reSult2.appendChild(img2);
		imageRow18.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow18.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow19.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/6.jpeg");
		reSult2.appendChild(img2);
		imageRow19.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow19.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow20.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/7.jpeg");
		reSult2.appendChild(img2);
		imageRow20.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow20.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow21.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/8.jpeg");
		reSult2.appendChild(img2);
		imageRow21.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow21.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow22.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/9.jpeg");
		reSult2.appendChild(img2);
		imageRow22.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow22.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow23.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/10.jpeg");
		reSult2.appendChild(img2);
		imageRow23.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow23.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow24.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/11.jpeg");
		reSult2.appendChild(img2);
		imageRow24.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow24.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow25.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/12.jpeg");
		reSult2.appendChild(img2);
		imageRow25.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow25.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});

imageRow26.addEventListener("click", () => {
	if (reSult2.children.length === 0) {
		const img2 = document.createElement("img");
		img2.id = "image_row";
		img2.setAttribute("src", "images/13.jpeg");
		reSult2.appendChild(img2);
		imageRow26.style.pointerEvents = "none";
		// div_over.style.  = "0";
		imageRow26.style.display = "none";
		disableButton2();
		openCover2.map((item2) => {
			item2.style.opacity = "0";
		});
	} else {
		alert("SORRY YOU CAN'T PICK CATEGORIES, AS IT AS BEEN LOCKED");
	}
});
