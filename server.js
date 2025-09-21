// server.js
const express = require('express');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Your secret API key from the environment variables
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent';

// The proxy endpoint for your API calls
app.post('/api/gemini', async (req, res) => {
  try {
    const payload = req.body;
    
    // Add the API key to the URL on the server
    const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error proxying request:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch from Gemini API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});