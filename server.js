const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static frontend files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback route to index.html for single-page navigation
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the HTTP server
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` D.D.S FRIENDS CAR TRAVELS - Web Server Running`);
  console.log(` Server live at: http://localhost:${PORT}`);
  console.log(`====================================================`);
});

