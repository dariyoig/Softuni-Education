function solve([arg]) {
    let restDays = Number(arg);
    let workDays = 365 - restDays;
    let playTime = restDays * 127 + workDays * 63;
    let difference;
    if (playTime < 30000) {
        difference = (30000 - playTime);
        console.log(`Tom sleeps well`);
        console.log(`${Math.floor(difference / 60)} hours and ${difference % 60} minutes less for play`);
    }else {
        difference = playTime - 30000;
        console.log(`Tom will run away`);
        console.log(`${Math.floor(difference / 60)} hours and ${difference % 60} minutes more for play`);
    }
}
solve([113]);