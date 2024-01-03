//Crie uma variável para armazenar o nome do herói (Ok)
//Crie uma variável para  armazenar a quantidade de experiência (XP) de um herói (Ok)
//Depois utilize uma estrutura de decisão para apresentar alguma a mensagem "O Herói de nome **{nome}** está no nível de **{nivel}**" (Ok)
let nomeDeHeroi = "Mãe"
let xp = 100000
let classe = "Clérigo"
let heroi = [nomeDeHeroi, classe,xp]

switch (true) {
    case xp <= 1000:
        console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível de Ferro")
        break;
    case xp <= 2000:
        console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível de Bronze")
        break;
    case xp <= 5000:
        console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível de Prata")
        break;
    case xp <= 7000:
        console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível de Ouro")
        break;
    case xp <= 8000:
        console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível de Platina")
        break;
    case xp <= 9000:
        console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível de Ascendente")
        break;
    case xp <=10000:
        console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível de Imortal")
        break;
    
    default:
    console.log("A Heroína de nome " + heroi[0] + " e classe " + heroi [1] + " está no nível Radiante")
}
