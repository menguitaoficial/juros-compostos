const calcularJurosCompostos = require('../src/calculo');

console.log("Teste 1: ", calcularJurosCompostos(1000, 0.05, 12)); // Saída esperada: 1795.86
console.log("Teste 2: ", calcularJurosCompostos(1500, 0.03, 24)); // Saída esperada: ~2314.54