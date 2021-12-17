function solve([ar1, ar2, ar3]) {
    let seriesName = ar1;
    let duration = Number(ar2);
    let breakDuration = Number(ar3);

    let lunchTime = breakDuration / 8;
    let restTime = breakDuration / 4;
    let freeTime = breakDuration - (lunchTime + restTime);

    if (freeTime >= duration)
    console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(freeTime - duration)} minutes free time.`);
    else if (freeTime < duration)
    console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(duration - freeTime)} more minutes.`);
}
solve(["Game of Thrones",
"48",
"60"])