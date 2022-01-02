function solve([arg1, arg2, arg3, arg4]) {
    let poolVolume = Number(arg1);
    let firstPipeDebit = Number(arg2);
    let secondPipeDebit = Number(arg3);
    let hoursGone = Number(arg4);

    let firstPipeFill = firstPipeDebit * hoursGone;
    let secondPipeFill = secondPipeDebit * hoursGone;

    let firstPipePercent;
    let secondPipePercent;
    let filled = firstPipeFill + secondPipeFill;
    let percentFilled;
    let overflow = filled - poolVolume;
    if (poolVolume >= filled) {
        percentFilled = filled / poolVolume * 100;
        firstPipePercent = firstPipeFill / filled * 100;
        secondPipePercent = secondPipeFill / filled * 100;
        console.log(`The pool is ${percentFilled.toFixed(2)}% full. Pipe 1: ${firstPipePercent.toFixed(2)}%. Pipe 2: ${secondPipePercent.toFixed(2)}%.`);

    } else {
        console.log(`For ${hoursGone} hours the pool overflows with ${(overflow).toFixed(2)} liters.`);
    }



}
solve([1000,
    100,
    120,
    3])