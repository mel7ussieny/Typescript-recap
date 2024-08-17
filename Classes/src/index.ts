class Person{
    // public first: string
    // public last: string;
    protected _score: number = 0;

    // constructor(first: string, last: string){
    //     this.first = first;
    //     this.last = last;

    //     this.secretMethod();
    // }


    // parameter properties shortcut

    constructor(public first: string, public last: string){}

    get score(){
        return this._score;
    }

    private secretMethod(){
        console.log("Hello From Secret Method")
    }

    set score(newScore: number){
        this._score = newScore;
    }

}

class SuperPlaer extends Person{
    public isAdmin: boolean = false;
    public skills: string[] = [];

    constructor(first: string, last: string, skills: string[]){
        super(first, last)
        this.skills = skills
    }
    maxScore(){
        this._score = 9999;
    }

}
let person1 = new SuperPlaer("Mahmoud", "Hussieny", ['add', 'delete']);
console.log(person1.skills)

// console.log(person1.score)

// console.log(person1.secretMethod())

// Interfaces With Classes

interface Colorful{
    color: string;
}
interface Printable{
    print(): void
}
class Bike implements Colorful{
    constructor(public color: string){}
}

class Jacket implements Colorful, Printable{
    constructor(public brand: string, public color: string){}

    print(): void{
        console.log(this.brand, this.color)
    }
}

const jacket1 = new Jacket("LC", "Red");


abstract class Employee{
    constructor(public first: string, public last:string){}
    abstract getPay(): number;

    public sayHello(): void{
        console.log(`Hello Employee: ${this.first} ${this.last}`)
    }

}

class FullTimeEmployee extends Employee{
    constructor(public first: string, public last:string, private salary: number){
        super(first, last)
    }
    getPay(): number{
        return this.salary
    }
}

class PartTimeEmployee extends Employee{

    constructor(
        public first: string,
        public last: string,
        private hourlyRate: number,
        private hoursWorked: number
    ){
        super(first, last)
    }

    getPay(): number{
        return this.hourlyRate * this.hoursWorked
    }


}

const beety = new FullTimeEmployee("Betty", "Loka", 4000);

console.log(beety.getPay())

const bill = new PartTimeEmployee("Bill", "Jerokys", 4 , 20);

console.log(bill.getPay())
