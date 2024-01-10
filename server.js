const express = require('express');
const path = require('path');

const app = express();
const port = 9000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the HTML file with an iframe
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'iframe.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
