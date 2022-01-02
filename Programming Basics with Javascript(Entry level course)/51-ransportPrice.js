function solve([arg1, arg2]) {
    let kms = Number(arg1);
    let timeOfDay = arg2;
    let taxiPrice;
    let busPrice;
    let trainPrice;

    switch (timeOfDay) {
        case 'day':
            taxiPrice = kms * 0.79 + 0.70;
            busPrice = kms * 0.09;
            trainPrice = kms * 0.06;
            break;

        case 'night':
            taxiPrice = kms * 0.90 + 0.70;
            busPrice = kms * 0.09;
            trainPrice = (kms * 10) * 0.006;
            break;
    }
    if (kms < 20) {
        console.log(taxiPrice.toFixed(2));
    } else if (kms < 100) {
        console.log(Math.min(taxiPrice, busPrice).toFixed(2));;
    } else {
        console.log(Math.min(taxiPrice, busPrice, trainPrice).toFixed(2));;
    }


}
solve([180, 'night']);