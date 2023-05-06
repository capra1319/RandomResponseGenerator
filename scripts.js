const responses = {
        "group01": {
            0: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Along with Charmander and Squirtle, Bulbasaur is one of the three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
            1: "Ivysaur (Japanese: フシギソウ Fushigisou) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves from Bulbasaur starting at level 16 and evolves into Venusaur starting at level 32.",
            2: "Venusaur (Japanese: フシギバナ Fushigibana) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves from Ivysaur starting at level 32. It is the final form of Bulbasaur. Venusaur has two other forms. It can Mega Evolve into Mega Venusaur using the Venusaurite. It has a Gigantamax form that was introduced in The Isle of Armor. Venusaur is the game mascot of Pokémon Green and its remake Pokémon LeafGreen, appearing on the box art of both games."
        },
        "group02": {
            0: "Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36. Along with Bulbasaur and Squirtle, Charmander is one of the three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
            1: "Charmeleon (Japanese: リザード Lizardo) is a Fire-type Pokémon introduced in Generation I. It evolves from Charmander starting at level 16 and evolves into Charizard starting at level 36.",
            2: "Charizard (Japanese: リザードン Lizardon) is a dual-type Fire/Flying Pokémon introduced in Generation I. It evolves from Charmeleon starting at level 36. It is the final form of Charmander. Charizard has three other forms. It can Mega Evolve into two forms: Mega Charizard X using the Charizardite X. Mega Charizard Y using the Charizardite Y. It has a Gigantamax form. Charizard is the game mascot of Pokémon Red and its remake Pokémon FireRed, appearing on the box art of both games."
        },
        "group03": {
            0: "Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36. Along with Bulbasaur and Charmander, Squirtle is one of the three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen.",
            1: "Wartortle (Japanese: カメール Kameil) is a Water-type Pokémon introduced in Generation I. It evolves from Squirtle starting at level 16 and evolves into Blastoise starting at level 36. It evolves from Wartortle starting at level 36. It is the final form of Squirtle.",
            2: "Blastoise has two other forms. It can Mega Evolve into Mega Blastoise using the Blastoisinite. It has a Gigantamax form that was introduced in The Isle of Armor. Blastoise is the game mascot of the Japanese and international versions of Pokémon Blue, appearing on the boxart of both games."
        }
    }

let keys = Object.keys(responses);
let values = Object.values(responses);;
let randomGroup;
let groupName;
let theResponse;

function getResponse() {
    //generate a random number based on the number of keys available to choose from. 
    randomGroup = Math.floor(Math.random() * (keys.length));
    //create a variable with the selected group's name.
    groupName = keys[randomGroup];
    console.log('responses[randomGroup]: ' + keys[randomGroup])

    //Generate a random number based on the amount of values available in the selected group. 
    theResponse = (Math.floor((Math.random()) * Object.values(values[randomGroup]).length));
    console.log('theResponse: ' + theResponse);
    console.log(values[randomGroup]);

    return Object.values(responses)[randomGroup][theResponse];
}

function responseFunction() {
    let doc = document.getElementById("responseText");
    doc.innerHTML = getResponse();
};
