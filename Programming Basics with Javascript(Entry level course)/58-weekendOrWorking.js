function solve([arg1]) {
    if (arg1 === "Monday" || arg1 === "Tuesday" || arg1 === "Wednesday" || arg1 === "Thursday" || arg1 === "Friday")
        console.log(`Working day`);
    else if (arg1 === "Saturday" || arg1 === "Sunday")
        console.log(`Weekend`);
    else
        console.log(`Error`);
}
solve([]);