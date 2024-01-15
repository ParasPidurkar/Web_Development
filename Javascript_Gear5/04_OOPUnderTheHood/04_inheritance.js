class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.energy = 100; // Dogs have energy that decreases with actions
    }

    bark() {
        this.energy -= 10;
        console.log(`${this.name} says woof! Current energy: ${this.energy}`);
    }

    sleep() {
        this.energy = 100;
        console.log(`${this.name} is sleeping and restores energy to full.`);
    }

    play() {
        if (this.energy >= 20) {
            this.energy -= 20;
            console.log(`${this.name} is playing! Current energy: ${this.energy}`);
        } else {
            console.log(`${this.name} is too tired to play.`);
        }
    }
}

class GuideDog extends Dog {
    constructor(name, breed, owner) {
        super(name, breed);
        this.owner = owner;
    }

    alert() {
        if (this.energy >= 30) {
            this.energy -= 30;
            console.log(`${this.name} alerts ${this.owner} to danger. Good dog! Current energy: ${this.energy}`);
        } else {
            console.log(`${this.name} is too tired to alert.`);
        }
    }

    guide() {
        if (this.energy >= 40) {
            this.energy -= 40;
            console.log(`${this.name} is guiding ${this.owner}. Current energy: ${this.energy}`);
        } else {
            console.log(`${this.name} is too tired to guide.`);
        }
    }
}

// Game simulation
const buddy = new Dog("Buddy", "Golden Retriever");
buddy.bark(); // Buddy says woof! Current energy: 90
buddy.play(); // Buddy is playing! Current energy: 70
buddy.sleep(); // Buddy is sleeping and restores energy to full.

const rex = new GuideDog("Rex", "German Shepherd", "Alice");
rex.alert(); // Rex alerts Alice to danger. Good dog! Current energy: 70
rex.guide(); // Rex is guiding Alice. Current energy: 30
rex.play(); // Rex is playing! Current energy: 10
rex.alert(); // Rex is too tired to alert.
