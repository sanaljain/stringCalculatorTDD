function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    let tempDelimiter = numbers.match(/\/\/(.+)\n/);
    delimiter = new RegExp(tempDelimiter[1]);
    numbers = numbers.split("\n")[1];
  }
  let tempNumbers = numbers.split(delimiter);
  let negativeNumbers = tempNumbers.filter((num) => parseInt(num) < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      `negative numbers not allowed: ${negativeNumbers.join(", ")}`
    );
  }
  return tempNumbers.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add(""), "Output should be 0");
console.log(add("1"), "output should be 1");
console.log(add("1,2,3"), "Output should be 6");
console.log(add("1\n2,3"), "Output should be 6");
console.log(add("//;\n1;2", "Output should be 3"));
console.log(add("1,2,3,-1,-2,4,5,-5"), "Output should be 6");
