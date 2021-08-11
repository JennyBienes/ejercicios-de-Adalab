'use strict'

let texttoshow = 'Hola Jenny'; 
document.querySelector('h1').innerHTML =  texttoshow;
let bottonselected=0

//Elemento de HTML que se escucha Listener
const button1 = document.querySelector('.ClickButton1');
const button2 = document.querySelector('.ClickButton2');


// Handler o manipulador
function activebutton1 () {
  console.log ('Boton 1 funcionando');
  return document.querySelector('h1').innerHTML = "Mi primer click. Boton 1 activado";
}

function activebutton2 () {
  console.log ('Boton 2 funcionando');
  return document.querySelector('h1').innerHTML = "Mi primer click. Boton 2 activado";
}



//listener sobre el elemento, con tipo de evento y handler
button1.addEventListener('click', activebutton1);
button2.addEventListener('click', activebutton2);
