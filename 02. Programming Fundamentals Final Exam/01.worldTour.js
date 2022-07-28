function worldTour(arr) {
  let arg = arr.shift();
  let commands = arr.shift();

  while (commands !== "Travel") {
    let [command, ...text] = commands.split(":");

    switch (command) {
      case "Add Stop":
        let firstCommand = Number(text[0]);
        let secondCommand = text[1];
        if (firstCommand >= 0 && firstCommand <= commands.length) {
          arg = arg.split("");
          arg.splice(firstCommand, 0, secondCommand);
          arg = arg.join("");
          break;
        }

      case "Remove Stop":
        let startPosition = Number(text[0]);
        let endPosition = Number(text[1]);
        if (startPosition >= 0 && startPosition <= endPosition && endPosition < arg.length) {
          arg = arg.split("");
          arg.splice(startPosition, endPosition - startPosition + 1);
          arg = arg.join("");
          break;
        }

      case "Switch":
        let oldCommand = text[0];
        let newCommand = text[1];
        if (arg.includes(oldCommand)) {
          arg = arg.split(oldCommand).join(newCommand);
        }
        break;
      }
    console.log(arg);
    commands = arr.shift();
  }
  console.log(`Ready for world tour! Planned stops: ${arg}`);
}
worldTour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);
