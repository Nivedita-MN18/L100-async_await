async function f() {
    while (true) {} // still blocks
    console.log("B");
}
f();
console.log("C");

// adding async before a function wont make a function asynchronous