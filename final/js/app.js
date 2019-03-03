
// adding event Handlers
document.querySelector('#fname').addEventListener('blur', checkFname);
document.querySelector('#lname').addEventListener('blur', checkLname);
document.querySelector('#email').addEventListener('blur', checkEmail);
document.querySelector('#pass').addEventListener('blur', checkPass);
document.querySelector('#repass').addEventListener('input', checkRepass);
const password = document.getElementById('pass');

// making event handler for first name;
function checkFname(e) {
	const name = document.getElementById('fname');
	if(name.value == ""){
		name.classList += ' is-invalid';
	} else {
		name.classList.remove('is-invalid');
	}
	e.preventDefault();
}

function checkLname(e) {
	const lname = document.getElementById('lname');
	if(lname.value == ""){
		lname.classList += ' is-invalid';
	} else {
		lname.classList.remove('is-invalid');
	}
	e.preventDefault();
}

function checkEmail(e) {
	const email = document.getElementById('email');
	if(email.value == ""){
		email.classList += ' is-invalid';
	} else {
		email.classList.remove('is-invalid');
	}
	e.preventDefault();
}
function checkPass(e) {
	const pass = document.getElementById('pass');
	if(pass.value == ""){
		pass.classList += ' is-invalid';
	} else {
		pass.classList.remove('is-invalid');
	}
	e.preventDefault();
}

function checkRepass(e) {
	const repass = document.getElementById('repass');
	if(repass.value !== password.value){
		repass.classList += ' is-invalid';
	} else {
		repass.classList.remove('is-invalid');
	}
	e.preventDefault();
}

// user loging in
document.querySelector('#userLogin').addEventListener('click',validate);

function validate(e){
	const userData = document.getElementById('loginusername').value;
	const http = new EasyLogin();
	http.get('app.json',function(data){
		data.forEach(function(user){
			const err = true;
			if(user.name === userData){
				console.log(user.name);
				
			} else{
				const container = document.querySelector('.col-md-5');
				const form = document.querySelector('#eddy');
				const sms = document.createElement('h4');
				document.querySelector('#loginusername').classList += ' is-invalid';
				document.querySelector('#loginpassword').classList += ' is-invalid';
				sms.textContent = "Invalid details";
				// sms.classList = 'is-invalid';
				container.insertBefore(sms,form);
			}
			
		});
		// console.log(userData);
	});
	
	
	e.preventDefault();
}

