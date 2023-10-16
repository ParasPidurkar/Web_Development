let players = ["Jett","KillJoy","Breach","Sage"];
//console.log(typeof players)

let player1 = { playerName: "Paras",
            primaryWeapon: "Vandal",
            secondaryWeapon: "sheriff",
            agent: "KJ",
            HP: 100,
            alive: true
          };
console.log(player1)
let agentSelected = player1["agent"];
let agentSelected2 = player1.agent;


player1["agent"] = "Breach";
player1.HP = 50;
player1.alive = 1;
console.log(player1.alive)

let character1 = { characterName: "KillJoy",
                characterType: "Sentinel",
                power: {
                  attack1: "SwarmGrenade",
                  attack2: "Alarmbot",
                  attack3: "Turret",
                  ultimateAttack: "LockDown",
                  country: "Germany"
                },
                yearOfAdding: 2021
              };

character1.power.attack1 = "marshPit";
character1["power"]["attack2"] = "Boombot";

console.log(character1);

let character2 = { characterName: "Breach",
    characterType: "Initiator",
    friends: ["Jett","Viper","Pheonix"],
    power: {
        attack1: "Aftershock",
        attack2: "FlashPoint",
        attack3: "FaultLine",
        ultimateAttack: "RollingThunder",
        country: "Sweden"
    },
    yearOfAdding: 2020
};

let bestFriend = character2.friends[1];
console.log(bestFriend);

let addresses = [{
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida"
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas"
  }];

  let character3 = { characterName: "Anubis",
                    activities: ["Electric charge", "healing", "manufacturing weapons"],
                    address: [{
                      street: "2nd street",
                      number: "123",
                      zipcode: "33116",
                      city: "Miami",
                      state: "Florida"
                    },
                    {
                      street: "1st West avenue",
                      number: "5",
                      zipcode: "75001",
                      city: "Addison",
                      state: "Texas"
                    }],
                    yearOfAdding: 2023
                  };