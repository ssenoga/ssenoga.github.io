var x,myArray,gender,welcome,lead,c1,c2,c3,c4,c5,c6,button;
 
myArray = [{
    Name: "ssenoga edward",
    Age: 21,
    Address: "Nsangi",
    Occupation: "Student",
    Gender: "Male"
},{
    Name: "Nabukalu Reachel",
    Age: 21,
    Address: "Kibuye",
    Occupation: "Student",
    Gender: "Female"
},{
    Name: "Nattabi Florence",
    Age: 35,
    Address: "Nsangi",
    Occupation: "Enterprenuer",
    Gender: "Female"
},{
    Name: "Kiyimba ronald",
    Age: 16,
    Address: "Nsangi",
    Occupation: "Student",
    Gender: "Male"
},{
    Name: "Bukirya Haira",
    Age: 8,
    Address: "Nsangi",
    Occupation: "Student",
    Gender: "Female"
},{
    Name: "Nakitende Jazirah",
    Age: 14,
    Address: "Nsangi",
    Occupation: "Student",
    Gender: "Female"
}];
button = document.getElementById('btn-1');
button.addEventListener("click",function(){
  var tym = new Date().toLocaleDateString();
  tym += " "+new Date().toLocaleTimeString();
  console.log(tym);
  alert(tym);
});
c1= Math.floor(Math.random() * 9) + 1;
c2= Math.floor(Math.random() * 9) + 1;
c3= Math.floor(Math.random() * 9) + 1;
c4= Math.floor(Math.random() * 9) + 1;
c5= Math.floor(Math.random() * 9) + 1;
c6= Math.floor(Math.random() * 9) + 1;
x = Math.floor(Math.random() * myArray.length);
console.log(x);
gender = myArray[x].Gender == 'Male'? "he" : "she";
welcome = document.querySelector('#sec-h2');
welcome.textContent += " "+myArray[x].Name;

lead = document.querySelector('.lead');
lead.innerHTML = `Age: ${myArray[x].Age} <br>Address: ${myArray[x].Address}<br> Occupation: ${myArray[x].Occupation}<br>Gender: ${myArray[x].Gender} `;
lead.style.background='#'+c1+c2+c3+c4+c5+c6;
if(x == 0){
   members(x);
} else if(x == 1){
    members(x);
} else if(x == 2){
    members(x);
} else if(x == 3){
    members(x);
} else if(x == 4){
    members(x);
} else{
    members(x);
}
function members(x){
    console.log(`You are watching ${myArray[x].Name}'s profile!`);
    if(myArray[x].Age < 18){
        console.log(`And ${gender} is under the age of 18 (${myArray[x].Age})`);
    } else {
        console.log(`we are good and ${gender} is above 18 years (${myArray[x].Age})`);
    }
}