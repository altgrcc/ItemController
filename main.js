const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route handlers for /hello endpoints
app.get('/hello/get', (req, res) => {
    res.send('Hello, World!');
});

app.post('/hello', (req, res) => {
    res.send('Created item');
});

app.put('/hello/:id', (req, res) => {
    res.send('Updated item!');
});

app.delete('/hello/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Deleted item with id: ${id}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;