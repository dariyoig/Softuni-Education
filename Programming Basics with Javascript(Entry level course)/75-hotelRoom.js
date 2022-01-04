function solve([arg1, arg2]) {
    let month = arg1;
    let nights = Number(arg2);
    let studioPrice;
    let apartmentPrice;

    if (month == "May" || month == "October") {
        studioPrice = 50 * nights;
        apartmentPrice = 65 * nights;
        if (nights > 7 && nights <= 14) studioPrice -= studioPrice * 0.05;
        else if (nights > 14) studioPrice -= studioPrice * 0.3;

    } else if (month == "June" || month == "September") {
        studioPrice = 75.20 * nights;
        apartmentPrice = 68.70 * nights;
        if (nights > 14) studioPrice -= studioPrice * 0.2;
    } else if (month == "July" || month == "August") {
        studioPrice = 76 * nights;
        apartmentPrice = 77 * nights;
    }
    if (nights > 14) {
        apartmentPrice -= apartmentPrice * 0.1;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);

}
solve(["August",
    "0"])