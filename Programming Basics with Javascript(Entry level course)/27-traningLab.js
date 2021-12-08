function calculateSpace([h, w]) {
    
    let hCells = Math.floor(h / 1.2);
    let wCells = Math.floor((w - 1) / 0.7);

    let cells = hCells * wCells - 3
    console.log(cells.toFixed(0));
}

calculateSpace([15, 8.9])