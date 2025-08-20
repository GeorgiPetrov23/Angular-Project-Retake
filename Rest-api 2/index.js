require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  credentials: true,
  methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization'],
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());


app.use('/api', authRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

const url = "mongodb://localhost:27017";

mongoose.connect(url, {dbName: "Recipe_Blog"})
    .then(() => {
        app.listen(3000, () => console.log('Server running on port 3000'));
    })
    .catch(err => console.log(err));