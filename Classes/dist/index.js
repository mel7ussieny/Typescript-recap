"use strict";
class Person {
    // constructor(first: string, last: string){
    //     this.first = first;
    //     this.last = last;
    //     this.secretMethod();
    // }
    // parameter properties shortcut
    constructor(first, last) {
        this.first = first;
        this.last = last;
        // public first: string
        // public last: string;
        this._score = 0;
    }
    get score() {
        return this._score;
    }
    secretMethod() {
        console.log("Hello From Secret Method");
    }
    set score(newScore) {
        this._score = newScore;
    }
}
class SuperPlaer extends Person {
    constructor(first, last, skills) {
        super(first, last);
        this.isAdmin = false;
        this.skills = [];
        this.skills = skills;
    }
    maxScore() {
        this._score = 9999;
    }
}
let person1 = new SuperPlaer("Mahmoud", "Hussieny", ['add', 'delete']);
console.log(person1.skills);
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(this.brand, this.color);
    }
}
const jacket1 = new Jacket("LC", "Red");
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    sayHello() {
        console.log(`Hello Employee: ${this.first} ${this.last}`);
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.first = first;
        this.last = last;
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const beety = new FullTimeEmployee("Betty", "Loka", 4000);
console.log(beety.getPay());
const bill = new PartTimeEmployee("Bill", "Jerokys", 4, 20);
console.log(bill.getPay());
