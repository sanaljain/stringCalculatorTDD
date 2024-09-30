function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    let delimiterPart = numbers.match(/\/\/(.+)\n/);
    console.log(delimiterPart);
    delimiter = new RegExp(delimiterPart[1]);
    console.log(delimiter);
    numbers = numbers.split("\n")[1];
    console.log(numbers);
  }
  let tempNumbers = numbers.split(delimiter);
  return tempNumbers.reduce((sum, num) => sum + parseInt(num), 0);
}

// console.log(add(""), "Output should be 0");
// console.log(add("1"), "output should be 1");
// console.log(add("1,2,3"), "Output should be 6");
// console.log(add("1\n2,3"), "Output should be 6");
console.log(add("//;\n1;2;3"));
