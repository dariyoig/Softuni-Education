function calculateCost([fee]) {
    
    let shoesCost = fee * 0.6;
    let jerseyCost = shoesCost * 0.8;
    let ballCost = jerseyCost / 4;
    let accesoriesCost = ballCost / 5;

    let sum = Number(fee) + shoesCost + jerseyCost + ballCost + accesoriesCost;

    console.log(sum);
}
calculateCost(["365"]);