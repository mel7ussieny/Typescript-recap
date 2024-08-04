function square(num: number){
    return num * num;
}


function greet(person: string){
    return `Hello ${person}`
}

// Accepted
console.log(square(4))

// Not Accepted boolean
console.log(square(true))


console.log(greet("Mahmoud"))

function doSomething(name: String, age: Number, isFunny: Boolean){
    return `My name is ${name}, I'm ${age} years old, I'm ${isFunny ? null : "Not"} Funny`
}


// set a type for the function

const add = (x: number, y: number): number => {
    return x + y;
}

const colors: String[] = ['red', 'orange', 'green', 'blue']

// Type Void

colors.map(color =>{
    return color.toUpperCase();
})


function printTwice(): void{

    console.log(colors)
    console.log(colors)

    // Not Accepted because of void type
    return "AA";
}


// Never Type in Typescript

// It's type of function that never finish it's executing and there're some scenarios for it

// Case 1
const neverStop = () : never => {
    while(true)
        console.log("I'm still going!")
}

// Case 2

function makeError(msg: string): never{
    throw new Error(msg)
}
