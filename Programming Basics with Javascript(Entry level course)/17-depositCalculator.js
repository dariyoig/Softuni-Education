function calculate([amount, months, percent]) {
    let lihva = (amount * (percent / 100) / 12);
    let sum = Number(amount) + lihva * Number(months);
    console.log(sum);
}
calculate(["200 ",
"3 ",
"5.7 "])