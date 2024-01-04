

function button1() {
	// blue in red
	"use strict";

	document.getElementById("green").className = "greenHidden";
	document.getElementById("red").className = "redBox";
	document.getElementById("blueIn").className = "blueIn";
}

function button2() {
	// blue under red
	"use strict";

	document.getElementById("green").className = "greenHidden";
	document.getElementById("blueIn").className = "hidden";
	document.getElementById("red").className = "redBox";
	document.getElementById("blueBottom").className = "blueBottom";
}

function button3() {
	// blue to right
	"use strict";

	document.getElementById("green").className = "greenFlexRow";
	document.getElementById("red").className = "redBox";
	document.getElementById("blueBottom").className = "blueBottom";
}
function button4() {
	// red to right
	"use strict";

	document.getElementById("green").className = "greenFlexReverse";
	document.getElementById("red").className = "redBox";
	document.getElementById("blueBottom").className = "blueBottom";
}
function button5() {
	"use strict";
	// blue inside right
	document.getElementById("blueIn").className = "blueInBoxRight";
	document.getElementById("green").className = "greenHidden";
	document.getElementById("red").className = "redFlipBlue";

	document.getElementById("blueBottom").className = "hidden";
}

function button6() {
	"use strict";
	// green over red and blue
	document.getElementById("green").className = "bg-green";
	document.getElementById("blueIn").className = "blueIn";
	document.getElementById("red").className = "redBox";
	document.getElementById("blueBottom").className = "hidden";
}



function init() {
	"use strict";
	document.getElementById("btn1").addEventListener("click", button1);
	document.getElementById("btn2").addEventListener("click", button2);
	document.getElementById("btn3").addEventListener("click", button3);
	document.getElementById("btn4").addEventListener("click", button4);
	document.getElementById("btn5").addEventListener("click", button5);
	document.getElementById("btn6").addEventListener("click", button6);
}


window.onload = function () {
	init();
};