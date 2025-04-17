const express = require('express');
const db = require('./config/db');
const dotenv = require('dotenv');
const transactionRoutes = require('./routes/transactionRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/transactions', transactionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
