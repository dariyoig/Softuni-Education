function calculateSum([pencilBags, markerBags, litersDetergent, percentDiscount]) {
    let pencilPrice = Number(pencilBags) * 5.80;
    let markerPrice = Number(markerBags) * 7.20;
    let detergentPrice = Number(litersDetergent) * 1.20;

    let sum = pencilPrice + markerPrice + detergentPrice;
    let discount = sum * percentDiscount / 100;


    console.log(sum - discount);
}
calculateSum(["2 ",
"3 ",
"4 ",
"25 "])