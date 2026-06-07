# Estadística JS

Pequeña librería de estadística descriptiva implementada en JavaScript.

## Funciones disponibles

### media(datos)

Calcula la media aritmética de un conjunto de datos.

### min(datos)

Obtiene el valor mínimo.

### max(datos)

Obtiene el valor máximo.

### mediana(datos)

Calcula la mediana del conjunto de datos.

### varianza(datos)

Calcula la varianza muestral.

Devuelve `null` cuando el conjunto contiene menos de dos elementos.

### desvEstand(datos)

Calcula el desvío estándar muestral.

Devuelve `null` cuando el conjunto contiene menos de dos elementos.

### rango(datos)

Calcula el rango (máximo - mínimo).

---

## Ejemplo de uso

```javascript
const stats = require('./estadistica');

const datos = [2, 4, 6, 8];

console.log(stats.media(datos));      // 5
console.log(stats.min(datos));        // 2
console.log(stats.max(datos));        // 8
console.log(stats.mediana(datos));    // 5
console.log(stats.varianza(datos));   // 6.666666666666667
console.log(stats.desvEstand(datos)); // 2.581988897471611
console.log(stats.rango(datos));      // 6
```

## Validaciones

Las funciones verifican que:

- El conjunto de datos no esté vacío.
- Los elementos sean valores numéricos.

---

## Tecnologías

- JavaScript
- Node.js

---

## Autor

Gino Scavuzzo