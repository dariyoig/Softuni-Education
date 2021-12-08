function calculateTime([name, numberOfProjects]) {

    let timeNeeded = Number(numberOfProjects * 3);

    console.log(`The architect ${name} will need ${timeNeeded} hours to complete ${numberOfProjects} project/s.`);
}

calculateTime(["Sanya ","9 "]);