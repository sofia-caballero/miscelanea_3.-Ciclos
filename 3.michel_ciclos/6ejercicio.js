console.log(" 6. Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los números comprendidos entre ellos en secuencia ascendente. ")


console.log("ingrese un numero");
let uno = 2;
console.log(uno);

console.log("ingrese el segundo numero");
let dos= 10;
console.log(dos);

if (uno>= dos) {
    console.log("El primer número debe ser menor que el segundo.");
}

let i = uno;
console.log("los números comprendidos entre ellos son");
while (i <= dos) {
console.log(i);
i++;

  }