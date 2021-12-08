function calculateTime([pages, pagesPerHour, days]) {
    let hoursNeeded = pages / pagesPerHour;
    let hoursADay = hoursNeeded / days;
    console.log(hoursADay);
}

calculateTime(["212 ",
"20 ",
"2 "])