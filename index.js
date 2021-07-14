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
const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b9eao.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

//Connect to mongos
mongoose.
    connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'))
    .catch(err => console.log(err))


app.use('/api/home', home);
app.use('/api/products', products);
app.use('/api/admins', admins);
app.use('/api/orders', orders);
app.use('/api/reviews', reviews);



const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`server started in port ${port}`))