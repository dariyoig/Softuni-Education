function solve([arg1, arg2]) {
    let town = arg1;
    let sales = Number(arg2);
    let comission;

    switch (town) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) comission = sales * 0.05;
            else if (sales > 500 && sales <= 1000) comission = sales * 0.07;
            else if (sales > 1000 && sales <= 10000) comission = sales * 0.08;
            else if (sales > 10000) comission = sales * 0.12;
            else comission = "error";
            break;
        case "Varna":
            if (sales >= 0 && sales <= 500) comission = sales * 0.045;
            else if (sales > 500 && sales <= 1000) comission = sales * 0.075;
            else if (sales > 1000 && sales <= 10000) comission = sales * 0.1;
            else if (sales > 10000) comission = sales * 0.13;
            else comission = "error";
            break;
        case "Plovdiv":
            if (sales >= 0 && sales <= 500) comission = sales * 0.055;
            else if (sales > 500 && sales <= 1000) comission = sales * 0.08;
            else if (sales > 1000 && sales <= 10000) comission = sales * 0.12;
            else if (sales > 10000) comission = sales * 0.145;
            else comission = "error";
            break;

        default: comission = 'error'; break;
    }
    if (comission === "error") console.log(comission);
    else console.log(comission.toFixed(2));;
}
solve(["Kaspichan",
    "-50"])