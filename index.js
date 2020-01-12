const express = require('express')
const app = express();
const PORT = 8000

app.get('/', (req, res) => res.send('Welcome to node_db_challenge!'))
app.listen(PORT, () => console.log(`App listening to http://localhost:${PORT}`))