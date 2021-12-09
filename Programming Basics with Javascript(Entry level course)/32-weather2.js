function printCondition([degrees]) {
    degrees = Number(degrees);

    let condition = "";

    if (degrees >= 5 && degrees < 12) {
        condition = "Cold";
    }else if (degrees >= 12 && degrees < 15) {
        condition = "Cool";

    }else if (degrees >= 15 && degrees <= 20) {
        condition = "Mild";
    }else if (degrees > 20 && degrees < 26){
        condition = "Warm";
    }else if (degrees >= 26 && degrees <= 35){
        condition = "Hot"
    }else {
        condition = "unknown";
    }

    console.log(condition);
}

printCondition(["7"]);