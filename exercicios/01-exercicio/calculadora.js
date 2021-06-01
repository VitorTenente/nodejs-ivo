// criar funções para uma calculadora e exportar 

const calculadora = {
    somar(a, b) {
        let resultado = a + b
        return resultado
    },
    somarNumeros(...numeros) {
        let resultado = 0;
        for (let i = 0; i < numeros.length; i++) {
            resultado = resultado + numeros[i];
        }
        return resultado;
    },
    subtrair(a, b) {
        let resultado = a - b
        return resultado
    },
    subtrairNumeros(...numeros) {
        let resultado = numeros[0];
        for (let i = 1; i < numeros.length; i++) {
            resultado = resultado - numeros[i]
        }
        return resultado
    },
    multiplicar(a,b) {
        let resultado = a * b
        return resultado
    },
    multiplicarNumeros(...numeros) {
        let resultado = 1
        for(let i = 0; i < numeros.length; i++) {
            resultado = resultado * numeros[i]
        }
        return resultado
    },
    divisao(a,b) {
        let resultado = a / b
        return resultado
    },
    divisaoNumeros(...numeros) {
        let resultado = numeros[0]
        for(let i = 1; i < numeros.length; i++) {
            resultado = resultado / numeros[i]
        }
        return resultado
    }
}

module.exports = calculadora