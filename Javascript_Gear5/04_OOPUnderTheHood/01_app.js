//constructor function
function Player(name, role) {
  this.name = name;
  this.role = role;
  this.salute = function(){
    console.log("Hello")   // this will create seperate copy of function for each objects
  }
}
console.log(Player("star","NPC"))
let luffy= new Player("luffy","pirate");
let shanks = new Player("shanks","sea Emperor");
shanks.salute();
console.log(luffy.salute()===shanks.salute)

Player.prototype.sing = function () {
  console.log(" Bink's Sake!");
};

console.log(shanks.sing()===luffy.sing())

Player.prototype.sleep = function () {
  return `${this.name} is sleeping!`;
};

console.log(Object.getPrototypeOf(shanks))
console.log(luffy.__proto__)

// const myObj = {
//   color: "purple",
//   score: 99,
//   greet() {
//     console.log("HIII!");
//   },
// };

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  bark() {
    return `${this.name} says woof!`;
  }
  sleep() {
    return `${this.name} is sleeping!`;
  }
}

class GuideDog extends Dog {
  constructor(name, breed, owner) {
    super(name, breed);
    this.owner = owner;
  }
  alert() {
    return `${this.name} alerts you to danger.  Good dog!`;
  }
}

// function Dog(name, breed) {
//   this.name = name;
//   this.breed = breed;
//   this.bark = function () {
//     return `${this.name} says woof!`;
//   };
//   this.sleep = function () {
//     return `${this.name} is sleeping!`;
//   };
// }

// function User(username, email) {
//   this.username = username;
//   this.email = email;
//   this.isAdmin = false;
// }



// const person = {
//   sing() {
//     return "LALALA";
//   },
//   isHuman: true,
// };
