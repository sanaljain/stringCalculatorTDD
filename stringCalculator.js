function add(numbers) {
  if (numbers === "") return 0;
  let tempNumbers = numbers.split(/[\n,]/);
  return tempNumbers.reduce((sum, num) => sum + parseInt(num), 0);
}

console.log(add(""), "Output should be 0");
console.log(add("1"), "output should be 1");
console.log(add("1,2,3"), "Output should be 6");
console.log(add("1\n2,3"), "Output should be 6");
