function randoIndexSelecto(num) {
    return Math.floor(Math.random() * num);
}

const trainerGenerator = {
    "trainerType": {
        "Bug Trainer": "Trainer that favors bug type pokemon",
        "Ace Trainer": "Trainer that favors flying type pokemon",
        "Fire Spinner": "A Trainer that favors fire type pokemon",
        "Hiker": "Trainer that favors Ground & Rock type pokemon",
        "Poke-Maniac": "Trainer that favors Ghost, Poison and Dark type pokemon",
        "Psychic": "Trainer that favors psychic type pokemon",
        "Fisherman": "Trainer that favors Water type pokemon"
    },
    "starterPokemon": {
        "Kanto": ["Squirtle","Bulbasaur","Charmander"],
        "Johto": ["Chikorita","Cyndaquil","Totodile"],
        "Hoenn": ["Treecko","Torchic","Mudkip"],
        "Sinnoh": ["Turtwig", "Chimchar", "Piplup"],
        "Unova": ["Snivy", "Tepig",	"Oshawott"],
        "Kalos": ["Chespin","Fennekin","Froakie"],
        "Alola": ["Rowlet","Litten"	,"Popplio"],
        "Galar": ["Grookey","Scorbunny","Sobble"]
    },
    "startingRegion": ["Kanto", "Johto", "Hoenn", "Sinnoh", "Unova", "Kalos", "Alola", "Galar"],
    randomTrainer() {
        let trainerCount = Object.keys(this.trainerType).length;
        let trainerIndex = randoIndexSelecto(trainerCount)
        return Object.keys(this.trainerType).at(trainerIndex)
    },
    randomPokemon(region) {
        let pokemonCount = this.starterPokemon[region].length;
        let pokemonIndex = randoIndexSelecto(pokemonCount)
        return this.starterPokemon[region].at(pokemonIndex)
    },
    randomRegion() {
        let regionCount = this.startingRegion.length;
        let regionIndex = randoIndexSelecto(regionCount)
        return this.startingRegion.at(regionIndex)
    },

}


function responseFunction() {
    let selectedRegion = trainerGenerator.randomRegion()
    let doc = document.getElementById("responseText");
    doc.innerHTML = `You are a ${trainerGenerator.randomTrainer()} in the ${selectedRegion} region and your starter pokemon is ${trainerGenerator.randomPokemon(selectedRegion)}`;
};

