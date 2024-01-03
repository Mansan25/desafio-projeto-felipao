//Crie uma variável para armazenar o nome do herói (Ok)
//Crie uma variável para  armazenar a quantidade de experiência (XP) de um herói (Ok)
//Depois utilize uma estrutura de decisão para apresentar alguma a mensagem "O Herói de nome **{nome}** está no nível de **{nivel}**" (Ok)
let nomeDeHeroi = "Mãe"
let xp = 100000
let classe = "Clérigo"

switch (true) {
    case xp <= 1000:
        xp = "Ferro"
        break;
    case xp <= 2000:
       xp = "Bronze"
        break;
    case xp <= 5000:
        xp = "Prata"
        break;
    case xp <= 7000:
        xp = "Ouro"
        break;
    case xp <= 8000:
        xp = "Platina"
        break;
    case xp <= 9000:
        xp = "Ascendente"
        break;
    case xp <=10000:
        xp = "Imortal"
        break;
    
    default:
    xp = "Radiante"
}

let heroi = [nomeDeHeroi, classe,xp]
console.log("A Heroína de nome " + heroi[0] + ", classe, " + heroi[1] + ", está no nível " + heroi[2])
