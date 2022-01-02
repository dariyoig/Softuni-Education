function solve([arg1, arg2, arg3]) {
    let hoursNeeded = Number(arg1);
    let numberOfDays = Number(arg2);
    let overtime = (Number(arg3) * 2) * numberOfDays;

    let sumOfHours = Math.floor((numberOfDays * 0.9) * 8 + overtime);

    if (hoursNeeded <= sumOfHours) {
        console.log(`Yes!${sumOfHours - hoursNeeded} hours left.`);
    }else {
        console.log(`Not enough time!${hoursNeeded - sumOfHours} hours needed.`);
    }
}
solve([90, 7, 3]);
