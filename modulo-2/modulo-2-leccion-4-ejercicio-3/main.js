'use strict'

function precioconIva(precio) {
 

const priceIva = (precio * (21 / 100) );
const priceTotal = precio + priceIva;
console.log(`El precio sin IVA ${precio} , el IVA (21%) ${priceIva} y el total ${priceTotal}`);
return (priceTotal) ;}

precioconIva(380)
precioconIva(1000)