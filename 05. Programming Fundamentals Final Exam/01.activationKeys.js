function activationKeys(input) {
    let activationKey = input.shift();

    for (let i = 0; i < input.length; i++) {
        let [command, ...rest] = input[i].split('>>>');
        if (command === 'Generate') {
            break;
        }

        switch(command) {
            case 'Contains':
                let substr = rest;
                activationKey.includes(substr) ? console.log(`${activationKey} contains ${substr}`) : console.log('Substring not found!')
                break;

                case 'Flip':
                    let caseType = rest[0];
                    let startIndex = Number(rest[1]);
                    let endIndex = Number(rest[2]);
                let subs = activationKey.substring(startIndex, endIndex);
                if (caseType === 'Upper') {
                    subs = subs.toUpperCase();
                    activationKey = activationKey.substring(0, startIndex) + subs + activationKey.substring(endIndex);
                    console.log(activationKey);
                } else if (caseType === 'Lower') {
                    subs = subs.toLowerCase();
                    activationKey = activationKey.substring(0, startIndex) + subs + activationKey.substring(endIndex);
                    console.log(activationKey);
                }
                break;

                case 'Slice':
                    let startIndx = Number(rest[0]);
                    let endIndx = Number(rest[1]);
                    activationKey = activationKey.slice(0, startIndx) + activationKey.slice(endIndx)
                    console.log(activationKey);
                }
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);
