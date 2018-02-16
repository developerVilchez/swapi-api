const express = require('express');
const app = express();
app.listen(3002, () => {
    console.log('servidor encendido');
})

app.use(express.static('public'));