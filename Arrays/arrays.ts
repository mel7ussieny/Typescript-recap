// Syntax type[] => string[], number[]

let users: string[] = ["Ahmed", "Ali", "Fawzy"]
// Another Syntax Array<Type>

let activeUsers: Array<string> = ['Ahmed', 'Ali', 'Ibrahim']

// Boolean Arrays

const bools: boolean[] = [true, true, false]


// with the another syntax

const bools2: Array<boolean> = [true, true, true]

// U can make the array is type of custom type like coordinate of (x, y)

type cords = {
    x: number,
    y: number,
    z? : number
}

const coordinates2: Array<cords> = [
    {x: 4, y: 4},
    {x: 1, y: 2, z: 8}
]

// Multi-dimension array

const boards: Array<Array<string>> = [["X", "O", "X"], ["X", "O", "X"], ["X", "O", "X"]]


// Same like string[][]