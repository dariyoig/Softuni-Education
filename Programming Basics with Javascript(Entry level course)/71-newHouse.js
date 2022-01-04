function solve([arg1, arg2, arg3]) {
    let flowerType = arg1;
    let flowerQuantity = Number(arg2);
    let budget = Number(arg3);
    let price;

    switch (flowerType) {
        case "Roses": price = flowerQuantity * 5;
            if (flowerQuantity > 80) price -= price * 0.1;
            break;
        case "Dahlias": price = flowerQuantity * 3.8;
            if (flowerQuantity > 90) price -= price * 0.15;;
            break;
        case "Tulips": price = flowerQuantity * 2.8;
            if (flowerQuantity > 80) price -= price * 0.15;;
            break;
        case "Narcissus": price = flowerQuantity * 3;
            if (flowerQuantity < 120) price += price * 0.15;;
            break; 
        case "Gladiolus": price = flowerQuantity * 2.5;
            if (flowerQuantity < 80) price += price * 0.20;
            break;
        default: break;
    }


    if (budget > price) console.log(`Hey, you have a great garden with ${flowerQuantity} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`);
    else console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);


}
solve(["Tulips",
"70",
"260"])