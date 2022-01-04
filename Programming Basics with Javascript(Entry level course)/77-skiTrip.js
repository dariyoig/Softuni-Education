function solve([arg1, arg2, arg3]) {
    let durationDays = Number(arg1);
    let roomType = arg2;
    let feedback = arg3;
    let price;

    switch (roomType) {
        case "room for one person": price = (durationDays - 1) * 18;
            break;
        case "apartment": price = (durationDays - 1) * 25;
            if (durationDays < 10) price -= price * 0.3;
            else if (durationDays >= 10 && durationDays <= 15) price -= price * 0.35;
            else price -= price * 0.5;
            break;
        case "president apartment": price = (durationDays - 1) * 35;
            if (durationDays < 10) price -= price * 0.1;
            else if (durationDays >= 10 && durationDays <= 15) price -= price * 0.15;
            else price -= price * 0.2;
            break;
    }

    if (feedback == "positive") price += price * 0.25;
    else price -= price * 0.1;

    console.log(price.toFixed(2));
}
solve(["14",
    "apartment",
    "positive"])