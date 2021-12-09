function calculateCost([skumCost, cacaCost, amountPalamud, amountSafrid, amountMidi]) {
    skumCost = Number(skumCost);
    cacaCost = Number(cacaCost);
    amountPalamud = Number(amountPalamud);
    amountSafrid = Number(amountSafrid);
    amountMidi = Number(amountMidi);

    let palamudCost = ((skumCost + (skumCost * 0.6)) * amountPalamud);
    let safridCost = ((cacaCost + (cacaCost * 0.8)) * amountSafrid);
    let midiCost = amountMidi * 7.5;

    let sum = palamudCost + safridCost + midiCost;

    //console.log(arguments);
    console.log(sum.toFixed(2));
}

calculateCost(['6.90',
    '4.20',
   '1.5',
    '2.5',
    '1'])