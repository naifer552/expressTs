import express from 'express';
const app = express();
app.use(express.json()); // middleware que transforma la req.body a un json

const PORT = 3000;

app.get('/', (_req, res) => {
    console.log('Hello word ');
    res.send('Hola mundo');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

