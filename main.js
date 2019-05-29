
class LoadedLux {
    constructor(){
        this.all = []
    }

    add(pokemon) {
        this.all.push(pokemon)
    }
    get(name){
        for (let i = 0; i < this.all.length; i++){
            if (name === this.all[i].name) {
                return this.all[i]
            }
        }
    }
}

class Pokemon {
    constructor(name, hp, attack, defence, abilities) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defence = defence
        this.abilities = abilities
    }
}


let Loaded = new LoadedLux()


//Haxorus
axios.get("https://pokeapi.co/api/v2/pokemon/haxorus/")
.then((response) => {

    let ul = document.querySelector("#haxorus")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let haxorus = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(haxorus)

    Loaded.add(haxorus)

    pokeData.innerHTML = haxorus.data

    name.innerHTML = "Name: " + haxorus.name
    hp.innerHTML = "Hp: " + haxorus.hp
    attack.innerHTML = "Attack: " + haxorus.attack
    defence.innerHTML = "Defence: " + haxorus.defence
    abilities.innerHTML = "Abilities: " + haxorus.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})

//Dragonite
axios.get("https://pokeapi.co/api/v2/pokemon/149/")
.then((response) => {

    let ul = document.querySelector("#dragonite")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let dragonite = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(dragonite)

    Loaded.add(dragonite)

    pokeData.innerHTML = dragonite.data

    name.innerHTML = "Name: " + dragonite.name
    hp.innerHTML = "Hp: " + dragonite.hp
    attack.innerHTML = "Attack: " + dragonite.attack
    defence.innerHTML = "Defence: " + dragonite.defence
    abilities.innerHTML = "Abilities: " + dragonite.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})

//Hydreigon
axios.get("https://pokeapi.co/api/v2/pokemon/635/")
.then((response) => {

    let ul = document.querySelector("#hydreigon")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let hydreigon = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(hydreigon)

    Loaded.add(hydreigon)

    pokeData.innerHTML = hydreigon.data

    name.innerHTML = "Name: " + hydreigon.name
    hp.innerHTML = "Hp: " + hydreigon.hp
    attack.innerHTML = "Attack: " + hydreigon.attack
    defence.innerHTML = "Defence: " + hydreigon.defence
    abilities.innerHTML = "Abilities: " + hydreigon.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})
//Darkrai
axios.get("https://pokeapi.co/api/v2/pokemon/491/")
.then((response) => {

    let ul = document.querySelector("#darkrai")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let darkrai = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name
    )
    console.log(darkrai)

    Loaded.add(darkrai)

    pokeData.innerHTML = darkrai.data

    name.innerHTML = "Name: " + darkrai.name
    hp.innerHTML = "Hp: " + darkrai.hp
    attack.innerHTML = "Attack: " + darkrai.attack
    defence.innerHTML = "Defence: " + darkrai.defence
    abilities.innerHTML = "Abilities: " + darkrai.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})
//Conkeldurr
axios.get("https://pokeapi.co/api/v2/pokemon/534/")
.then((response) => {

    let ul = document.querySelector("#conkeldurr")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let conkeldurr = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(conkeldurr)

    Loaded.add(conkeldurr)

    pokeData.innerHTML = conkeldurr.data

    name.innerHTML = "Name: " + conkeldurr.name
    hp.innerHTML = "Hp: " + conkeldurr.hp
    attack.innerHTML = "Attack: " + conkeldurr.attack
    defence.innerHTML = "Defence: " + conkeldurr.defence
    abilities.innerHTML = "Abilities: " + conkeldurr.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})
//Krookodile
axios.get("https://pokeapi.co/api/v2/pokemon/553/")
.then((response) => {

    let ul = document.querySelector("#krookodile")

    let pokeData = response.data
    let name = document.createElement("li")
    let hp = document.createElement("li")
    let attack = document.createElement("li")
    let defence = document.createElement("li")
    let abilities = document.createElement("li")

    let krookodile = new Pokemon(
        pokeData.name,
        pokeData.stats[5].base_stat,
        pokeData.stats[4].base_stat,
        pokeData.stats[3].base_stat,
        pokeData.abilities[0].ability.name + ", " + pokeData.abilities[1].ability.name
    )
    console.log(krookodile)

    Loaded.add(krookodile)

    pokeData.innerHTML = krookodile.data

    name.innerHTML = "Name: " + krookodile.name
    hp.innerHTML = "Hp: " + krookodile.hp
    attack.innerHTML = "Attack: " + krookodile.attack
    defence.innerHTML = "Defence: " + krookodile.defence
    abilities.innerHTML = "Abilities: " + krookodile.abilities

    ul.appendChild(name)
    ul.appendChild(hp)
    ul.appendChild(attack)
    ul.appendChild(defence)
    ul.appendChild(abilities)

}).catch((error) => {
    console.log(error)
})
