// la recursion no es mas que una funcion que se llama a si misma hasta alcanzar su objetivo, podriamos hacer un ejemplo de factorial > recordemos que el factorial es multiplicar desde el numero hasta llegar a 1.
function suma(n) {
  if (n <= 1) return 1;
  return n * suma(n-1);
}

suma(5);


// suma 1 a 4 con recursion:

function sum_total(val) {
  if(val === 0) {
    return 0;
  } else {
    return val + sum_total(val-1);
  }
}

sum_total(4);


// ejercicio: sin utilizar recursion suma del 1 al 4 para una suma total de 10.

function suma(a) {
  let n = 0;
  for(i = 0; i <= a; i ++) {
    n = i + n;
  }
  return 'el valor es ' + n;
}

suma(4);






