var prompt  = require(`prompt-sync`)();

const nome = prompt(`Digite seu nome completo: `);
const endereco = prompt(`Digite seu endereço: `);
const cep = prompt(`Digite seu CEP: `);
const telefone = prompt(`Digite seu telefone: `);

console.log(`nome: ${nome}\nEndereço: ${endereco}\nCEP: ${cep}\nTelefone: ${telefone}`);