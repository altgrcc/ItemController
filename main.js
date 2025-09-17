const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());


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


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;

