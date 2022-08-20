const express = require('express');
// const fetch = require('node-fetch');
const app = express();
app.listen(3000, () => console.log("listening at port 3000"))
app.use(express.static('public'));
app.use(express.json({ limit:'1mb' }))

app.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    response.json({
        status: "success",
        latitude: data.lat,
        logitude: data.lon
    })
});

