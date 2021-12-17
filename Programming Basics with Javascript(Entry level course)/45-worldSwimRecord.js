function solve([ar1, ar2, ar3]) {
    let record = Number(ar1);
    let meters = Number(ar2);
    let secPerMeter = Number(ar3);

    let slow = Math.floor(meters / 15) * 12.5;
    let ivanchoTime = meters * secPerMeter + slow;
    
    if (ivanchoTime < record)
        console.log(`Yes, he succeeded! The new world record is ${ivanchoTime.toFixed(2)} seconds.`);
    else if (ivanchoTime >= record)
    console.log(`No, he failed! He was ${(ivanchoTime - record).toFixed(2)} seconds slower.`);
    
}
solve(["55555.67",
"3017",
"5.03"]);