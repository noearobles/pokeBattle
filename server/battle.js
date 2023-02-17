//randomly generates arena background
let randomBG = document.getElementById("main");
images = [
  "https://preview.redd.it/d9spuwer2c491.png?width=1050&format=png&auto=webp&s=9ca8c75c63da9f8bb134e955d73e2770d073375e",
  "https://i.pinimg.com/736x/89/04/3f/89043fb2d56b3583cce79efe1c3fb53d.jpg",
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/204364595/original/86db6005cd51b4f60e71cca277f603a82cf5646a/draw-a-pixel-pokemon-battle-background.png",
];
let imgCount = images.length;
let number = Math.floor(Math.random() * imgCount);
window.onload = function () {
  randomBG.style.backgroundImage = "url(" + images[number] + ")";
};
//building class to build pk1 and pk2 objects
class Pokemon {
  constructor(name, spriteBack, spriteFront, hp, moves) {
    this.name = name;
    this.spriteBack = spriteBack;
    this.spriteFront = spriteFront;
    this.hp = hp;
    this.fullhp = hp;
    this.moves = moves;
  }
}
//pk classes [pk,frontPic,backPic,hp[[moves1-4 w/their attack type,damage, and accuracy]]]
let pkmArr = [
  [
    "Charizard",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
    "https://img.pokemondb.net/sprites/black-white/normal/charizard.png",
    360,
    [
      ["Flamethrower", "fire", 90, 1],
      ["Dragon Claw", "dragon", 80, 1],
      ["Air slash", "fly", 75, 0.95],
      ["Scratch", "normal", 40, 1],
    ],
  ],
  [
    "Blastoise",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    362,
    [
      ["Surf", "water", 90, 1],
      ["Tackle", "normal", 40, 0.95],
      ["Blizzard", "ice", 120, 0.9],
      ["Flash cannon", "steel", 80, 1],
    ],
  ],
  [
    "Venusaur",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
    "https://img.pokemondb.net/sprites/black-white/normal/venusaur-f.png",
    364,
    [
      ["Petal Blizzard", "grass", 90, 1],
      ["Sludge bomb", "poison", 90, 1],
      ["Earthquake", "ground", 100, 1],
      ["Take Down", "normal", 90, 0.85],
    ],
  ],
  [
    "Pikachu",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    274,
    [
      ["Thunderbolt", "electric", 90, 1],
      ["Submission", "fighting", 80, 0.8],
      ["Thunder", "electric", 120, 0.7],
      ["Mega Kick", "normal", 120, 0.75],
    ],
  ],
  [
    "Gengar",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    324,
    [
      ["Dark Pulse", "dark", 80, 1],
      ["Lick", "ghost", 80, 0.8],
      ["Poison Jab", "poison", 100, 0.8],
      ["Dream Eater", "psychic", 100, 1],
    ],
  ],
  [
    "Mewtwo",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    324,
    [
      ["Confusion", "psychic", 80, 1],
      ["Psybeam", "psychic", 65, 1],
      ["Ancient Power", "rock", 60, 1],
      ["Dream Eater", "psychic", 100, 1],
    ],
  ],
];
//pk immunities [0], weaknesses [1], resistances[2]//
let typeMatch = {
  Charizard: [
    ["ground"],
    ["water", "rock", "electric"],
    ["fire", "grass", "steel"],
  ],
  Blastoise: [[""], ["grass", "electric"], ["fire", "water"]],
  Venusaur: [
    ["poison"],
    ["fire", "fly", "ice", "steel"],
    ["grass", "water", "electric", "fighting"],
  ],
  Pikachu: [["electric"], ["ground"], ["flying", "steel"]],
  Gengar: [
    ["normal", "fighting"],
    ["ground", "psychic", "ghost", "dark"],
    ["grass", "posion", "bug", "fairy"],
  ],
  Mewtwo: [[""], ["bug", "ghost", "dark"], ["psychic", "fighting"]],
};
//function to spawn pk, true for player1, false for foe//
function spawn(bool) {
  let p = pkmArr[Math.floor(Math.random() * pkmArr.length)]; //random pk//
  let pkm = new Pokemon(p[0], p[1], p[2], p[3], p[4]); //build entire class//

  //creates moves for player 1 pkmon//
  if (bool) {
    for (i = 0; i < 4; i++) {
      document.getElementById("m" + i).value = pkm.moves[i][0];
    }
  }
  return pkm;
}
//pk1 spawn
let pk1 = spawn(true);
s1 = document.createElement("img");
s1.src = pk1.spriteBack; //friendly pkmon(YOU) displays back-side
document.getElementById("pk1").appendChild(s1);
document.getElementById("hp1").innerHTML =
  "<p>HP: " + pk1.hp + "/" + pk1.fullhp + "</p>";
