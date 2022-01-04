function solve([arg1, arg2]) {
    let budget = Number(arg1);
    let season = arg2;
    let region;
    let price;
    let place;

    if (budget <= 100) {
        region = "Bulgaria";
        if (season === "winter") price = budget * 0.7, place = "Hotel";
        else if (season === "summer") price = budget * 0.3, place = "Camp";
    } else if (budget > 100 && budget <= 1000) {
        region = "Balkans";
        if (season === "winter") price = budget * 0.8, place = "Hotel";
        else if (season === "summer") price = budget * 0.4, place = "Camp";
    } else if (budget > 1000) {
        place = "Hotel";
        region = "Europe";
        price = budget * 0.9;
    }


    console.log(`Somewhere in ${region}`);
    console.log(`${place} - ${price.toFixed(2)}`);
}
solve(["1500", "summer"])