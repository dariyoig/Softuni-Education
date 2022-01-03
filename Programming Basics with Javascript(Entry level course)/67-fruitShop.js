function solve([arg1, arg2, arg3]) {
    let product = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let price;

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": switch (product) {
            case "banana": price = 2.50; break;
            case "apple": price = 1.2; break;
            case "orange": price = 0.85; break;
            case "grapefruit": price = 1.45; break;
            case "kiwi": price = 2.70; break;
            case "pineapple": price = 5.5; break;
            case "grapes": price = 3.85; break;
            default: break;
        } break;
        case "Saturday":
        case "Sunday": switch (product) {
            case "banana": price = 2.70; break;
            case "apple": price = 1.25; break;
            case "orange": price = 0.90; break;
            case "grapefruit": price = 1.60; break;
            case "kiwi": price = 3; break;
            case "pineapple": price = 5.6; break;
            case "grapes": price = 4.2; break;
            default: break;
        } break;
        default: break;
    }

    if (price)
        console.log((price * quantity).toFixed(2));
    else
        console.log(`error`);
}
solve(["apple",
    "Tuesday",
    "2"])