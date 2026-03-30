const prompt = require('readline-sync')

class heroAventure{
    constructor(nameToHero, ageToHero, typeToHero){
        this.nameToHero = nameToHero
        this.ageToHero = ageToHero
        this.typeToHero = typeToHero
    }
    
    typeOffHero(){
        if(this.typeToHero === 1){
            this.typeToHero = "Mago"
            return this.typeToHero
        }else if(this.typeToHero === 2){
            this.typeToHero = "Guerreiro"
            return this.typeToHero
        }else if(this.typeToHero === 3){
            this.typeToHero = "Monge"
            return this.typeToHero       
        }else if(this.typeToHero === 4){
            this.typeToHero = "ninja"
            return this.typeToHero
        }
    }

    attack(){
        let ataque = ""
        if(this.typeToHero === "Mago"){
            ataque = "magia"
            return `o ${this.typeToHero} atacou usando ${ataque}`
        }else if(this.typeToHero === "Guerreiro"){
            ataque = "espada"
            return `o ${this.typeToHero} atacou usando ${ataque}`
        }else if(this.typeToHero === "Monge"){
            ataque = "artes marciais"
            return `o ${this.typeToHero} atacou usando ${ataque}`
        }else if(this.typeToHero === "ninja"){
            ataque = "shuriken"
            return `o ${this.typeToHero} atacou usando ${ataque}`
        }
    }
}

let contador = 0

do{

    //Entrada de dados
    console.log("------------------")
    let nameHero = prompt.question("Nome do Heroi: ")
    let ageHero = prompt.question("Idade do Heroi: ")
    let type = prompt.question("Escolha o tipo do seu heroi: \n1 - Mago\n2 - Guerreiro\n3 - Monge\n4 - ninja\n")
    let typeHero = parseInt(type)
    console.log("------------------")

    //Objeto da minha classe
    let heroToAventure = new heroAventure(nameHero,ageHero,typeHero)

    //saida das informacoes
    console.log(`Nome do Heroi: ${heroToAventure.nameToHero}`)
    console.log(`Idade do Heroi: ${heroToAventure.ageToHero}`)
    console.log(`Tipo do Heroi: ${heroToAventure.typeOffHero()}`)
    console.log("------------------")

    //Pergunta se quer atacar
    let attackHero = prompt.question("Deseja atacar? [S/N] ")
    if(attackHero === "S"|| attackHero === "s"){
        console.log(` - ${heroToAventure.attack()}\n`)
    }

    //condicao de loop para reniciar o programa
    console.log("------------------\n")
    let condicaoDeEntrada  = prompt.question("Deseja continuar? [S/N]")
    if(condicaoDeEntrada === "S" || condicaoDeEntrada === "s"){
        contador++
    }else if(condicaoDeEntrada === "N" || condicaoDeEntrada === "n"){
        console.log("------------------")
        console.log("Fim\n")
        break
    }
}while(contador >= 1)


