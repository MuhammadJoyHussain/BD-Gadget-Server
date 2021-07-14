const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()


const home = require('./routes/api/home');
const products = require('./routes/api/products');
const admins = require('./routes/api/admins');
const orders = require('./routes/api/orders');
const reviews = require('./routes/api/reviews');

const app = express();

app.use(cors());
app.use(express.json());

//DB Config
const db = process.env.MONGO_URI;

//Connect to mongos
mongoose.
    connect(db, { useNewUrlParser: true, useUnifiedTopology: true })


app.use('/api/home', home);
app.use('/api/products', products);
app.use('/api/admins', admins);
app.use('/api/orders', orders);
app.use('/api/reviews', reviews);



const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server started in port ${port}`))