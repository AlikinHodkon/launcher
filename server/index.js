const express = require('express');
const cors = require('cors');
const router = require('./router/router');
const cookieParser = require('cookie-parser');

const PORT = 5000;
const app = express();

app.get('/', (req, res) => res.send("Hello"))
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(cookieParser());
app.use('/api', router);

const start = async () => {
    try {
        app.listen(PORT, () => {console.log("Server started");})
    } catch (error) {
        console.log(error);
    }
}

start();