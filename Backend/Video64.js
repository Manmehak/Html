// Creating the custom background

const fs = require('fs');

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// calling module fs to perfrom some function
const home = fs.readFileSync('Index.html')
const services = fs.readFileSync('services.html')
const about = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')



const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  url = req.url; 
  if(url=='/'){
    res.end(home);
  }
  else if(url=='/about'){
    res.end(about);
  }
  else if(url=='/services'){
    res.end(services);
  }
  else if(url=='/contact'){
    res.end(contact);
  }
  else{
    res.statusCode=404;
    res.end("<h2>404 not found</h2>");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});