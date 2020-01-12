const express = require('express')
const app = express();
const PORT = 5000;
app.use(express.json())

app.get('/', (req, res) => res.send('Welcome to node_db_challenge!'))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))