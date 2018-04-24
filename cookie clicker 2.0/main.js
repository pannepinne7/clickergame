var counter = 0;
var autoclick = 0;
var cookieFarm = 0;
var multiplier = 1;
var textbox = document.getElementById("text");
var pepe = document.getElementById("cookie");
var myButton = document.getElementById("my-button");
var saveButton = document.getElementById("save");
var loadButton = document.getElementById("load");
var amountAutoClick = document.getElementById("amountAutoClick");
var costAutoClick = document.getElementById("costAutoClick");
var myButton2 = document.getElementById("my-button2");
var costCookieFarm = document.getElementById("costCookieFarm");
var amountCookieFarm = document.getElementById("amountCookieFarm");
var cookiesPerSecond = document.getElementById("cookiesPerSecond");

pepe.addEventListener("click", add);
myButton.addEventListener("click", buyAutoClick);
saveButton.addEventListener("click", save);
loadButton.addEventListener("click", load); 
myButton2.addEventListener("click", buyCookieFarm);

setInterval(timer, 1000);

function add() {
	counter = counter + 1;
	update()
}

function buyAutoClick() {
	if(counter >= ((autoclick + 1) * 12)) {
		counter = counter - ((autoclick + 1) * 12);
		autoclick = autoclick + 1;
		update()
	}
}

function timer() {
	counter = counter + autoclick;
	counter = counter + cookieFarm*2;
	update()
}

function update() {
	textbox.value = counter;
	document.title = counter + " cookies";
	textbox.value = counter;
	document.title = counter + " cookies";
	amountAutoClick.innerHTML = "you have " + autoclick + " autoclickers";
	costAutoClick.innerHTML = ((autoclick + 1) * 12) + " cookies";
	amountCookieFarm.innerHTML = "you have " + cookieFarm + " cookiefarms";
	costCookieFarm.innerHTML = ((cookieFarm + 1) * 30) + " cookies";
	cookiesPerSecond.innerHTML = (((autoclick)+(cookieFarm*2))*multiplier) + " Cookies per/s";
}

function save() {
	localStorage.setItem("counter", counter);
	localStorage.setItem("autoclick", autoclick);
	localStorage.setItem("cookieFarm", cookieFarm);
}

function load() {
	counter = localStorage.getItem("counter");
	counter = parseInt(counter);
	autoclick = localStorage.getItem("autoclick");
	autoclick = parseInt(autoclick);
	cookieFarm = localStorage.getItem("cookieFarm");
	cookieFarm = parseInt(cookieFarm);
	update()
}

function buyCookieFarm() {
	if (counter >= ((cookieFarm + 1) * 30)) {
		counter = counter - ((cookieFarm + 1) * 30);
		cookieFarm = cookieFarm + 1;
        update()
		
	}
	
}







