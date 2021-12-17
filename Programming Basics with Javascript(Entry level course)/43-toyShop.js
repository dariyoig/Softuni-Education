function solve([ar1, ar2, ar3, ar4, ar5, ar6]) {
    let vacationPrice = Number(ar1);

    let puzzles = Number(ar2);
    let dolls = Number(ar3);
    let bears = Number(ar4);
    let minions = Number(ar5);
    let trucks = Number(ar6)

    let puzzlePrice = 2.6;
    let dollprice = 3;
    let bearPrice = 4.1;
    let minionPrice = 8.2;
    let truckPrice = 2;

    let amountSum = puzzles + dolls + bears + minions + trucks;
    let priceSum = puzzles * puzzlePrice + dolls * dollprice + bears * bearPrice + minions * minionPrice + trucks * truckPrice;

    if (amountSum >= 50){
        priceSum -= priceSum * 0.25;
    }
    priceSum -= priceSum * 0.1;

    if (priceSum >= vacationPrice) {
        console.log(`Yes! ${(priceSum - vacationPrice).toFixed(2)} lv left.`);
    }else {
        console.log(`Not enough money! ${(vacationPrice - priceSum).toFixed(2)} lv needed.`);
    }
}
solve(["40.8",
"20",
"25",
"30",
"50",
"10"]);