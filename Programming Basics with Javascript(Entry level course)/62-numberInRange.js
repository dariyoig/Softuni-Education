function solve([arg1]) {
    let number = Number(arg1);
    let isRight = (number >= -100 && number <= 100) && number !== 0;

    if (isRight) console.log(`Yes`);
    else console.log(`No`);
}
solve([-25])