function santasHoliday(input) {
    let days = Number(input.shift());
    let typeRoom = input.shift();
    let accessment = input.shift();

    let roomPerson = 18;
    let apartment = 25;
    let presidentApartment = 35;

    let price = 0;

    if (days < 10) {
        days = days - 1;

        switch (typeRoom) {
            case 'room for one person':
                price = days * roomPerson;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;

            case 'apartment':
                price = days * apartment;
                price -= price * 0.30;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;

            case 'president apartment':
                price = days * presidentApartment;
                price -= price * 0.10;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;
        }
    }
    else if (days >= 10 && days <= 15) {
        days = days - 1;

        switch (typeRoom) {
            case 'room for one person':
                price = days * roomPerson;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;

            case 'apartment':
                price = days * apartment;
                price -= price * 0.35;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;

            case 'president apartment':
                price = days * presidentApartment;
                price -= price * 0.15;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;
        }
    }
    else if (days > 15) {
        days = days - 1;

        switch (typeRoom) {
            case 'room for one person':
                price = days * roomPerson;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;

            case 'apartment':
                price = days * apartment;
                price -= price * 0.50;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;

            case 'president apartment':
                price = days * presidentApartment;
                price -= price * 0.20;

                if (accessment == 'positive') {
                    price += price * 0.25;
                }
                else {
                    price -= price * 0.10;
                }
                break;
        }
    }
    console.log(price.toFixed(2));
}
santasHoliday(["30",
    "president apartment",
    "negative"])