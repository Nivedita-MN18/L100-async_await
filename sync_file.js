const fs = require("fs");
console.log("Start");
// synchronous
const data = fs.readFileSync("/Users/Nivedita.M/WebstormProjects/async_demo/big.txt", "utf8");
console.log("File reading finished  ");
console.log("End");
