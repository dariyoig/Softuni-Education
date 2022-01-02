function solve([arg1, arg2]) {
    let petrolType = arg1
    let litersIn = Number(arg2);
    switch (petrolType) {
        case 'Diesel': petrolType = 'diesel'; break;
        case 'Gasoline': petrolType = 'gasoline'; break;
        case 'Gas': petrolType = 'gas'; break;
        default: break;
    }

    if (petrolType !== 'diesel' && petrolType !== 'gasoline' && petrolType !== 'gas') {
        console.log(`Invalid fuel!`);
    } else if (litersIn >= 25) {
        console.log(`You have enough ${petrolType}.`);
    } else {
        console.log(`Fill your tank with ${petrolType}!`);
    }
}
solve(['Diesel', 10]);