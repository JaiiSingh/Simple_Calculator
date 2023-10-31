let string='';
let buttons=document.querySelectorAll('.btn');
Array.from(buttons).forEach((buttons)=>{
    var num;
    buttons.addEventListener('hover',(e)=>{
        if(e.target.innerHTML=='AC'){
            buttons.classList.add(".ac")
        }
    })
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML =='AC'){
            string='';
            document.querySelector('.input').value=string;
        }
        else if(e.target.innerHTML=='C'){
            string=document.querySelector('.input').value
            document.querySelector('.input').value=string.slice(0,length-1);
        }
     else if(e.target.innerHTML=="="){
        string=eval(document.querySelector('.input').value);
        document.querySelector('.input').value=string;
     }
        else{
            string+=e.target.innerHTML;
            document.querySelector('.input').value=string;
        }
    })
})