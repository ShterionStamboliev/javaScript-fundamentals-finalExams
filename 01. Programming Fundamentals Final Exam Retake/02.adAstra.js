function adAstra(input) {
    let days = 0;
    let dailyCalories = 2000;
    let box = [];
    let pattern = /(#|\|)(?<productName>[A-Z a-z]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\d*\1(?<calories>\d{1,5})\1/g;
    let foodItem = pattern.exec(input);

    while (foodItem) {
        days += Number(foodItem.groups.calories) / dailyCalories;
        box.push({
            product: foodItem.groups.productName, 
            date: foodItem.groups.date, 
            calorie: foodItem.groups.calories});
        foodItem = pattern.exec(input);
    }
    console.log(`You have food to last you for: ${Math.floor(days)} days!`);
    box.forEach(product => {
        console.log(`Item: ${product.product}, Best before: ${product.date}, Nutrition: ${product.calorie}`);
    });
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]);
