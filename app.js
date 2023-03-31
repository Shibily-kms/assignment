const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()
const connectDB = require('./config/db')
const port = 5000


// routes
const userRouter = require('./routes/user')

connectDB()

app.use(cors())


// Middlewares
app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/', userRouter);

app.listen(port, () => {
    console.log(`server is running in port ${port}`);
});