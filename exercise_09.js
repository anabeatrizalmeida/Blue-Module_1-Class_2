var prompt  = require(`prompt-sync`)();

const real = +prompt(`Digite o valor em reais: `);
const dolar = real*5.46;

console.log(`O valor em dólar é de $ ${dolar}`);
