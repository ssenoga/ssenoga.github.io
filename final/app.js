// class Http {
// 	http = new XMLHttpRequest();

// 	get(url,cb){
// 		http.get("GET",url,true);
// 		http.onload = cb();

// 		http.send();
// 	}
// }



// adding event Handlers
document.querySelector('#fname').addEventListener('blur',checkFname);
document.querySelector('#lname').addEventListener('blur',checkLname);
document.querySelector('#email').addEventListener('blur',checkEmail);
document.querySelector('#pass').addEventListener('blur',checkPass);
document.querySelector('#repass').addEventListener('blur',checkRepass);

// making event handler for first name;
function checkFname() {
	console.log("we are in");
}