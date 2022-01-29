var prompt  = require(`prompt-sync`)();

const opcao1 = (`Batata frita`);
const opcao2 = (`Frango a passarinho`);
const opcao3 = (`Linguiça acebolada`);

console.log(`As opções do buffet são: \n1- ${opcao1} \n2- ${opcao2} \n3- ${opcao3} \n`);

const escolhanum = (prompt(`Qual opção você prefere? `));

if (escolhanum == 1){ 
    escolhaop = (`${opcao1}`) 
} else if (escolhanum == 2){
    escolhaop = (`${opcao2}`)
} else if (escolhanum == 3){ 
    escolhaop = (`${opcao3}`) 
} else if (escolhanum <1 || escolhanum>3){
    escolhaop = (`Opção inválida`)
}

console.log(`\nVocê escolheu: ${escolhaop}`);