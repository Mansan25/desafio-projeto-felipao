//Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades - nome - idade - tipo (ex: guerreiro, mago, monge, ninja) (Ok)
//Deve haver um método chamado atacar que deve atender os seguientes requisitos: - exibir a mensagem: "o {tipo} atacou usando {ataque}" (Ok)
// {tipo} deve ser concatenando o tipo que está na propriedade da classe e {ataque} deve seguir uma descrição diferente conforme o tipo (Ok)
// Ao final deve se exibir uma mensagem: "o {tipo} atacou usando {ataque}" (Ok)


class descricaoHeroi{
	constructor (nome, idade, tipo, ataque){
    	this.nome = nome
    	this.idade = idade
    	this.tipo = tipo
    }
 	   
    atacar(ataque) {
         
      switch (this.tipo){
        case "mago":
          ataque = "usando magia"
          break;
        case "guerreiro":
          ataque = "usando espada"
          break;
        case "monge":
          ataque = "usando artes marciais"
          break;
        case "ninja":
          ataque = "usando shuriken"
          break; 
      }
            
        console.log(`Nosso herói é um ${this.tipo} de ${this.idade} anos chamado ${this.nome}!`)
        console.log("O " + this.tipo + " atacou seu oponente " + ataque + " e venceu")
	}
}

let heroi = new descricaoHeroi ("Oogway", "100", "monge")
heroi.atacar()