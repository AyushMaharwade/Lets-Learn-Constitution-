const express  = require('express');
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = 3000;

const app = express();

app.listen(port, ()=> console.log(`server is running on port ${port}`))
