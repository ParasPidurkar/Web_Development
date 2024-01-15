class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  static meow() {
    console.log("THIS IS: ", this);
  }

  static species = "felis catus";
}
Cat.meow();
let cat1= new Cat('sharky','persian')
//console.log(cat1.meow())
console.log(Cat.species)