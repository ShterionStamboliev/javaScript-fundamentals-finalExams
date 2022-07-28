function thePianist(input) {
  let obj = {};
  let numberOfPieces = Number(input.shift());

  for (let i = 0; i < numberOfPieces; i++) {
    let [piece, composer, key] = input[i].split("|");
    if (!obj[piece]) {
      obj[piece] = [];
      obj[piece].push(composer, key);
    }
  }
  for (let i = numberOfPieces; i < input.length; i++) {
    let [command, ...rest] = input[i].split("|");
    if (command === "Stop") {
      for (const [songName, composerName] of Object.entries(obj)) {
        console.log(`${songName} -> Composer: ${composerName[0]}, Key: ${composerName[1]}`);
      }
    }
    switch (command) {
      case "Add":
        if (!obj[rest[0]]) {
          obj[rest[0]] = [];
          obj[rest[0]].push(rest[1], rest[2]);
          console.log(`${rest[0]} by ${rest[1]} in ${rest[2]} added to the collection!`);
        } else if (obj[rest[0]]) {
          console.log(`${rest[0]} is already in the collection!`);
        }
        break;

      case "Remove":
        if (obj[rest[0]]) {
          delete obj[rest[0]];
          console.log(`Successfully removed ${rest[0]}!`);
        } else {
          console.log(`Invalid operation! ${rest[0]} does not exist in the collection.`);
        }
        break;

      case "ChangeKey":
        if (obj[rest[0]]) {
          obj[rest[0]].pop(rest[2]);
          obj[rest[0]].push(rest[1]);
          console.log(`Changed the key of ${rest[0]} to ${rest[1]}!`);
        } else {
          console.log(`Invalid operation! ${rest[0]} does not exist in the collection.`);
        }
    }
  }
}
thePianist([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);
