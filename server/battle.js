//randomly generates arena background
let randomBG = document.getElementById("main");
images = [
  "https://preview.redd.it/d9spuwer2c491.png?width=1050&format=png&auto=webp&s=9ca8c75c63da9f8bb134e955d73e2770d073375e",
  "https://i.pinimg.com/736x/89/04/3f/89043fb2d56b3583cce79efe1c3fb53d.jpg",
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/204364595/original/86db6005cd51b4f60e71cca277f603a82cf5646a/draw-a-pixel-pokemon-battle-background.png",
  "https://cutewallpaper.org/cdn-cgi/mirage/91b98c5373d6a01796e55b9f978389531ff4e5ebae85abd935c54ab8d42fdd46/1280/21/pokemon-battle-backgrounds/Pokemon-X-and-Y-battle-background-10-by-PhoenixOfLight92-on-.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d843okx-eb13e8e4-0fa4-4fa9-968a-e0f36ff168de.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDg0M29reC1lYjEzZThlNC0wZmE0LTRmYTktOTY4YS1lMGYzNmZmMTY4ZGUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TIK_E5L8dTyBUk_dADA5WkLP8jSJMR7YGJG54KNAido",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83og9h-f3e2558c-6085-478f-899b-882bf6cb62d1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzb2c5aC1mM2UyNTU4Yy02MDg1LTQ3OGYtODk5Yi04ODJiZjZjYjYyZDEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.UJwQi7Yfd001rT6JFVfbFN4DmL6ZmE2iBPBqpv6f-DA",
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/412696943ecf62e9ee477e085adbea07-1648378716/RockForest/draw-a-pixel-pokemon-battle-background.gif",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2fb2821a-1406-4a1d-9b04-6668f278e944/d83m36e-3b58ca48-fe8a-456e-9ffc-a5a84eca6613.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmYjI4MjFhLTE0MDYtNGExZC05YjA0LTY2NjhmMjc4ZTk0NFwvZDgzbTM2ZS0zYjU4Y2E0OC1mZThhLTQ1NmUtOWZmYy1hNWE4NGVjYTY2MTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jOpoPaOypPatcb4k7flznTP9YiwUEX2q2BKoeWUPU74",
];
let imgCount = images.length;
let number = Math.floor(Math.random() * imgCount);
window.onload = function () {
  randomBG.style.backgroundImage = "url(" + images[number] + ")";
  battleSndElement.play();
};
let moveButton = document.querySelector(".btn");
let attackSndElement = document.getElementById("attackSnd");
let battleSndElement = document.getElementById("my_audio");
let victorySndElement = document.getElementById("my_victory");
let supEffectSndElement = document.getElementById("superEffectSnd");
let wasntEffectSndElement = document.getElementById("wasntEffectSnd");
let didntEffectSndElement = document.getElementById("didntEffectSnd");
let attMissEffectSndElement = document.getElementById("attMissEffectSnd");
let endEffectSndElement = document.getElementById("endEffectSnd");

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
    "https://projectpokemon.org/images/sprites-models/normal-back/charizard.gif",
    "https://projectpokemon.org/images/normal-sprite/charizard.gif",
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
    "https://projectpokemon.org/images/sprites-models/normal-back/blastoise.gif",
    "https://projectpokemon.org/images/normal-sprite/blastoise.gif",
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
    "https://projectpokemon.org/images/sprites-models/normal-back/venusaur-f.gif",
    "https://projectpokemon.org/images/normal-sprite/venusaur-f.gif",
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
    "https://projectpokemon.org/images/sprites-models/normal-back/pikachu.gif",
    "https://projectpokemon.org/images/shiny-sprite/pikachu.gif",
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
    "https://projectpokemon.org/images/sprites-models/normal-back/gengar.gif",
    "https://projectpokemon.org/images/normal-sprite/gengar.gif",
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
    "https://projectpokemon.org/images/sprites-models/normal-back/mewtwo.gif",
    "https://projectpokemon.org/images/normal-sprite/mewtwo.gif",
    324,
    [
      ["Confusion", "psychic", 80, 1],
      ["Psybeam", "psychic", 65, 1],
      ["Ancient Power", "rock", 60, 1],
      ["Dream Eater", "psychic", 100, 1],
    ],
  ],
  [
    "Machamp",
    "https://projectpokemon.org/images/sprites-models/normal-back/machamp.gif",
    "https://projectpokemon.org/images/normal-sprite/machamp.gif",
    384,
    [
      ["Strength", "normal", 80, 1],
      ["Dynamic Punch", "fighting", 50, 1],
      ["Dual Chop", "dragon", 40, 0.9],
      ["Low Sweep", "fighting", 65, 1],
    ],
  ],
  [
    "Arbok",
    "https://projectpokemon.org/images/sprites-models/normal-back/arbok.gif",
    "https://projectpokemon.org/images/normal-sprite/arbok.gif",
    324,
    [
      ["Acid", "poison", 40, 1],
      ["Sludge Bomb", "Poison", 90, 1],
      ["Fire Fang", "fire", 65, 0.95],
      ["Gunk Shot", "poison", 120, 0.8],
    ],
  ],
  [
    "Aerodactyl",
    "https://projectpokemon.org/images/sprites-models/normal-back/aerodactyl.gif",
    "https://projectpokemon.org/images/normal-sprite/aerodactyl.gif",
    364,
    [
      ["Stone Edge", "rock", 80, 1],
      ["Wing Attack", "fly", 60, 1],
      ["Hyper Beam", "normal", 150, 0.9],
      ["Rock Slide", "rock", 75, 0.9],
    ],
  ],
  [
    "Rattata",
    "https://projectpokemon.org/images/sprites-models/normal-back/rattata.gif",
    "https://projectpokemon.org/images/normal-sprite/rattata.gif",
    264,
    [
      ["Bite", "normal", 60, 1],
      ["Take Down", "normal", 90, 0.85],
      ["Assurance", "dark", 60, 1],
      ["Double Edge", "normal", 120, 1],
    ],
  ],
  [
    "Jigglypuff",
    "https://projectpokemon.org/images/sprites-models/normal-back/jigglypuff.gif",
    "https://projectpokemon.org/images/normal-sprite/jigglypuff.gif",
    434,
    [
      ["Disarming Voice", "fairy", 40, 1],
      ["Last Resort", "normal", 140, 1],
      ["Dazzling Gleam", "fairy", 80, 1],
      ["Echoed Voice", "normal", 40, 1],
    ],
  ],
  [
    "Hitmonchan",
    "https://projectpokemon.org/images/sprites-models/normal-back/hitmonchan.gif",
    "https://projectpokemon.org/images/normal-sprite/hitmonchan.gif",
    304,
    [
      ["Mega Punch", "normal", 80, 0.85],
      ["Bullet Punch", "steel", 40, 1],
      ["Close Combat", "fighting", 120, 1],
      ["Drain Punch", "fighting", 75, 1],
    ],
  ],
  [
    "Gyarados",
    "https://projectpokemon.org/images/sprites-models/normal-back/gyarados.gif",
    "https://projectpokemon.org/images/normal-sprite/gyarados.gif",
    394,
    [
      ["Hurricane", "flying", 110, 0.7],
      ["Twister", "dragon", 40, 1],
      ["Hydro Pump", "water", 110, 0.8],
      ["Ice Fang", "ice", 65, 0.95],
    ],
  ],
  [
    "Electrode",
    "https://projectpokemon.org/images/sprites-models/normal-back/electrode.gif",
    "https://projectpokemon.org/images/normal-sprite/electrode.gif",
    324,
    [
      ["Spark", "electric", 65, 1],
      ["Charge Beam", "electric", 50, 0.9],
      ["Chloroblast", "grass", 150, 0.95],
      ["Self-Destruct", "normal", 200, 1],
    ],
  ],
  [
    "Snorlax",
    "https://projectpokemon.org/images/sprites-models/normal-back/snorlax.gif",
    "https://projectpokemon.org/images/normal-sprite/snorlax.gif",
    524,
    [
      ["Snore", "normal", 50, 1],
      ["Body Slam", "normal", 85, 1],
      ["Belch", "poison", 120, 0.9],
      ["Covet", "normal", 60, 1],
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
  Pikachu: [["electric"], ["ground"], ["fly", "steel"]],
  Gengar: [
    ["normal", "fighting"],
    ["ground", "psychic", "ghost", "dark"],
    ["grass", "posion", "bug", "fairy"],
  ],
  Mewtwo: [[""], ["bug", "ghost", "dark"], ["psychic", "fighting"]],
  Arbok: [[""], ["ground", "psychic"], ["fighting", "poison", "bug", "fairy"]],
  Aerodactyl: [
    ["ground"],
    ["water", "rock", "steel", "electric", "ice"],
    ["fire", "poison", "bug", "normal", "fly"],
  ],
  Rattata: [["ghost"], ["fighting"], [""]],
  Jigglypuff: [
    ["ghost", "dragon"],
    ["steel", "poison"],
    ["bug", "dark"],
  ],
  Hitmonchan: [[""], ["fly", "pyschic", "fairy"], ["bug", "rock", "dark"]],
  Gyarados: [
    ["ground"],
    ["electric", "rock"],
    ["bug", "fire", "steel", "fighting", "water"],
  ],
  Machamp: [[""], ["fly", "psychic"], ["bug", "rock", "dark"]],
  Snorlax: [["ghost"], ["fighting"], [""]],
  Charizard: [
    ["ground"],
    ["water", "rock", "electric"],
    ["fire", "grass", "steel"],
  ],
  Electrode: [
    [""],
    ["ground"],
    ["electric", "fly", "steel"],
  ],
};
//function to spawn pk, true for player1, false for foe//
function spawn(bool) {
  let p = pkmArr[Math.floor(Math.random() * pkmArr.length)]; //random pk//
  let pkm = new Pokemon(p[0], p[1], p[2], p[3], p[4]); //build entire class//

  //creates moves for player 1 pkmon//
  if (bool) {
    for (i = 0; i < 4; i++) {
      document.getElementById("m" + i).value =
        pkm.moves[i][0] + "/" + pkm.moves[i][1];
      //  + " " + pkm.moves[i][3];
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
  "<p>HP: " + pk1.hp + "/" + pk1.fullhp + "</p>" + "<p>" + pk1.name + "</p>";
//pk2 spawn
let pk2 = spawn(false);
s2 = document.createElement("img");
s2.src = pk2.spriteFront; //foe pkmon displays front-side
document.getElementById("pk2").appendChild(s2);
document.getElementById("hp2").innerHTML =
  "<p>HP: " + pk2.hp + "/" + pk2.fullhp + "</p>" + "<p>" + pk2.name + "</p>";

//initiate battle sequence once player 1 attacks//
for (i = 0; i < 4; i++) {
  let btn = document.getElementById("m" + i);
  let move = pk1.moves[i];
  //event for foe to counter attack//
  function addHandler(btn, move, pk1, pk2) {
    btn.addEventListener("click", function (e) {
      attack(move, pk1, pk2, "hp2", "");
      attackSndElement.play();
      setTimeout(
        attack,
        2500,
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
              wasntEffectSndElement.play();
            }, 1000);
            break;
          case 1: //weakness to certain moves("type")
            scale = 2; //buff the effectiveness of attack
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "<p>It was super effective!</p>";
              supEffectSndElement.play();
            }, 1000);
            break;
          case 2: //resistance to certain moves("type")
            scale = 0.5; //bring down effectiveness of attack
            setTimeout(function () {
              document.getElementById("comment").innerHTML =
                "<p>It was not very effective!</p>";
              didntEffectSndElement.play();
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
      attMissEffectSndElement.play();
    });
  }
  checkWinner(hp);
}
function checkWinner(hp) {
  let safety = pk1.hp <= 0 ? pk1 : pk2.hp <= 0 ? pk2 : false;
  if (safety != false) {
    endEffectSndElement.play();
    setTimeout(function () {
      alert("Game Over: " + safety.name + " has fainted!");
    }, 500);
    document.getElementById(hp).innerHTML =
      "<p>HP: 0/" + safety.fullhp + "</p>";
    setTimeout(function () {
      location.reload();
    }, 2000);
  }
}
