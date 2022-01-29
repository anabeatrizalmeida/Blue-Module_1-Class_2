var prompt  = require(`prompt-sync`)();

const compra = 100.98;
const pg = 150;
const troco = (pg - compra);

console.log(`O valor do troco foi de R$ ${troco.toFixed(2)}`);