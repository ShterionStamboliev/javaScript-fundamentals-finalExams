function emojiDetector(input) {
  let pattern = /(:{2}|\*{2})(?<emoji>[A-Z][a-z]{2,})\1/g
  let numsPattern = /\d/;
  let text = input.shift();
  let match = pattern.exec(text);
  let cool = 1;
  let box = [];
  let emojiCount = 0;
  let emojiPoints = 0;


  text.split('').forEach(n => {
    if (n.match(numsPattern)) {
      cool *= Number(n.match(numsPattern)[0]);
    }
  });
  console.log(`Cool threshold: ${cool}`);

  while (match) {
    let word = match.groups.emoji;
    emojiCount++;

    for (let i = 0; i < word.length; i++) {
      let currentEmoji = word[i]
      let emojiCoolness = currentEmoji.charCodeAt();
      emojiPoints += emojiCoolness;
    }
    if (emojiPoints > cool) {
      box.push(match[0]);
    }
    emojiPoints = 0;
    match = pattern.exec(text);
  }
  console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
  box.forEach(word => console.log(word));
  }
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"
]);
console.log('888888');
emojiDetector(['5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::'])
