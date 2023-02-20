function uniquePINCode(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let thirdNumber = Number(input.shift());
    let isPrime = true;

    for(let firstIndex = 1; firstIndex <= firstNumber; firstIndex++){
        for(let secondIndex = 1; secondIndex <= secondNumber;secondIndex++){
            for(let thirdIndex = 1; thirdIndex <= thirdNumber; thirdIndex++){
                
                if(secondIndex == 2 || secondIndex == 3 || secondIndex == 5 || secondIndex == 7){
                    if(firstIndex % 2 == 0 && thirdIndex % 2 == 0){
                        console.log(firstIndex, secondIndex, thirdIndex);
                    }
                }
            }
        }
    }
}
uniquePINCode([8, 2, 8])