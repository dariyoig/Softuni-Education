function renovationCost([neededNylon, neededPaint, neededDiluent, hoursWork]) {

    let nylonCost = Number(neededNylon) * 1.50;
    let paintCost = Number(neededPaint) * 14.50;
    let diluentCost = Number(neededDiluent) * 5;
    let additioalPaintCost = (neededPaint * 0.10) * 14.50;
    let additionalNylonCost = 2 * 1.50; 
    let bagCost = 0.40;

    let sumCost = nylonCost + paintCost + diluentCost + additioalPaintCost + additionalNylonCost + bagCost;
    let workCost = (sumCost * 0.3) * hoursWork;

    console.log(sumCost + workCost);


}
renovationCost(["5 ",
"10 ",
"10 ",
"1 "])