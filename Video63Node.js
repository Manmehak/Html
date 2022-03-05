// console.log('Hello World');

// Random code by node js site
const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html>
      <head>
          <title>Payment Form</title>
      </head>
      <body>
          <h1>&nbsp;&nbsp;&nbsp;&nbsp;Payment Form </h1>
  
          <h3>User Details</h3>
          <form action="">
              <label for="name">Name: </label>
              <div>
                  <input type="text" id="name" required>
              </div>
              <br>
  
              <label for="gender" >Gender: </label>
              <div>
                  Male  <input type="radio" name="gender">
                  Female  <input type="radio" name="gender">
                  Others  <input type="radio" name="gender">
              </div>
              <br>
  
              <label for="address">Address: </label>
              <div>
                  <textarea id="address" cols="30" rows="10" required></textarea>
              </div>
              <br>
  
              <label for="email">Email: </label>
              <div>
                  <input type="email"  id="email" required>
              </div>
              <br>
  
              <label for="pincode">Pincode: </label>
              <div>
                  <input type="text" id="pincode" required>
              </div>
              <br>
  
              <h2>Payment Details: </h2>
  
              <label for="card">Card Type: </label>
              <div>
                  <select name="mycard" id="card">
                      <option value="card type" selected>--Select a card type--</option>
                      <option value="visa" >Visa</option>
                      <option value="rupay">Rupay</option>
                      <option value="master">MasterCard</option>
                  </select>
              </div>
              <br>
  
              <label for="number ">Card Number: </label>
              <div>
                  <input type="text" name="" id="number" required>
              </div>
              <br>
  
              <label for="exp date">Expiration Date: </label>
              <div>
                  <input type="date" name="" id="exp date" >
              </div>
              <br>
  
              <label for="cvv">CVV: </label>
              <div>
                  <input type="password" name="" id="cvv" required>
              </div>
              <br>
  
              <label for="button"></label>
              <input type="submit" value="Pay Now">
              <br>
          </form>
      </body>
  </html>`);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});