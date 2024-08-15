enum OrderStatus {
    PENDING = 4,
    SHIPPED,
    DELIVERED,
    RETURNED
}

const myStatus = OrderStatus.SHIPPED;


// 5
console.log(myStatus)

// This will render JS function for enum
enum ArrowKeys {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

const move = "right";

if (move === ArrowKeys.RIGHT)
    console.log("OK")

// By adding const before `enum`, it will not render that function of enum

const enum ArrowKeys2 {
    UP = "up",
    DOWN = "down",
    LEFT = "left",
    RIGHT = "right"
}

