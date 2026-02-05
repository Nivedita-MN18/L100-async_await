const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function task(id, delay = 1000) {
    console.log(`Start ${id}`);
    await sleep(delay);
    console.log(`End ${id}`);
    return id;
}

// sequential
// async function sequential() {
//     console.log("sequential");
//     console.time("sequential");
//     await task(1);
//     await task(2);
//     await task(3);
//
//     console.timeEnd("sequential");
// }

//parallel
// async function parallel() {
//     console.log("parallel");
//     console.time("parallel");
//
//     await Promise.all([
//         task(1),
//         task(2),
//         task(3),
//     ]);
//     console.timeEnd("parallel");
// }
// parallel().then();
//troublesome loop

// async function loopTrouble() {
//     console.log("loop Trouble");
//     console.time("loop");
//
//     const ids = [1, 2, 3];
//
//     for (const id of ids) {
//         await task(id);
//     }
//
//     console.timeEnd("loop");
// }
// loopTrouble().then();
//limiting concurrency
// async function limited(limit = 2) {
//     console.time("limited");
//     const ids = [1, 2, 3, 4, 5];
//     let index = 0;
//
//     async function worker() {
//         while (index < ids.length) {
//             const current = index++;
//             await task(ids[current]);
//         }
//     }
//
//
//     const workers = Array.from({ length: limit }, () => worker());
//     await Promise.all(workers);
//
//     console.timeEnd("limited");
// }
// limited().then();
// CPU BLOCKING (async/await can't help)
function cpuBlock(ms = 3000) {
    const end = Date.now() + ms;
    while (Date.now() < end) {}
}

async function cpuDemo() {
    console.log("\nCPU Blocking");
    console.time("cpu");

    setTimeout(() => console.log("Timer ran after block"), 0);

    cpuBlock(3000);

    console.timeEnd("cpu");
}
cpuDemo().then();
// async function main() {
    // await sequential();
    // await parallel();
    // await loopMistake();
    // await limited(2);
    // await cpuDemo();
// }

