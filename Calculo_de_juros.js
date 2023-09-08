import dados from 'readline-sync';

let porcentagem_juros;
let Valor_pagar_juros;

console.log("---- Aplicação de juros ----");
let valor = parseFloat(dados.question("Informe o valor a pagar: "));
    if(valor == 0 ){
        console.log("Você não deve nada !")
        process.exit(1);
    }

let atraso_dias = parseInt(dados.question("Dias de atraso: "));
    if(atraso_dias == 0){
        console.log("Nem um Juros vai ser cobrado!");
        console.log("Valor da dívida a pagar é: "+valor+"\n")
        process.exit(1);
    }

    if(atraso_dias > 15){
        porcentagem_juros = 0.1;
        Valor_pagar_juros = (valor * porcentagem_juros) + Number(valor);

    }else if(atraso_dias <= 15){
        porcentagem_juros = 0.05;
        Valor_pagar_juros = (valor * porcentagem_juros) + Number(valor) ;
    }

console.log("\nValor da dívida: "+valor)
console.log("Dias de atrasados: "+atraso_dias)
console.log("Taxa de juros: "+porcentagem_juros * 100+"%")
console.log("Valor a pagar: "+Valor_pagar_juros)

clearInterval