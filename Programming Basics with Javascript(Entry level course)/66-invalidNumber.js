function solve([arg1]) {
    let number = Number(arg1);
    let isValid = (number >= 100 && number <= 200) || number == 0;

    if (!isValid)
    console.log(`invalid`);
}
solve([100])