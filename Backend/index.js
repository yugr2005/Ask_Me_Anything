require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mainRouter = require('./Routes/index')

app.use(express.json());

app.use('/user', mainRouter);


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})