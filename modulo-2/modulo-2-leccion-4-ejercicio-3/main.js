'use strict'

function price(a) {
  return (a) ;
}
const resultPrice = (380);
const priceIva = (380 * (21 / 100) );
const priceTotal = resultPrice + priceIva;
console.log(`El precio sin IVA ${resultPrice} , el IVA (21%) ${priceIva} y el total ${priceTotal}`);