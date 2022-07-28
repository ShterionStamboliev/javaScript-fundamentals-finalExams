function mirrorWords(input) {
let pattern = /(?<start>[@#]{1})(?<firstWord>[A-z]{3,})(?<middle>\1{2})(?<secondWord>[A-z]{3,})(?<end>[@#]{1})/g
let box = [];
let match = pattern.exec(input);
let validPairs = 0;
let mirroredWords = 0;

while (match) {
    let firstWord = match.groups.firstWord;
    let secondWord = match.groups.secondWord;
    let secondWordReversed = secondWord.split('').reverse().join('');
    if (firstWord === secondWordReversed) {
        box.push(firstWord.concat(' <=> ', secondWord));
        mirroredWords++;
    }
    validPairs++;
    match = pattern.exec(input);
}
validPairs === 0 ? console.log('No word pairs found!') : console.log(`${validPairs} word pairs found!`);
mirroredWords === 0 ? console.log('No mirror words!') : console.log('The mirror words are:');
console.log(box.join(', '));
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ]);
