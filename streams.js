const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
})

    //set header content type
    /*res.setHeader('Content-type', 'text/html');

    res.write('Welcome to My Wonder Website and My First Project');
    res.write('<h1>Welcome to My Website</h1>');
    res.write('<h2>My First Project</h2>');
    res.end();
    fs.readFile('./docs/website 2.html', (err, data) => {
        if (err){
            console.log(err);
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })

});*/
server.listen(3000, 'localhost', () => {
   console.log('listening for request on port 3000');
})