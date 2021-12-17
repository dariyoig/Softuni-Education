function solve([arg1, arg2, arg3]) {
    let typeOfFigure = arg1;
    let size = Number(arg2);
    let size2 = Number(arg3);
    let area = 0;

    switch (typeOfFigure) {
        case 'square': area = size * size; break;
        case 'rectangle': area = size * size2; break;
        case 'circle': area =  Math.PI * Math.pow(size, 2); break;
        case 'triangle': area = (size * size2) / 2; break; 
        default:
            break;
    }

console.log(area.toFixed(3));

}
solve (['circle', '8.55']);