//pk2 spawn
let pk2 = spawn(false);
s2 = document.createElement("img");
s2.src = pk2.spriteFront; //foe pkmon displays front-side
document.getElementById("pk2").appendChild(s2);
document.getElementById("hp2").innerHTML =
  "<p>HP: " + pk2.hp + "/" + pk2.fullhp + "</p>";

//initiate battle sequence once player 1 attacks//
for (i = 0; i < 4; i++) {
  let btn = document.getElementById("m" + i);
  let move = pk1.moves[i];
  //event for foe to counter attack//
  function addHandler(btn, move, pk1, pk2) {
    btn.addEventListener("click", function (e) {
      attack(move, pk1, pk2, "hp2", "");
      setTimeout(
        attack,
        2000,
        pk2.moves[Math.floor(Math.random() * 3)],
        pk2,
        pk1,
        "hp1",
        "Foe "
      );
    });
  }
  addHandler(btn, move, pk1, pk2);
}
//conditionalize hits and misses for pokemon//
function attack(move, attacker, receiver, hp, owner) {
  document.getElementById("comment").innerHTML =
    "<p>" + owner + attacker.name + " used " + move[0] + "!</p>";
  let accuracy = move[3] * 255;
  if (Math.floor(Math.random() * 256) < accuracy) {
    //gen-1 accuracy//
    //defining attack scales, resistances and move types//
    let power = (move[2] += Math.floor(Math.random() * 10)); //for variations in damages
    let resistanceType = typeMatch[receiver.name];
    let moveType = move[1];
    let scale = 1;
    //for loop to check 4 possible results from an attack//
    for (i = 0; i < resistanceType.length; i++) {
      if (resistanceType[i].includes(moveType)) {
        switch (i) {
          case 0: //immunity to certain moves("type")
            scale = 0; //reduce all damage from attack//
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "<p>It had no effect!</p>";
            }, 1000);
            break;
          case 1: //weakness to certain moves("type")
            scale = 2; //buff the effectiveness of attack
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "<p>It was super effective!</p>";
            }, 1000);
            break;
          case 2: //resistance to certain moves("type")
            scale = 0.5; //bring down effectiveness of attack
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "<p>It was not very effective!</p>";
            }, 1000);
            break;
        }
        break;
      }
    }
    power *= scale;
    receiver.hp -= Math.floor(power);
    document.getElementById(hp).innerHTML =
      "<p>HP: " + receiver.hp + "/" + receiver.fullhp + "</p>";
  } else {
    setTimeout(function () {
      document.getElementById("comment").innerHTML = "<p>Attack missed!</p>";
    });
  }
  checkWinner(hp);
}

function checkWinner(hp) {
  let safety = pk1.hp <= 0 ? pk1 : pk2.hp <= 0 ? pk2 : false;
  if (safety != false) {
    alert("GAME OVER: " + safety.name + " has fainted!");
    document.getElementById(hp).innerHTML =
      "<p>HP: 0/" + safety.fullhp + "</p>";
    setTimeout(function () {
      location.reload();
    }, 1500);
  }
}
