let age: number | string = 24;

age = "10";

// Next line not accepted
age = true;

type Point = {
    x: number,
    y: number
}

type Loc = {
    lat: number,
    long?: number
}

let userLocation: Loc | Point;

userLocation = {
    lat: 44,
    // long:44,
}


function printAge(age: number | string): void{
    console.log(`You age is ${age} years old`)
}

printAge(null)