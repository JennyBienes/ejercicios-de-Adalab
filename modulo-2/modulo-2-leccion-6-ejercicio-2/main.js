'use strict'

const adalaber1 = {}
  adalaber1.name = 'Susana';
  adalaber1.age = '34';
  adalaber1.job = 'journalist'
  adalaber1.run = function (){
     console.log('Estoy corriendo');
  }
  adalaber1.run = ()=>  console.log('Estoy corriendo');
  adalaber1.run();
  
  adalaber1.runAMarathon= function (distance){
    console.log(`Èstoy corriendo un marathon de ${distance}`);
  }
  adalaber1.runAMarathon= distance => console.log(`Èstoy corriendo un marathon de ${distance}`);

  adalaber1.runAMarathon(50);

  adalaber1.runAMarathon(30);


 

  
