// console.log("Hello World") ; 


// num1 = 2;
// num2 = 3;
// let X = "zustin gwapo"

// sum = num1 + num2;
// diff = num1 - num2;
// prod = num1 * num2;
// quo = num1 / num2;

// console.log("The sum of " + num1 + " & " + num2 + " is " + sum);
// console.log("The difference of " + num1 + " & " + num2 + " is " + diff);
// console.log("The product of " + num1 + " & " + num2 + " is " + prod);
// console.log("The quotient of " + num1 + " & " + num2 + " is " + quo);
//  console.log(X) 
//  console.log("This is the Lab/factorial") ;




// _________________________________________________________________________



// FUnction 

// function greet() {

//   console.log("hilo niggas") ;

// }

// greet();


// Function with Parameter

// function  greet(name) {

// console.log("Hello "+ name + " welcome to the program!") ;


// }

// greet("ambot") ;



// function greet(name) {
//     console.log("Hello "+ name + " welcome to the program!") ;
// }

// greet("ambot") ;



// Function with Return Value

// function add(num1, num2) {
//     return num1 + num2;
// }           

// let sum = add(5, 10) ;
// console.log("The sum is: " + sum) ;     


// Function Arrow

// const multiply = (x, y) => x * y;

// console.log(multiply(4, 6)); // Output: 24


// __________________________________________________________________________


// Variables
// let name = "Ronie";
// const age = 52;

// // Functions
// function greet(user) {
//   return "Hello, " + user + "!";
// }

// Conditional Statement


// let name = "Ronie";
// const age = 52;


// if (age > 18) {
//   console.log(name + " is an adult.");
// } else {
//   console.log(name + " is a minor.");
// }

// Loop
// for (let i = 1; i <= 3; i++) {
//   console.log("Count: " + i);
// }

// Using the function
// console.log(greet(name));



// ___________________________________________________________________________

//  OOP Principles in JavaScript

// Base Class (Encapsulation: properties and methods grouped together)
class Hero {
  constructor(name, health, attack) {
    this.name = name;
    this.health = health;
    this.attack = attack;
  }

  // Method to show health
  getHealth() {
    return this.health;
  }
}

// Inheritance: Warrior and Mage extend Hero
class Warrior extends Hero {
  useAbility() {
    console.log(`${this.name} uses a powerful strike!`);
  }
}

class Mage extends Hero {
  constructor(name, health, attack, mana) {
    super(name, health, attack); // inherit from Hero
    this.mana = mana;
  }

  useAbility() {
    console.log(`${this.name} casts a fireball! Mana left: ${this.mana}`);
  }
}

// Polymorphism: different useAbility() implementations
let hero1 = new Warrior("Aragorn", 100, 20);
let hero2 = new Mage("Gandalf", 80, 15, 50);

hero1.useAbility();  // Aragorn uses a powerful strike!
hero2.useAbility();  // Gandalf casts a fireball! Mana left: 50

// Abstraction (only showing needed details)
console.log(hero1.getHealth()); // 100


// Encapsulation → Properties (name, health, attack) + methods (getHealth) are inside the class.

// Inheritance → Warrior and Mage inherit from Hero.

// Polymorphism → Both Warrior and Mage have useAbility() but behave differently.

// Abstraction → We only expose needed methods (like getHealth), hiding internal details.







// _____________________________________________________________________



// class Car {
//  constructor(brand, model, year) {
//    this.brand = brand;
//    this.model = model;
//    this.year = year;
//  }

//  displayInfo() {
//    console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
//  }
// }

// class ElectricCar extends Car {
//  constructor(brand, model, year, batteryCapacity) {
//    super(brand, model, year);
//    this.batteryCapacity = batteryCapacity; // in kWh
//  }

// }

//   displayInfo() {
   
//      console.log(`Car Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Battery: ${this.batteryCapacity} kWh`);
//   }

//    charge() {
//      console.log(`${this.brand} ${this.model} is charging...`);
//    }
 



// let car = new Car('Toyota', 'Corolla', 2020);
// car.displayInfo(); // Output: Car Brand: Toyota, Model: Corolla, Year: 2020

// let electricCar = new ElectricCar('Tesla', 'Model 3', 2021, 75);
// electricCar.displayInfo();

// electricCar.charge();

// _____________________________________________________________________


// === BASIC SYNTAX ===
// let name = "Alice";    // variable
// let age = 20;          // number
// console.log("Hello " + name + "! You are " + age + " years old."); // printing

// // === CONDITIONAL STATEMENTS ===
// if (age < 13) {
//     console.log("You are a child.");
// } else if (age < 18) {
//     console.log("You are a teenager.");
// } else {
//     console.log("You are an adult.");
// }

// // === FUNCTIONS ===
// function greetUser(username) {
//     return "Welcome, " + username + "!";
// }
// console.log(greetUser(name)); // calling the function

// // === BASIC OOP ===
// // Base class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
//     }
// }

// // Inheritance (Student extends Person)
// class Student extends Person {
//     constructor(name, age, grade) {
//         super(name, age);  // call parent constructor
//         this.grade = grade;
//     }
//     study() {
//         console.log(`${this.name} is studying for grade ${this.grade}.`);
//     }
// }

// // Create objects
// let person1 = new Person("Bob", 30);
// let student1 = new Student("Charlie", 16, 10);

// // Call methods
// person1.introduce();
// student1.introduce(); // inherited from Person
// student1.study();     // specific to Student



// ___________________________________________________________________________________________________

class Student {
    constructor(name, age, average) {
        this.name = name;
        this.age = age;
        this.average = average;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Average: ${this.average}`);
    }
}

class Passed extends Student {
    constructor(name, age, average) {
        super(name, age, average);
    }
    displayInfo() {
        super.displayInfo();
        console.log("Status: Passed");
    }
}

class Failed extends Student {
    constructor(name, age, average) {
        super(name, age, average);
    }
    displayInfo() {
        super.displayInfo();
        console.log("Status: Failed");
    }
}

let student1 = new Passed("Alice", 20, 85);
let student2 = new Failed("Bob", 22, 45);

student1.displayInfo();
student2.displayInfo();


// ____________________________________________________________________________________________________


