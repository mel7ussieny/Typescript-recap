function printName(person: {firstName: string, lastName: string}): void{

    console.log(`${person.firstName} ${person.firstName}`)

}

printName({firstName: ' Mahmoud', lastName: 'Hussieny'})

let coordinates: {x: number, y: number} = {x: 34, y: 2}

function randomCoordinate(): {x: number; y: number}{
    return { x: Math.random(), y: Math.random() }
}

// Excess properties if you passed arguemnt directly to function without variable , it will cause error if you passed extra agrs Like:


function singer(person:{first: string, last: string, age: number}): string{

    return `Hello My name is ${person.first} ${person.last} and my age ${person.age}`

}

// This will cause error
singer({first: 'Hassan', last: 'Ali', age: 40, isAlive: true})

// this will not

let arg = {
    first: 'Hassan',
    last: 'Ali',
    age: 42,
    isAlive: true
}

singer(arg)


// Creating Type Aliases

type Point = {
    x: number,
    y: number
}

function coordinatesMultiplier(point: Point): Point{
    return {x: point.x * 2, y: point.y * 2}
}

// Nested type annotation


type Song = {
    title: string,
    artist: string,
    numStreams: number,
    credits: {
        producer: string,
        writer: string
    }
}

const mySong: Song = {
    title: 'Unchained Melody',
    artist: 'Righteous Brohters',
    numStreams: 12873321,
    credits: {
        producer: 'Phil Spector',
        writer: 'Alex North'
    }
}


function calculatePayout(song: Song): number{

    return song.numStreams * 0.0033

}

function printSong(song: Song): void{

    console.log(`${song.title} - ${song.artist}`)

}

// Make the properties optional By Using questionmark "?"
type Point2 = {
    x:  number,
    y:  number,
    z?: number
}

const myPoint2: Point2 = {
    x: 4,
    y: 5,
    z: 8
}


// readonly modifier ,, by adding readonly before variable => that's make it only readble and prevent modification

type User = {
    readonly id: number,
    name: string
}

const user: User = {
    id: 5899,
    name: 'Mahmoud Hussieny'
}

// Next line not accepted (Modification on readonly modifier
user.id = 8899;

// Read the id only
console.log(user.id)

// Next line is accepted, there's no readonly modifier

user.name = "Ahmed Ali"


// Intersection Types

type user = {
    username: string,
    password: string,
}

type extra_options = {
    admin_from: string,
    privileges: string[]
}

type admin = user & extra_options;

let myAdmin: admin = {

    username: 'Hussieny',
    password: 'Hoss@123',
    admin_from: '10-10-2024',
    privileges: ['payment_page', 'dashboard_page']

}


