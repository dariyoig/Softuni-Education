function calculateCost([chickenMenus, fishMenus, veganMenus]) {
    
    let chickenCost = Number(chickenMenus) * 10.35;
    let fishCost = Number(fishMenus) * 12.40;
    let veganCost = Number(veganMenus) * 8.15;
    let menusSum = chickenCost + fishCost + veganCost;
    let desert = menusSum * 0.20;
    let delivery = 2.5;

    console.log(menusSum + desert + delivery);

}
calculateCost(["2 ",
"4 ",
"3 "])