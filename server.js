const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const server = express();
//Connect to MongoDB database
connectDB();

//init Middleware
server.use(express.json({ extended: false }));
server.use(cors());

server.use('/api/auth', require('./routes/api/auth'));
server.use('/api/ricambi', require('./routes/api/ricambi'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));
