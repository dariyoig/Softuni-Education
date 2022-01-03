function solve([arg1, arg2]) {
    let age = Number(arg1);
    let gender = arg2;
    let title;

    switch (gender) {
        case 'm': if (age < 16)
            title = "Master";
        else
            title = "Mr.";
            break;
        case "f": if (age < 16) title = "Miss";
        else title = "Ms."
    }
    console.log(title);
}
solve([12, "f"]);