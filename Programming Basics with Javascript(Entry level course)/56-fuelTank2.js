function solve([arg1, arg2, arg3]) {
    let petrolType = arg1;
    let petrolAmount = Number(arg2);
    let discountCard = arg3;
    let petrolCost;

    switch (petrolType) {
        case 'Diesel':
            if (discountCard === "Yes") {
                petrolCost = (petrolAmount * 2.33) - petrolAmount * 0.12;
            } else {
                petrolCost = petrolAmount * 2.33;
            }
            break;
        case 'Gasoline':
            if (discountCard === "Yes") {
                petrolCost = (petrolAmount * 2.22) - petrolAmount * 0.18;
            } else {
                petrolCost = petrolAmount * 2.22;
            }
            break;
        case 'Gas':
            if (discountCard === "Yes") {
                petrolCost = (petrolAmount * 0.93) - petrolAmount * 0.08;
            } else {
                petrolCost = petrolAmount * 0.93;
            }
            break;
        default:
            break;
    }

    if (petrolAmount >= 20 && petrolAmount <= 25)
        petrolCost = petrolCost * 0.92;
    else if (petrolAmount > 25)
        petrolCost = petrolCost * 0.9;

    console.log(`${petrolCost.toFixed(2)} lv.`);
}
solve(['Gas', 30, 'Yes'])