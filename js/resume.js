const subscribeBtn = document.querySelector('form');
const newsletter = document.querySelector('#newsletter');
const close = document.querySelector('#close');

//add the eventlistener to the button

subscribeBtn.addEventListener('submit',function(e){
    
    const email = e.target.value;
    const regxp = //;

    if(!(newsletter.classList.contains('close') && close.classList.contains('close'))){
        newsletter.classList.add('close');
        close.classList.add('close');
    }

    e.preventDefault();

});
