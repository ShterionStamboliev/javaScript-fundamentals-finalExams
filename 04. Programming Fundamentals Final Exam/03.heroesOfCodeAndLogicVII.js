function heroesOfCodeAndLogicVII(input) {
  let obj = {};
  let numOfHeroes = Number(input.shift());

  for (let i = 0; i < numOfHeroes; i++) {
    let [heroName, heroHp, heroMp] = input[i].split(" ");
    heroHp = Number(heroHp);
    heroMp = Number(heroMp);
    if (!obj[heroName]) {
      obj[heroName] = { heroHp, heroMp };
    }
  }
  for (let i = numOfHeroes; i < input.length; i++) {
    let [command, ...rest] = input[i].split(" - ");
    if (command === "End") {
      break;
    }
    switch (command) {
      case "CastSpell":
        let hero = rest[0];
        let mana = Number(rest[1]);
        let spell = rest[2];
        if (obj[hero].MP >= mana) {
          obj[hero].MP -= mana;
          console.log(`${hero} has successfully cast ${spell} and now has ${obj[hero].MP} MP!`);
        } else {
          console.log(`${hero} does not have enough MP to cast ${spell}!`);
        }
        break;

      case "TakeDamage":
        let heroName = rest[0];
        let damageTaken = Number(rest[1]);
        let attacker = rest[2];
        if (obj[heroName].HP - damageTaken > 0) {
          obj[heroName].HP -= damageTaken;
          console.log(`${heroName} was hit for ${damageTaken} HP by ${attacker} and now has ${obj[heroName].HP} HP left!`);
        } else {
          console.log(`${heroName} has been killed by ${attacker}!`);
          delete obj[heroName];
        }
        break;

      case "Recharge":
        let nameOfHero = rest[0];
        let rechargeAmount = Number(rest[1]);
        let totalMana = obj[nameOfHero].MP + rechargeAmount;

        if (totalMana > 200) {
          console.log(`${nameOfHero} recharged for ${200 - obj[nameOfHero].MP} MP!`);
          obj[nameOfHero].MP = 200;
        } else {
          obj[nameOfHero].MP = totalMana;
          console.log(`${nameOfHero} recharged for ${rechargeAmount} MP!`);
        }
        break;

      case "Heal":
        let heroNameHeal = rest[0];
        let heroHeal = Number(rest[1]);
        let totalHeal = obj[heroNameHeal].HP + heroHeal;

        if (totalHeal > 100) {
          console.log(`${heroNameHeal} healed for ${100 - obj[heroNameHeal].HP} HP!`);
          obj[heroNameHeal].HP = 100;
        } else {
          obj[heroNameHeal].HP = totalHeal;
          console.log(`${heroNameHeal} healed for ${heroHeal} HP!`);
        }
        break;
    }
  }
  for (const hero of Object.entries(obj)) {
    console.log(hero[0]);
    console.log(`  HP: ${obj[hero[0]].HP}`);
    console.log(`  MP: ${obj[hero[0]].MP}`);
  }
}
heroesOfCodeAndLogicVII([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End",
]);
console.log("**************");
heroesOfCodeAndLogicVII([
  "4",
  "Adela 90 150",
  "SirMullich 70 40",
  "Ivor 1 111",
  "Tyris 94 61",
  "Heal - SirMullich - 50",
  "Recharge - Adela - 100",
  "CastSpell - Tyris - 1000 - Fireball",
  "TakeDamage - Tyris - 99 - Fireball",
  "TakeDamage - Ivor - 3 - Mosquito",
  "End",
]);
