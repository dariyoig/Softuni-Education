function solve([arg1, arg2, arg3]) {
    let projectionType = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);
    let price = rows * columns;

    switch (projectionType) {
        case "Premiere": price *= 12; break;
        case "Normal": price *= 7.5; break;
        case "Discount": price *= 5; break;
        default: break;
    }
    console.log(price.toFixed(2));
}
solve(["Premiere",
"10",
"12"])