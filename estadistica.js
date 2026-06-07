
/**
 *Valida datos antes del cálculo estadístico
 *
 * @param {number[]} datosx -Vector de números
 * @throws {Error} Si el conjunto es vacío o contiene datos no numéricos 
 */
function validarDatos(datosx){ 
    if(datosx.length === 0){
        throw new Error('el conjunto de datos no puede ser vacío')
    }
    if(!datosx.every(x => typeof x === 'number' && !isNaN(x))){
        throw new Error('los datos deben ser numericos')   
    }
}

/**
 *Calculo de la media aritmética (promedio) de 
 *un conjunto de datos numéricos
 * 
 * @param {number[]} datosx - Vector de números
 * @returns {number} Media aritmética del conjunto de datos
 */
function media(datosx){
    validarDatos(datosx);
    let suma = 0;
    for(let i = 0 ; i < datosx.length ; i++){
        suma += datosx[i]
    }
    let media = suma / datosx.length;
    return media;
}

/**
 *Identifica el valor mínimo de un conjunto de datos numéricos
 *
 * @param {number[]} datosx -Vector de números
 * @returns {number} Valor mínimo del conjunto de datos 
 */
function min(datosx) {
    validarDatos(datosx);

    let minimo = datosx[0];
    for(let i = 1; i < datosx.length; i++){
        if (minimo > datosx[i]){
            minimo = datosx[i];
        }
    }
    return minimo;
}

/**
 *Identifica el valor máximo de un conjunto de datos numéricos
 *
 * @param {number[]} datosx -Vector de números
 * @returns {number} Valor máximo del conjunto de datos
 */
function max(datosx) {
    validarDatos(datosx);

    let maximo = datosx[0];
    for(let i = 1; i < datosx.length; i++){
        if (maximo < datosx[i]){
            maximo = datosx[i];
        }
    }
    return maximo;
}

/**
 *Calcula la mediana de un conjunto de datos numéricos
 *
 * @param {number[]} datosx -Vector de números
 * @returns {number} Mediana del conjunto de datos 
 */
function mediana(datosx){
    validarDatos(datosx);

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

/**
 *Calcula la varianza muestral de un conjunto de datos numéricos
 *Devuelve null si el conjunto numérico es menor a 2 elementos
 *
 * @param {number[]} datosx -Vector de números
 * @returns {number|null} Varianza del conjunto de datos 
 */
function varianza(datosx){
    validarDatos(datosx);
    if(datosx.length < 2){
        return null;
    }
    let numerador = 0;
    let medio = media(datosx);
    for(let i = 0; i < datosx.length; i++){
        numerador += (datosx[i]-medio)**2;
    }
    let varianza = numerador / (datosx.length - 1);
    return varianza;
}

/**
 *Calcula el desvío estandar de un conjunto de datos
 *Devuelve null si el conjunto numérico es menor a 2 elementos
 *
 * @param {number[]} datosx -Vector de números
 * @returns {number|null} Desvio estándar del conjunto de datos
 */
function desvEstand(datosx){
    const v = varianza(datosx);
    if(v === null){
        return null
    }
    return Math.sqrt(v);
}

/**
 *Calcula el rango del conjunto de datos numéricos (máximo - mínimo)
 *
 * @param {number[]} datosx -Vector de números
 * @returns {number} Rango del conjunto de datos 
 */
function rango(datosx){
    validarDatos(datosx);
    return max(datosx) - min(datosx);
}


module.exports = {
    media,
    min,
    max,
    mediana,
    varianza,
    desvEstand,
    rango
};