function pirates(input) {
    let indexOfSail = input.indexOf('Sail');
    let obj = {};

    for (let i = 0; i < indexOfSail; i++) {
        let [city, population, gold] = input[i].split('||');
        population = Number(population);
        gold = Number(gold);
        if (!obj[city]) {
            obj[city] = { population, gold }
        } else {
            obj[city].population += population;
            obj[city].gold += gold;
        }
    }
    for (let i = indexOfSail; i < input.length; i++) {
        let [command, ...rest] = input[i].split('=>');
        if (command === 'End') {
            break;
        }
        switch(command) {
            case 'Plunder':
                let town = rest[0];
                let peopleKilled = Number(rest[1]);
                let goldStolen = Number(rest[2]);
                obj[town].population -= peopleKilled;
                obj[town].gold -= goldStolen;
                console.log(`${town} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`);
                if (obj[town].population === 0 || obj[town].gold === 0) {
                    delete obj[town]
                    console.log(`${town} has been wiped off the map!`);
                }
                break;

                case 'Prosper':
                    let townName = rest[0];
                    let prosperAmount = Number(rest[1]);
                    if (prosperAmount > 0) {
                        obj[townName].gold += prosperAmount;
                        console.log(`${prosperAmount} gold added to the city treasury. ${townName} now has ${obj[townName].gold} gold.`);
                    } else {
                        console.log('Gold added cannot be a negative number!');
                        break;
                    }
        }
    }
    let cityCount = Object.entries(obj).length;
    if (cityCount === 0) {
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    } else {
        console.log(`Ahoy, Captain! There are ${cityCount} wealthy settlements to go to:`);
    }
    for (const city of Object.entries(obj)) {
        console.log(`${city[0]} -> Population: ${obj[city[0]].population} citizens, Gold: ${obj[city[0]].gold} kg`);
    }
}
pirates(["Tortuga||345000||1250",
"Santo Domingo||240000||630",
"Havana||410000||1100",
"Sail",
"Plunder=>Tortuga=>75000=>380",
"Prosper=>Santo Domingo=>180",
"End"]);