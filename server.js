const express = require('express');//express server up and running 
const connectdb = require('./config/db');
//connect database 


const app = express();// init the app express
connectdb(); //this will give us a promis?
app.get('/',(req,res)=> res.send('API runing'))
const PORT  = process.env.PORT||5000;// this will look for the enviromet of port which will deploy to heroku
// run this on port 5000 if nothing is set it will default go to port 5000

app.listen(PORT,()=> console.log(`server started on port ${PORT}`));//to listen on a port
// in the listen pass in port  to run do npm run server 