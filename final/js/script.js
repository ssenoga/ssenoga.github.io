// class in javascrip
class EasyLoginClass {
	get(url){
		this.http.open('GET',url,tue);

		this.http.onload = function(){
			if(this.http.status === 200){
				console.log(this.http.responseText);
			}
		}
		this.http.send();
	}
}

// const EasyLogin = function(){
//   this.http = new XMLHttpRequest();
// }

// EasyLogin.prototype.get = function(url,cb){
//   this.http.open("GET",url,true);

//   this.http.onload = function(){
//     if(this.status === 200){
//      cb(JSON.parse(this.responseText));
//     }
//   }

//   this.http.send();
// }

// // post
// EasyLogin.prototype.post = function(url,data){
//   this.http.open("POST",url)
// }