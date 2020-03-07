const os = require('os');
const fs = require('fs');
const func = require('./func');
const func2 = require('./func/');
const moment = require('moment');
const http = require('http');

// API
// CRUD
// CREATE
// READ
// UPDATE
// DELETE
// /api/users
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World!');
        res.end();
    }
    if (req.url === '/api/users') {
        fs.readFile('db.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.write(data);
                res.end();
            }
        });
    }
});

server.listen(8888);
server.on('connection', (socket) => {
    console.log('New connection!');
});
// console.log(moment());

// const users = [{name: 'Ann', age: 20}];
// const newUser = {name: 'Vasya', age: 30};
//
// fs.writeFile('db.json', JSON.stringify(users), (err) => {
//     if (err) {
//         console.log(err);
//     }
// });
//
// fs.readFile('db.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         const list = JSON.parse(data);
//         list.push(newUser);
//
//         fs.writeFile('db.json', JSON.stringify(list), (err) => {
//             if (err) {
//                 console.log(err);
//             }
//         });
//     }
// });

// console.log(func(5));
// console.log(func2(5));
// console.log(global);

// console.log(os.platform());
// console.log(os.cpus());
// console.log(os.type());
