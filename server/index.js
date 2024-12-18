const express =  require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL,{
      connectTimeoutMS: 10000,
}).then(() => console.log('database connected'))
.catch(() => console.log('database not connected',err))

// middelware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

app.use(cors({
    origin: 'http://localhost:5173',  // Allow only your frontend origin
    credentials: true  // Allow cookies and credentials to be sent
  }));

app.use('/',require('./routes/authRoutes'))

app.listen(port, ()=> console.log(`server is running on port ${port}`))
