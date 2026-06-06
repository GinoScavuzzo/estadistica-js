function media(datosx){

    if(datosx.length === 0){
        throw new Error('El conjunto de datos está vacío')
    }

    let suma = 0;
    for(let i = 0 ; i < datosx.length ; i++){
        suma += datosx[i]
    }
    let media = suma / datosx.length;
    return media;
}

function min(datosx) {
    let minimo = datosx[0];
    for(let i = 1; i < datosx.length; i++){
        if (minimo > datosx[i]){
            minimo = datosx[i];
        }
    }
    return minimo;
}

function max(datosx) {
    let maximo = datosx[0];
    for(let i = 1; i < datosx.length; i++){
        if (maximo < datosx[i]){
            maximo = datosx[i];
        }
    }
    return maximo;
}

function mediana(datosx){

    const ordenado = [...datosx].sort((a,b) => a - b);

    if (ordenado.length % 2 !== 0){

        let i = Math.floor(ordenado.length / 2);
        return ordenado[i];

    } else {

        let medio = ordenado.length / 2;
        let medianax = (ordenado[medio-1] + ordenado[medio]) / 2;
        return medianax;

    }
}


module.exports = {
    media,
    min,
    max,
    mediana
};