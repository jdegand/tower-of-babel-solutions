var obj = {};
obj[(()=> +process.argv[2] % 2 === 0 ? "even" : "odd")()] = +process.argv[2];
obj[+process.argv[3] + +process.argv[2]] = +process.argv[3] + +process.argv[2];
console.log(obj);


//real answer
console.log({
  [+process.argv[2] % 2 === 0 ? "even" : "odd"]: +process.argv[2],
  [+process.argv[2] + +process.argv[3]]: +process.argv[2] + +process.argv[3],
});
