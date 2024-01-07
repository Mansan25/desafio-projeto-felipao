//Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador, depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

//Função
function calcularBalanco(vitorias, derrotas){
	let resuldado = vitorias - derrotas
    return resuldado
}

let saldoRankeada = calcularBalanco (100,15)


switch (true) {
    case saldoRankeada <= 10:
        saldoRankeada = [saldoRankeada ,"Ferro"]
        break;
    case saldoRankeada <= 20:
       saldoRankeada = [saldoRankeada ,"Bronze"]
        break;
    case saldoRankeada <= 50:
        saldoRankeada = [saldoRankeada ,"Prata"]
        break;
    case saldoRankeada <= 80:
        saldoRankeada = [saldoRankeada ,"Ouro"]
        break;
    case saldoRankeada <= 90:
        saldoRankeada = [saldoRankeada ,"Diamante"]
        break;
    case saldoRankeada <= 100:
        saldoRankeada = [saldoRankeada ,"Lendário"]
        break;
    default:
    saldoRankeada = [saldoRankeada ,"Imortal"]
}

console.log ("O Herói tem saldo de " + saldoRankeada[0] + " pontos no ranking e está no nível de " + saldoRankeada[1])