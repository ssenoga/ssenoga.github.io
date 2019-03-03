// class EasyLogin {
//   get(url){
//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);
//   }
// }

const EasyLogin = function(){
  this.http = new XMLHttpRequest();
}
// get
EasyLogin.prototype.get = function(url){
  this.http.open('GET',url,true);
  const self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      console.log(self.http.textResponse);
    }
  }

  this.http.send();
}