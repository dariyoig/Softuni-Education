function solve([arg1, arg2, arg3]) {
    let b1 = Number(arg1);
    let b2 = Number(arg2);
    let h = Number(arg3);

    console.log(`Trapezoid area = ${(b1+b2) * h / 2}`);
}

solve([4, 5, 6]);