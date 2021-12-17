function solve([arg]) {
    let number = Number(arg);

    switch (true) {
        case (number < 100): console.log('Less than 100'); break;
        case (number >= 100 && number <= 200): console.log('Between 100 and 200'); break;
        case (number > 200): console.log('Greater than 200'); break;
        default:
            break;
    }
}
solve(['140']);