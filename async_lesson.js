async function run() {
    return "hello";
}                        // async always returns a promise
const data =run();
console.log(data);
data.then(r=>console.log(r));

//The Promise object represents the eventual completion (or failure)
// of an asynchronous operation and its resulting value.

function returnPromise() {
    return new Promise(r => {setTimeout(() => r("hello from promise"), 10000);});
}

// without async / await
// function fun1() {
//     console.log("fun1");
//     const p = returnPromise();
//     console.log(p.then(r => console.log(r)));   // a test
//     console.log("bye...from fun1 ");
//
// }

// with async / await
async function fun2() {
    console.log("fun2");
    const result = await returnPromise();    //await cant be used w/o async .
    console.log(result.then(r=>console.log(r)));
    console.log("bye...from fun2 ");
}
// function timepass() {
//     console.log("timepass");
// }
// fun1();

fun2();
// timepass();