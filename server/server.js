const fs = require('fs');
const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const contactRoutes = require('./routes/contactRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

const allowedOrigins =
  process.env.CORS_ORIGIN && process.env.CORS_ORIGIN !== '*'
    ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
    : '*';

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    developer: 'Gungun Bhatia',
    role: 'Computer Science Student & Full-Stack Developer',
    institution: 'Shri Ram Murti Smarak College of Engineering & Technology (SRMS CET), Bareilly',
    timestamp: new Date().toISOString(),
  });
});

app.get('/api', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Gungun Bhatia Portfolio API is active and running!',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact (POST)',
    },
  });
});

// Catch-all for undefined API routes
app.all('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Serve frontend in production if hosted unified
if (process.env.NODE_ENV === 'production') {
  const clientDist = path.join(__dirname, '../client/dist');
  if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist));
    app.get('*', (req, res) => {
      res.sendFile(path.join(clientDist, 'index.html'));
    });
  }
} else {
  app.get('/', (req, res) => {
    res.json({
      status: 'OK',
      message: 'Gungun Bhatia Portfolio API is active and running! Run client dev server on port 5173.',
      endpoints: {
        health: '/api/health',
        contact: '/api/contact (POST)',
      },
    });
  });
}

app.listen(PORT, () => {
  console.log(`Gungun Bhatia Portfolio Backend running on http://localhost:${PORT}`);
});

