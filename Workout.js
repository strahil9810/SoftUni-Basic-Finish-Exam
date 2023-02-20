function workout(input) {
    let numberDays = Number(input.shift());
    let kilometerFirstDay = Number(input.shift());
    let allKilometer = kilometerFirstDay;

    for(let index = 1; index <= numberDays; index++){
        let percentIncreases = Number(input.shift());

        kilometerFirstDay = kilometerFirstDay + kilometerFirstDay * (percentIncreases / 100);
        allKilometer += kilometerFirstDay;
    }
    
    if(allKilometer >= 1000){
        let manyKilometers = Math.ceil(allKilometer - 1000);
        console.log(`You've done a great job running ${manyKilometers} more kilometers!`);
    }
    else{
        let moreKilometers = Math.ceil(1000 - allKilometer);
        console.log(`Sorry Mrs. Ivanova, you need to run ${moreKilometers} more kilometers`);
    }
}
workout(["5",
    "30",
    "10",
    "15",
    "20",
    "5",
    "12"])