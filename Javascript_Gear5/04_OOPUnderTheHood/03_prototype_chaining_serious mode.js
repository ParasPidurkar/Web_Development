function AnimeCharacter(name, show) {
    this.name = name;
    this.show = show;
}

AnimeCharacter.prototype.introduce = function() {
    return `Hi, I'm ${this.name} from ${this.show}!`;
};

function Ninja(name, show, specialMove) {
    AnimeCharacter.call(this, name, show);
    this.specialMove = specialMove;
}

// Setting Ninja's prototype to be an instance of AnimeCharacter
Ninja.prototype = Object.create(AnimeCharacter.prototype);
Ninja.prototype.constructor = Ninja;

Ninja.prototype.performMove = function() {
    return `${this.name} uses ${this.specialMove}!`;
};

const naruto = new Ninja("Naruto Uzumaki", "Naruto Shippuden", "Rasengan");

console.log(naruto.introduce()); // "Hi, I'm Naruto Uzumaki from Naruto!"
console.log(naruto.performMove()); // "Naruto Uzumaki uses Rasengan!"
