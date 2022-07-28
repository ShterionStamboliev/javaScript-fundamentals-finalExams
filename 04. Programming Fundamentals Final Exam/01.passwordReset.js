function passwordReset(input) {
  let text = input.shift();
  let str = "";
  
  for (let i = 0; i < input.length; i++) {
      let [command, ...rest] = input[i].split(" ");
    if (command === "Done") {
      console.log(`Your password is: ${text}`);
    }
    switch (command) {
      case "TakeOdd":
        for (let i = 0; i < text.length; i++) {
          if (i % 2 === 1) {
            str += text[i];
          }
        }
        text = str;
        console.log(text);
        break;

      case "Cut":
        let index = Number(rest[0]);
        let len = Number(rest[1])
        let conc = text.substring(index, index + len);
        text = text.replace(conc, '')
        console.log(text);
        break;

      case "Substitute":
        let firstSymbol = rest[0];
        let secondSymbol = rest[1];
        if (text.includes(firstSymbol)) {
          text = text.split(firstSymbol).join(secondSymbol);
          console.log(text);
        } else {
          console.log("Nothing to replace!");
        }
        break;
    }
  }
}
passwordReset([
  "Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
  "TakeOdd",
  "Cut 15 3",
  "Substitute :: -",
  "Substitute | ^",
  "Done",
]);
console.log('******');
passwordReset(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
'TakeOdd',
'Cut 18 2',
'Substitute ! ***',
'Substitute ? .!.',
'Done'
]);
// icecream::hot::summer
