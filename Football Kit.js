function footballKit(input) {
    let tShirtPrice = Number(input.shift());
    let wantedPrice = Number(input.shift());

    let shortsPrice = tShirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shootsPrice = (tShirtPrice + shortsPrice) * 2;

    let allSum = tShirtPrice + shortsPrice + socksPrice + shootsPrice;

    let sumAfterDiscount = allSum - (allSum * 0.15);

    if (sumAfterDiscount >= wantedPrice) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${sumAfterDiscount.toFixed(2)} lv.`);
    }
    else {
        let needePrice = wantedPrice - sumAfterDiscount;
        console.log('No, he will not earn the world-cup replica ball.');
        console.log(`He needs ${needePrice.toFixed(2)} lv. more.`);
    }
}
footballKit([55, 310])