const express = require('express');
const path = require('path');
const products = require('./routes/product');
const orders = require('./routes/order');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const { json } = require('stream/consumers');
const cors = require('cors')
dotenv.config({path: path.join(__dirname,'config','config.env')});
const app = express();
connectDB();

app.use(express.json())
app.use(
  cors({
    origin: "https://snap-buy-rho.vercel.app",
    credentials: true
  })
);
app.use('/api/v1/',products);
app.use('/api/v1',orders);




const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
   console.log(`Server started on ${PORT}`);
});