// const { log } = require("console");
// const fs = require("fs");
// // import { readFile } from "fs";

// console.log("start")
// fs.readFile("./nodejs.txt", "utf-8", (err, data)=>{
//     console.log("we are inside the callback function",data);
// })
// console.log("end");
// const fs = require('fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('/Users/joe/test.txt', { encoding: 'utf8' });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();


// const { error } = require("console");
const fs = require("fs");

console.log("start");
fs.readFile("./nodejs.txt", "utf-8", (error, data)=>{
    console.log(data);
})