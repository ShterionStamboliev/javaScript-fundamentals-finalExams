function adAstra(input) {
    let days = 0;
    let dailyCalories = 2000;
    let box = [];
    let pattern = /(#|\|)(?<productName>[A-Z a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\d*\1(?<calories>\d{1,5})\1/g;
    let foodItem = pattern.exec(input)

    while (foodItem) {
        days += Number(foodItem[4]) / dailyCalories;
        box.push({product: foodItem[2], date: foodItem[3], calorie: foodItem[4]})
        foodItem = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    for (const item of box) {
        console.log(`Item: ${item.product}, Best before: ${item.date}, Nutrition: ${item.calorie}`);
    }
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
