function calculateCost(m2) {

    let pricePerM2 = 7.61;
    let price = Number(m2 * pricePerM2);

    console.log(`The final price is: ${(price* 0.82).toFixed(2)} lv.`);
    console.log(`The discount is: ${price * 0.18} lv.`);
}
calculateCost(["550"]);