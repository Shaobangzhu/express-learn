const express = require('express');
const path = require('path');
const app = express();

// Serve static files from /public
app.use(express.static(path.join(__dirname, 'public')));

// Root route (optional if only static files)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
