const stats = require('../estadistica');

console.log('\n=== TESTS ===\n');

/**
 *Testea y compara los valores obtenidos con los esperados
 *de una función de cálculo
 * @param {*} actual -Resultado obtenido
 * @param {*} esperado -Resultado esperado
 * @param {string} nombreDelTest -Nombre descriptivo
 */
function testsManual(actual,esperado,nombreDelTest){
    if(actual === esperado){
        console.log(`v- ${nombreDelTest}`);
    }else{
        console.log(`x- ${nombreDelTest}`);
        console.log(`esperado: ${esperado}`);
        console.log(`obtenido: ${actual}`);
    }
}

/**
 *Testea la ocurrencia de errores esperados de una función
 *
 * @param {Function} funcionError -Función de la que se espera un error
 * @param {string} nombreTest -Nombre descriptivo
 */
function testError(funcionError,nombreTest){
    try{
        funcionError();
        console.log(`x- ${nombreTest}`);
        console.log(`se esperaba un error`);
    }catch(error){
        console.log(`v- ${nombreTest}`);
        console.log(`   error: ${error.message}`);
    }
}


testsManual(
    stats.media([1,2,3]),
    2,
    'test MEDIA'
);

testError( // Se pasa una función para que testError() pueda ejecutarla dentro del bloque try/catch.
    () => stats.media([]),
    'test MEDIA vacío'
);

testsManual(
    stats.min([43,76,2,4,10]),
    2,
    'test MIN'
);

testsManual(
    stats.min([-1,-5,-10]),
    -10,
    'test MIN negativos'
);

testError(
    () => stats.min([]),
    'test MIN vacío'
);

testsManual(
    stats.max([34,12,21,87,23,2]),
    87,
    'test MAX'
);

testsManual(
    stats.max([-13,-2,-9]),
    -2,
    'test MAX negativos'
);

testError(
    () => stats.max([1,"hola",4]),
    'test MAX no numérico'
);

testsManual(
    stats.mediana([1,2,3,4,5]),
    3,
    'test MEDIANA impar'
);

testsManual(
    stats.mediana([1,2,3,4]),
    2.5,
    'test MEDIANA par'
);

testsManual(
    stats.mediana([2]),
    2,
    'test MEDIANA n=1'
);

testError(
    () => stats.mediana([]),
    'test MEDIANA vacío'
);

testsManual(
    stats.varianza([1,2,4,7]),
    7,
    'test VARIANZA'
);

testsManual(
    stats.varianza([5]),
    null,
    'test VARIANZA n=1'
);

testError(
    () => stats.varianza([1,"hola",4]),
    'test VARIANZA no numérico'
);

testsManual(
    stats.desvEstand([1,2,4,7]),
    Math.sqrt(7),
    'test DESVIO ESTANDAR'
);

testsManual(
    stats.desvEstand([3]),
    null,
    'test DESVIO ESTANDAR n=1'
);

testsManual(
    stats.media([5]),
    5,
    'test MEDIA n=1'
);

testsManual(
    stats.rango([1,3,6,8]),
    7,
    'test RANGO'
);



