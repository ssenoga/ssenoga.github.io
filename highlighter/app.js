/**
 * SIMPLE WEB APP USING map, reduce, filter, 
 * 
*/

const search = document.querySelector('#search');
const result = document.querySelector('#results');

const searchLength = search.value.length;

// data to display on the app

const data = ['css for web','css for mobile','javascript the good parts','you do not know javascript yet','the javascript bible','javascript the missing manual','heads first javascript','php the beginner reference','php novice to ninja','the complete php reference','jquery novice to ninja'];
/** 
 * @description 'This function iniatally loads all the data in the dom'
*/
mapFunc(data);

/** 
 * @description 'This event listens on each key stroke on the key board and renders the dom elements in UI acording to the given key strokes'
*/
search.addEventListener('keyup',function(e){
    result.innerHTML = "";
    let res = e.target.value;
    // convert all the enter string to low case
    res = res.toLocaleLowerCase();

    const t = colorElem(data,res);
   
    const resul = t.filter(x =>{ 
        x = x.toLocaleLowerCase();
        return x.includes(res)
    });
    mapFunc(resul);

})


/** 
 * @name ColorElem
 * @description "This function takes two paremeters and and returns an array. its job is make a red background to the searched items in the data set";
 * @param first 'array' second 'search item' 
*/
function colorElem(arr,elem){
    let colored = [],rest = [];
    for(let i =0; i< arr.length; i++){
        colored.push(`<span id=${i} style="background: red;">${arr[i].substr(arr[i].indexOf(elem),elem.length)}</span>`);
    }

    // replce the array elements with colored one

    for(let i = 0 ; i<colored.length; i++){
        rest.push(arr[i].replace(elem,colored[i]));
    }
    return rest;
}

/** 
 * @name 'mapFunc'
 * @description 'This is the render function which will yield DOM outputs of our app'
 * @param array
*/
function mapFunc(arr){
    arr.map( (book, index) => {
        result.innerHTML += `<li> ${index + 1}: ${ book.toLowerCase() }</li>`;
    })
}

/**
 * 
 * @param {@deprecated} filterFunc 
 * @param {@description} the filterFunc is deprecated and its nolonger used in this app but it has been left there for future reference
 */

// use filter for the search
function filterFunc(arr,item){
    return arr.filter(x => {
        console.log(x);
        x.includes(item)
    });
}
