

const express = require("express");
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const VendorRoutes = require('./routes/VendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors')
const Path = require('path');



const app = express()

const PORT = process.env.PORT || 4000;

dotEnv.config();
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('mongoose connected successfully!'))
    .catch((error) => console.log(error));

app.use(bodyParser.json());
app.use('/vendor', VendorRoutes);
app.use('/firm', firmRoutes)
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));



app.use('/', (req, res) => {
    console.log('<h1> welcome to our shoppy</h1>')
    res.send('<h1>Welcome to our shoppy</h1>');
})

app.listen(PORT, () => {
    console.log(`server started and running at ${PORT}`);
})

