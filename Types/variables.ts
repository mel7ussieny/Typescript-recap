/// String
let movieTitle: String = "Interstellar";

movieTitle = "Interstellar 2";
// The Next line not accepted
movieTitle = 9;

// The next line accepted as it's an function for string
movieTitle.toUpperCase()


let movieTitle2 = "365 Day";
// The next line not accepted, string converted to number

movieTitle2 = 4;

let boolValue: Boolean = true;

// Accepted
boolValue = true;

// Not Accepted
boolValue = 1;

let movies : String[] = ["Interstellar", "Titanic", "Arrival", "The Thing"];

// Another type called any, which accepted any type

let anyType: any = "Hello";

// Next line accepted
anyType = true;


// if you doesn't initialize the variable with value, so it will be "any" type

let foundMovie;

for(let movie of movies){
    if(movie == "Arrival")
        foundMovie = movie
}


// with the intialization the variable of type "any" make an impact , so it should be like this
let foundMovie2: String;

//


// Type Infernce Is the ability of typescript to determine the type of variable from the value
