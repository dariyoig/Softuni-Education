function solve([arg1]) {
    
    switch (arg1) {
        case "crocodile":
        case "tortoise":
        case "snake": console.log(`reptile`); break;
        case "dog": console.log(`mammal`); break;
        default: console.log(`unknown`); break;
    }
}
solve([]);