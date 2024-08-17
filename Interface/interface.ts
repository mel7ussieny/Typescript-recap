// type Point = {
//     x: number,
//     y: number
// }

// const pt: Point = {x: 1, y: 3}

interface Point {
    readonly x: number,
    y?: number
}

const pt: Point = {x: 123, y: 456}

interface Person {
    readonly id: number,
    first: string,
    last: string,
    nickname?: string,
    name(): string
}

const thomas: Person = {
    id: 123,
    first: "Thomas",
    last: "Jenny",
    name: () => {
        return "Thomas Jenny"
    }
}

// Interface with parameters
interface Product {
    name: string,
    price: number,
    applyDiscount(discount: number): number
}

const shoes: Product = {
    name: 'Blue Suede Shoes',
    price: 100,
    applyDiscount(amount: number){
        const newPrice = this.price * (1 - amount)
        this.price = newPrice;
        return newPrice;
    }
}

// 50
console.log(shoes.applyDiscount(0.5))


// Interface Reopening

interface Human{
    called: string
}

interface Human{
    age: number
}

const person1: Human = {
    called: "Ahmed",
    age: 25
}


// Extend Interface

interface AI extends Human{
    version: number
}

const openAi: AI = {
    called: 'ChatGpt',
    age: 2,
    version: 3.1
}

// Multiple Inhertance

interface AI2 extends Human,Product {
    system: string
}