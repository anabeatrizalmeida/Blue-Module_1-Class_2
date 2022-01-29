var prompt  = require(`prompt-sync`)();

const valorRef = 42.54;
const taxaserv = (10/100) * 42.54;
const totaldaconta = (valorRef + taxaserv);

console.log(`O valor total da conta foi de R$ ${totaldaconta.toFixed(2)}`);