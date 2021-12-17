function solve([ar1, ar2, ar3]) {
    let budget = Number(ar1);
    let statists = Number(ar2);
    let clothesPrice = Number(ar3);

    let decourCost = budget * 0.1;
    let sumClothesPrice = statists * clothesPrice;
    
    if (statists >= 150)
    sumClothesPrice -= sumClothesPrice * 0.1;

    let sumCost = decourCost + sumClothesPrice;

    if (budget >= sumCost) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budget - sumCost).toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(sumCost - budget).toFixed(2)} leva more.`);
    }


}
solve(["20000",
"120",
"55.5"]);