// function orderFood() {
//     setTimeout(() => {
//         console.log("Food is ready");
//     }, 2000);
// }
//
// function eat() {
//     orderFood();
//     console.log("Eating food");
// }
// eat();

function orderFood() {
    return new Promise(r => {
        setTimeout(() => {
            console.log("Food is ready");
            r();
        }, 2000);
    });
}

async function eat() {
    await orderFood();
    console.log("Eating food");
}

eat();