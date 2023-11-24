const express = require('express');
const path = require('path');

const server = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory
server.use(express.static(path.join(__dirname, 'public')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
