require('dotenv').config({ path: __dirname + '/../.env' });
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running!`);
        });
    })
    .catch((error) => {
        console.error('Server failed to start:', error);
        process.exit(1);
    });

app.use('/api/v1', itemRoutes);

module.exports = app;
