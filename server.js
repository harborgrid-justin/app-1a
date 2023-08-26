const express = require('express');
const bodyParser = require('body-parser');
const ConditionsEngineAlpha = require('./engine_one');

const app = express();
const port = 3000;
const engine = new ConditionsEngineAlpha();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // this is for serving static files like HTML, CSS, etc.

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/evaluate', (req, res) => {
    try {
        const data = JSON.parse(req.body.data);
        const condition = JSON.parse(req.body.condition);
        const result = engine.evaluate(condition, data);
        res.json({ success: true, result: result });
    } catch (error) {
        res.json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
