require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
const mainRouter = require('./Routes/index')

app.use(express.json());
app.use(cors());

app.use('/user', mainRouter);


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})