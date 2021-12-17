function solve([arg1, arg2, arg3]) {
    let number1 = Number(arg1);
    let number2 = Number(arg2);
    let number3 = Number(arg3);

    let sum = number1 + number2 + number3;
    let mins = Math.floor(sum / 60);
    let secs = sum % 60;

    if (secs < 10) {
        console.log((`${mins}:0${secs}`));
    }else {
        console.log(`${mins}:${secs}`);

    }
 }
solve(["35",
"45",
"44"]);