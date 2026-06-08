console.log('hola, java')

const { media,min,max,mediana,varianza,desvEstand,rango } = require('./estadistica');


const datos = [10,20,30,40,50];


console.log(media(datos))
console.log(min(datos))
console.log(max(datos))
console.log(mediana(datos))
console.log(varianza(datos))
console.log(desvEstand(datos))
console.log(rango(datos))