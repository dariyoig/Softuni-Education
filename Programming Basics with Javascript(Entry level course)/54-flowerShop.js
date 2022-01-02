function solve([arg1, arg2, arg3, arg4, arg5]) {
    let priceMongol = Number(arg1) * 3.25;
    let priceZumbul = Number(arg2) * 4;
    let priceRoses = Number(arg3) * 3.5;
    let priceCactus = Number(arg4) * 8;
    let priceGift = Number(arg5);

    let orderSum = (priceCactus + priceMongol + priceRoses + priceZumbul) * 0.95;

    if (orderSum >= priceGift) {
        console.log(`She is left with ${Math.floor(orderSum - priceGift)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(priceGift - orderSum)} leva.`);
    }

}
solve([2, 3, 5, 1, 50]);