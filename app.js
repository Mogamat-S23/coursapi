// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// let courses = [
//     {
//     id: 1, name: 'Software Engineering'
//     },
//     {
//     id: 2, name: 'Web Development'
//     },
//     {
//     id: 3, name: "Database Management"
//     }
//     ];

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

// res.setHeader('content-Type', 'text/html');

// let path = './views/'

// if(req.url === '/'){
//     path.at += 'index.html'
//     res.write(JSON.stringify(courses))
// }else{
//     path += '404.html'
// }


// fs.readFile(path, (err, data) => {
//     if (err) {
//         console.log(err);
//         res.end();
//     } else {
//         // res.write(data);
//         res.end(data);
//     }
// })

// });

// server.listen(3000, 'localhost', () => {
//     console.log('listening for requests on port 3000')
// });


const express = require('express');
const app = express();
const port = parseInt(process.env.PORT); 
require("dotenv").config()
// env is envolment  
let courses = [
       {
         id: 1, name: 'Software Engineering'
        },
        {
        id: 2, name: 'Web Development'
        },
        {
        id: 3, name: "Database Management"
        }
];

app.listen(port, ()=> {
    console.log(`Server is running at port ${port}`);
})
app.get('/', (req, res)=> {
    res.send(courses);
});
app.get('/courses/:id', (req, res)=> {
    const index = parseInt(req.params.id) - 1;
    if(index < courses.length) {
        res.send(courses[index]);
    }else {
        res.send('Course was not found');
    }
});
