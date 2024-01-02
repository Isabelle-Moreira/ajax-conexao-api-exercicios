const express = require('express');

const app = express();
const PORT = 3000;
const cors = require('cors')

app.use(express.json());
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

let counts = {
    sim: 0,
    nao: 0
};

app.get('/getCounts', (req, res) => {
    res.json(counts);
});

app.post('/incrementSim', (req, res) => {
    counts.sim++;
    res.json(counts);
});

app.post('/incrementNao', (req, res) => {
    counts.nao++;
    res.json(counts);
});

