function needForSpeed(input) {
  let obj = {};
  let numOfCars = Number(input.shift());

  for (let i = 0; i < numOfCars; i++) {
    let [car, mileage, fuel] = input[i].split("|");
    if (!obj[car]) {
      obj[car] = [];
      obj[car].push(Number(mileage), Number(fuel));
    }
  }
  for (let i = numOfCars; i < input.length; i++) {
    let [command, carModel, currentMileage, currentFuel] =
      input[i].split(" : ");

    switch (command) {
      case "Drive":
        currentMileage = Number(currentMileage);
        currentFuel = Number(currentFuel);
        if (obj[carModel][1] < currentFuel) {
          console.log("Not enough fuel to make that ride");
        } else if (obj[carModel][1] > currentFuel) {
          obj[carModel][0] += currentMileage;
          obj[carModel][1] -= currentFuel;
          console.log(`${carModel} driven for ${currentMileage} kilometers. ${currentFuel} liters of fuel consumed.`);
        }
        if (obj[carModel][0] >= 100000) {
          delete obj[carModel];
          console.log(`Time to sell the ${carModel}!`);
        }
        break;

      case "Refuel":
        currentMileage = Number(currentMileage);
        obj[carModel][1] += currentMileage;
        if (obj[carModel][1] >= 75) {
          currentMileage = obj[carModel][1] - 75 - currentMileage;
          obj[carModel][1] = 75;
        }
        console.log(`${carModel} refueled with ${Math.abs(currentMileage)} liters`);
        break;

      case "Revert":
        if (obj[carModel][0] - currentMileage <= 10000) {
          obj[carModel][0] = 10000;
        } else {
          obj[carModel][0] -= currentMileage;
          console.log(`${carModel} mileage decreased by ${currentMileage} kilometers`);
        }
        break;
    }
  }
  let cars = Object.entries(obj);
  for (const [car, km] of cars) {
    console.log(`${car} -> Mileage: ${km[0]} kms, Fuel in the tank: ${km[1]} lt.`);
  }
}
needForSpeed([
  "4",
  "Lamborghini Veneno|11111|74",
  "Bugatti Veyron|12345|67",
  "Koenigsegg CCXR|67890|12",
  "Aston Martin Valkryie|99900|50",
  "Drive : Koenigsegg CCXR : 382 : 82",
  "Drive : Aston Martin Valkryie : 99 : 23",
  "Drive : Aston Martin Valkryie : 2 : 1",
  "Refuel : Lamborghini Veneno : 40",
  "Revert : Bugatti Veyron : 2000",
  "Stop",
]);
console.log("**********");
needForSpeed([
  "3",
  "Audi A6|38000|62",
  "Mercedes CLS|11000|35",
  "Volkswagen Passat CC|45678|5",
  "Drive : Audi A6 : 543 : 47",
  "Drive : Mercedes CLS : 94 : 11",
  "Drive : Volkswagen Passat CC : 69 : 8",
  "Refuel : Audi A6 : 50",
  "Revert : Mercedes CLS : 500",
  "Revert : Audi A6 : 30000",
  "Stop",
]);
