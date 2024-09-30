function add(numbers) {
  if (numbers === "") return 0;
  return parseInt(numbers);
}

console.log(add(""), "Output should be 0");
console.log(add("1"), "output should be 1");
