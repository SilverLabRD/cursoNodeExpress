const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');


//settings
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","jade",);

app.use(express.static(path.join(__dirname,"/public")));
app.use("/",indexRouter)



const port = process.env.PORT || 3000;

app.listen(port,()=>console.log("Server started"));