const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectdb = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const DB_URL = "mongodb://0.0.0.0/octa";
dotenv.config();
connectdb(DB_URL);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
