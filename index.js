const array = ["a", "b", "c", "d"];
const newArray = array.push("g");
array.map((x) => {
  x = x + "a";
});
console.log(array);
console.log(newArray);
