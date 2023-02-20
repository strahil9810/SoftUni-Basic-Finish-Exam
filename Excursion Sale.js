function excursionSale(input) {
    let numberExcursionSea = Number(input[0]);
    let numberExcursionMountain = Number(input[1]);
    let price = 0;

    for (let index = 2; index < input.length; index++) {
        let packet = input[index];

        if (packet === 'Stop' || numberExcursionSea === 0 && numberExcursionMountain === 0) {
            break;
        }

        if (numberExcursionSea > 0) {
            if (packet === 'sea') {
                price += 680;
                numberExcursionSea--;
            }
        }

        if (numberExcursionMountain > 0) {
            if (packet === 'mountain') {
                price += 499;
                numberExcursionMountain--;
            }
        }
    }

    if (numberExcursionSea === 0 && numberExcursionMountain === 0) {
        console.log('Good job! Everything is sold.');
        console.log(`Profit: ${price} leva.`);
    }
    else {
        console.log(`Profit: ${price} leva.`);
    }
}
excursionSale(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"])