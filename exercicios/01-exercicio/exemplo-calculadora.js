const calculadora = require('./calculadora')

console.log(calculadora.somar(2,4))
console.log(calculadora.subtrair(2,4))
console.log(calculadora.multiplicar(2,4))
console.log(calculadora.divisao(2,4))

console.log(calculadora.somarNumeros(2,4,6,10,8))
console.log(calculadora.somarNumeros(2,4,6,-10,8))

console.log(calculadora.subtrairNumeros(2,4,6,10,8))
console.log(calculadora.subtrairNumeros(2,4,6,-10,8))

console.log(calculadora.multiplicarNumeros(2,4,6,10,8))
console.log(calculadora.multiplicarNumeros(2,4,6,-10,8))

console.log(calculadora.divisaoNumeros(2,4,6,10,8))
console.log(calculadora.divisaoNumeros(2,4,6,-10,8))