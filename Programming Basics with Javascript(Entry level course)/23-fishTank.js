function calculateLiters([length, width, height, percent]) {
    let v = Number(length) * Number(width) * Number(height);
    let vBusy= v * (percent / 100);
    let vFreeInDm = (v - vBusy) / 1000;

    console.log(vFreeInDm);
}
calculateLiters(["85 ",
"75 ",
"47 ",
"17 "])