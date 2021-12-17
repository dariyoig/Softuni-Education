function solve([ar1, ar2, ar3, ar4]) {
    let budget = Number(ar1);
    let gpu = Number(ar2);
    let cpu = Number(ar3);
    let ram = Number(ar4);

    let gpuPrice = gpu * 250;
    let cpuPrice = cpu * (gpuPrice * 0.35);
    let ramPrice = ram * (gpuPrice * 0.1);

    let sum = gpuPrice + cpuPrice + ramPrice
    if (gpu > cpu)
    sum -= sum * 0.15;

    if (budget >= sum)
    console.log(`You have ${(budget - sum).toFixed(2)} leva left!`);
    else if (budget < sum)
    console.log(`Not enough money! You need ${(sum - budget).toFixed(2)} leva more!`);
}
solve(["900",
"2",
"1",
"3"]);