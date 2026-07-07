// import data from "../tests/test_data/employee.json" with { type: "json" };

// console.log(data.name);
// console.log(data.age);
// console.log(data.city);

// import fs from "fs";
// // fs --> File System , It is in bult module in Node.js, used to read , write, delete and upate file.
// // in fs module we have method  -- readFileSync() --> it is used to read the file synchronously,
// // it will block the execution until the file is read completely.

// const data = fs.readFileSync("./tests/test_data/employee.json", "utf-8");
// console.log(data);
// // JSON.parse() --> it is used to convert JSON string into JavaScript object.
// const employee = JSON.parse(data);
// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.city);

const name = "Admin";
console.log(`Adacting browser open ${name}`);
