// Tuples are array with fixed length, it's exclusive in Typescript

const color: [number, number, number] = [1,2,3];

type Responses = [ number, string ]

const goodRes: Responses = [200, "OK"];

const ArrResponses: Responses[] = [[200, "OK"], [404, "Not Found"]]

ArrResponses.push([201, "Created"])