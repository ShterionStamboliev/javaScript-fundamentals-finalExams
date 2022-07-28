function secretChat(input) {
  let concealedMessage = input.shift();

  for (let message of input) {
    let [command, ...rest] = message.split(":|:");
    if (command === "Reveal") {
      break;
    }

    switch (command) {
      case "InsertSpace":
        let index = Number(rest);
        let conc = concealedMessage.substring(index);
        concealedMessage = concealedMessage.substring(0, index) + " " + conc;
        console.log(concealedMessage);
        break;

      case "Reverse":
        let substr = rest.toString();
        let len = substr.length;
        if (concealedMessage.includes(substr)) {
            let subIndex = concealedMessage.indexOf(substr);
            let sliced = concealedMessage.substring(0, subIndex);
            let slicedSubstr = concealedMessage.substring(subIndex, subIndex + len).split('').reverse().join('');
            let slicedAll = concealedMessage.substring(subIndex + len)
            concealedMessage = sliced + slicedAll + slicedSubstr;
          console.log(concealedMessage);
        } else {
            console.log('error');
        }
        break;

      case "ChangeAll":
        let newSubstr = rest[0];
        let replacement = rest[1];
        if (concealedMessage.includes(newSubstr)) {
          concealedMessage = concealedMessage
            .split(newSubstr)
            .join(replacement);
          console.log(concealedMessage);
        }
    }
  }
  console.log(`You have a new text message: ${concealedMessage}`);
}
secretChat([
  "heVVodar!gniV",
  "ChangeAll:|:V:|:l",
  "Reverse:|:!gnil",
  "InsertSpace:|:5",
  "Reveal",
]);
console.log('***************');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])
  
