async function task() {
    console.log("A");
    await new Promise(r => setTimeout(r, 2000));
    console.log("B");
}

task();
console.log("C");
