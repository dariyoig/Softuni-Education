function calculateIncome([vegPrice, fruitPrice, vegAmount, fruitAmount]) {

    let vegIncome = vegPrice * vegAmount;
    let fruitIncome = fruitPrice * fruitAmount;
    let sumIncomeEur = (fruitIncome + vegIncome) / 1.94;

    console.log(sumIncomeEur.toFixed(2));

}
calculateIncome([0.194,
    19.4,
    10,
    10])