function solve([arg1, arg2]) {
    let hour = Number(arg1);
    let day = arg2;
    let state;
    switch (day) {
        case "Sunday": state = "closed"; break;
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
        case "Saturday":
            if (hour >= 10 && hour <= 18) state = "open";
            else state = "closed"; break;
        default: break;
    }
    console.log(state);
}
solve([11, "Monday"]);