function solve([arg1, arg2, arg3]) {
    let budget = Number(arg1);
    let season = arg2;
    let numberOfPeople = Number(arg3);
    let price;

    switch (season) {
        case "Summer":
        case "Autumn": price = 4200; break;
        case "Spring": price = 3000; break;
        case "Winter": price = 2600; break;
        default: break;
    }
    if (numberOfPeople <= 6) price -= price * 0.1;
    else if (numberOfPeople > 6 && numberOfPeople <= 11) price -= price * 0.15;
    else if (numberOfPeople >= 12) price -= price * 0.25;
    if (numberOfPeople % 2 == 0 && season !== "Autumn") price -= price * 0.05;

    if (budget >= price) console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`);
    else console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`);
}
solve(["3600",
"Autumn",
"6"])