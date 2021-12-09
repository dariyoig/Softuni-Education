function sumPaint([x, y, h]) {
    

    let door = 1.2 * 2;
    let windows = (1.5 * 1.5) * 2;
    let frontAndBackWall = 2 *(x * x) - door;
    let sideWalls = 2 * (x * y) - windows;
    let roof = 2 * (x * y);
    let roofTriangles = 2 * (x * h / 2)
    let greenPaint = (frontAndBackWall + sideWalls) / 3.4;
    let redPaint = (roof + roofTriangles) / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

sumPaint(['6', '10', '5.2']);