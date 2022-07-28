function theImitationGame(input) {
    let messageText = input.shift();

    for (const info of input) {
        let [command, ...rest] = info.split('|').filter(n => n);
        if (command === 'Decode') {
            console.log(`The decrypted message is: ${messageText}`);
        }
        switch(command) {
            case 'ChangeAll':
            while (messageText.includes(rest[0])) {
                messageText = messageText.replace(rest[0], rest[1]);
            }
            break;

            case 'Insert':
                messageText = messageText.substring(0, rest[0]) + rest[1] + messageText.substring(rest[0]);
                break;

            case 'Move':
                let sliced = messageText.slice(0, rest[0]);
                messageText = messageText.substring(rest[0]) + sliced;
        }
    }
}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log('**********');
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
  ]);