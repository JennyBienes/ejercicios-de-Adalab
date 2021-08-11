'use strict'

let texttoshow = 'Tu nombre es'; 
document.querySelector('h2').innerHTML =  texttoshow;


//Elemento de HTML que se escucha Listener
const button1 = document.querySelector('.ClickButton1');
const nameentried=document.querySelector('.NameValue'); 

// Handler o manipulador
function activebutton1 () {
  console.log ('Boton 1 funcionando');
  console.log(nameentried.value);
  return document.querySelector('h2').innerHTML = 'Tu nombre es '+ nameentried.value;
}

//listener sobre el elemento, con tipo de evento y handler
button1.addEventListener('click', activebutton1);
