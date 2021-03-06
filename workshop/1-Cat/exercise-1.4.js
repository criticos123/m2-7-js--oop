// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good.
//    In real life, we naturally get more tired/hungry/lonely as time passes.
//    Let's add a new method, `wait`. It accepts a number of minutes as the
//    parameter. The cat's tiredness, hunger, and loneliness should increase
//    as the amount of time increases. They should also become less happy.
//
//    It's up to you to decide how quickly these values should change.

// B) Make Boots wait 20 minutes and call then console.log(boots);
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.species = "cat";
    this.tiredness = 100;
    this.hunger = 100;
    this.loneliness = 100;
    this.happiness = 0;
  }
  eat = (kibbles) => {
    this.hunger -= kibbles * 0.2;
    this.happiness += kibbles * 1.05;
  };

  play = (minutes) => {
    this.loneliness -= minutes * 3;
    this.happiness += minutes * 1.5;
  };
  sleep = (hours) => {
    this.tiredness -= hours * 5;
    this.happiness += hours * 2;
  };

  wait = (minutes) => {
    this.tiredness += minutes * 2;
    this.hunger += minutes * 1.2;
    this.loneliness += minutes * 3;
    this.happiness -= minutes * 2;
  };
}

let Boots = new Cat("boots", "siamese");
Boots.wait(20);
console.log(Boots);
