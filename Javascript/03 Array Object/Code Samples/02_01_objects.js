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

let company = { companyName: "Healthy Candy",
                activity: "food manufacturing",
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

company.address.zipcode = "33117";
company["address"]["number"] = "100";

console.log(company);

let company2 = { companyName: "Healthy Candy",
                activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
                address: {
                  street: "2nd street",
                  number: "123",
                  zipcode: "33116",
                  city: "Miami",
                  state: "Florida"
                },
                yearOfEstablishment: 2021 
              };

let activity = company2.activities[1];
console.log(activity);

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

  let company3 = { companyName: "Healthy Candy",
                    activities: ["food manufacturing", "improving kids' health", "manufacturing toys"],
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
                    yearOfEstablishment: 2021 
                  };