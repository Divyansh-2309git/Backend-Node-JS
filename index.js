require ('dotenv').config(); //This imports the dotenv module or library and configs it 
const express = require('express'); // This imports the express framework and make it usable
const app = express(); // We now will use app instead of express , it has been initalized
//const port = 3000; // This port is the location in our computer . The operating system will listen to the requests coming from this port

app.get('/', (req, res) => {
  res.send('Hello World!');
});// Get is used to define a route that handels the get requests , the route here is the "/" that is usually the home route  

app.get("/login", (req, res) => {
   res.send(`This is the login page`);
}); // The route defined for login 

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});// Listen is used to listen to the port 


