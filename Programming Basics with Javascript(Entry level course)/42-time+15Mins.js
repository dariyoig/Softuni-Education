function solve([arg1, arg2]) {
    let hours = Number(arg1);
    let mins = Number(arg2);

    if (mins + 15 > 59) {
        hours++;
        mins = (mins + 15) % 60;
    }else {
        mins += 15;
    }
    if (hours == 24) {
        hours = 0;
    }
    if (mins < 10) {
        console.log(`${hours}:0${mins}`);
    } else {
        console.log(`${hours}:${mins}`);
    }
}
solve(["23", "59"])