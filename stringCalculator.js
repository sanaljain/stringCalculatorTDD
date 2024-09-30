function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    let singleTempDelimiter = numbers.match(/\/\/(.)\n/); //if single delimiter is there
    let tempDelimiter = numbers.match(/\/\/\[(.+?)\]\n/); // if multiple delimiter are there
    if (singleTempDelimiter) {
      delimiter = new RegExp(escapeRegExp(singleTempDelimiter[1]));
      numbers = numbers.split("\n")[1];
    } else if (tempDelimiter) {
      let custom = tempDelimiter[1];
      custom = escapeRegExp(custom);
      delimiter = new RegExp(custom);
      numbers = numbers.split("\n")[1];
    }
  }
  let tempNumbers = numbers.split(delimiter);
  let negativeNumbers = tempNumbers.filter((num) => parseInt(num) < 0); // check for negetive numbers
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }
  return tempNumbers.reduce((sum, num) => {
    let temp = parseInt(num);
    return temp > 1000 ? sum : sum + temp; //if any number is greater than 1000
  }, 0);
}

console.log(add(""), "Output should be 0");
console.log(add("1"), "output should be 1");
console.log(add("1,2,3"), "Output should be 6");
console.log(add("1\n2,3"), "Output should be 6");
console.log(add("//;\n1;2"), "Custom delimiterwith single delimiter");
// console.log(add("1,2,3,-1,-2,4,5,-5"), "Error");
console.log(add("2,1001,5"), "greater than 1000 discarded");
console.log(add("//[***]\n1***2***3"), "Custom multiple delimiter");
