function solve([arg1, arg2, arg3, arg4]) {
    let area = Number(arg1);
    let grapesPerSquare = Number(arg2);
    let litersWineNeeded = Number(arg3);
    let numberOfWorkers = Number(arg4);

    let producedWine = (area * grapesPerSquare / 2.5) * 0.4;

    if (producedWine >= litersWineNeeded) {
        let remainder = producedWine - litersWineNeeded;
        console.log(`Good harvest this year! Total wine: ${Math.floor(producedWine)} liters.`);
        console.log(`${Math.ceil(remainder)} liters left -> ${Math.ceil(remainder / numberOfWorkers)} liters per person.`);
    }else{
        console.log(`It will be a tough winter! More ${Math.floor(litersWineNeeded - producedWine)} liters wine needed.`);
    }
}
solve([650, 2, 175, 3]);