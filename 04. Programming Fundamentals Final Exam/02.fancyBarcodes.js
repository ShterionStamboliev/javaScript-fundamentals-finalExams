function fancyBarcodes(input) {
  let pattern =
    /(?<start>@#+)(?<product>[A-Z][A-Za-z0-9]{4,}[A-Z])(?<end>@#+)/
  let match = pattern.exec(input);
  let barcodesCount = Number(input.shift());
  let digitsConcat = "";

  for (const text of input) {
    match = pattern.exec(text);
    if (match) {
      for (const char of match.groups.product) {
        if (char >= 0 && char <= 9) {
          digitsConcat += char;
        }
      }
      digitsConcat.length === 0 ?
      console.log('Product group: 00') : 
      console.log(`Product group: ${digitsConcat}`);
      digitsConcat = "";
    } else {
        console.log('Invalid barcode');
    }
}
}
fancyBarcodes([
  "6",
  "@###Val1d1teM@###",
  "@#ValidIteM@#",
  "##InvaliDiteM##",
  "@InvalidIteM@",
  "@#Invalid_IteM@#",
  "@#ValiditeM@#",
]);
