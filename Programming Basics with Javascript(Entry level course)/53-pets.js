function solve([arg1, arg2, arg3, arg4, arg5]) {
    let daysAway = Number(arg1);
    let foodLeft = Number(arg2);
    let dailyDogFood = Number(arg3);
    let dailyCatFood = Number(arg4);
    let dailyTurtleFood = Number(arg5) / 1000;

    let foodNeeded = (dailyCatFood + dailyDogFood + dailyTurtleFood) * daysAway;

    if (foodNeeded <= foodLeft) {
        console.log(`${Math.floor(foodLeft - foodNeeded)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(foodNeeded  - foodLeft)} more kilos of food are needed.`);
    }
}
solve([2,
10,
1,
1,
1200]);