function catDiet(input) {
    let fatPercent = Number(input.shift());
    let proteinPercent = Number(input.shift());
    let percentagePercent = Number(input.shift());
    let allCalories = Number(input.shift());
    let waterPercent = Number(input.shift());

    let allGramsFat = ((allCalories * fatPercent) / 100) / 9;
    let allGramsProtein = ((allCalories * proteinPercent) / 100) / 4;
    let allGramsPercentage = ((allCalories * percentagePercent) / 100) / 4;

    let allFood = allGramsFat + allGramsProtein + allGramsPercentage;
    let caloriesFromOneGramsFood = allCalories / allFood;
    let result = caloriesFromOneGramsFood - ((caloriesFromOneGramsFood * waterPercent) / 100);

    console.log(result.toFixed(4));
}
catDiet([30, 90, 30, 120, 12])