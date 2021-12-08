function calculateCost(m2) {

    let pricePerM2 = 7.61;
    let price = Number(m2 * pricePerM2);
    let discount = 0.18 * price;

    console.log(`The final price is: ${price - discount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}
calculateCost(["550"]);