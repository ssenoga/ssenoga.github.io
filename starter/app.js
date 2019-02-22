const parent = document.querySelector('#parent');
const clock = document.querySelector('#clock');
const mill = document.querySelector('#mill');
const textTranfer = document.querySelector('#cote');

// adding event Handlers
document.querySelector('#fname').addEventListener('blur',checkFname);
document.querySelector('#lname').addEventListener('blur',checkLname);
document.querySelector('#email').addEventListener('blur',checkEmail);
document.querySelector('#pass').addEventListener('blur',checkPass);
document.querySelector('#repass').addEventListener('blur',checkRepass);

setInterval(() =>{
	const time = new Date().toLocaleTimeString();
	clock.innerText = time;
	clock.style.display = 'none';
},1000);


setInterval(() => {
	clock.style.display = 'block';
	const r = Math.floor(Math.random()* 200);
	const g = Math.floor(Math.random(10)* 220);
	const b = Math.floor(Math.random()* 250);
	parent.style.background = `rgb(${r},${g},${b})`;
},2000);


setInterval(() =>{
	const x = 10;
	textTranfer.style.display = "none";
	
},5000);
function cb(){
	setInterval(() =>{
	textTranfer.style.display = "block";

	},5500);
}
cb();

// making event handler for first name;
function checkFname() {
	console.log("we are in");
}


