const fs = require("fs/promises");
async function main() {
    console.log("Start");
    const data = await fs.readFile("big.txt", "utf8");
    console.log("File closed");
}
main();
console.log("End");
