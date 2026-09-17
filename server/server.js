const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : '*';

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    developer: 'Gungun Bhatia',
    role: 'MERN Stack Developer & Freelance Web Developer',
    institution: 'Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Gungun Bhatia Portfolio Backend running on http://localhost:${PORT}`);
});
