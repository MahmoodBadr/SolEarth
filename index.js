//const express = require('express');
// const fetch = require('node-fetch');
import express from 'express';
import fetch from "node-fetch";
const app = express();
app.listen(3000, () => console.log("listening at port 3000"))
app.use(express.static('public'));
app.use(express.json({ limit:'1mb' }))

// app.post('/api', (request, response) => {
//     console.log(request.body);
//     const data = request.body;
//     response.json({
//         status: "success",
//         latitude: data.lat,
//         logitude: data.lon
//     })
// });

app.post('/address', async (request, response) => {
    let query = request.body.addressInput;

    const api_url = `http://api.positionstack.com/v1/forward?access_key=b613b9c534d825142cb3e1fa06088bcb&query=${query}&limit=1`;
    const coordResponse = await fetch(api_url);
    const json = await coordResponse.json();

    const lat = json.data[0].latitude;
    const lon = json.data[0].longitude;

    console.log(lat);
    console.log(lon);

    const weather_url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=direct_radiation&past_days=92`;
    const weatherResponse = await fetch(weather_url);
    const wJson = await weatherResponse.json();
    let radiation = wJson.hourly.direct_radiation;
    let peakSunSum = peakSun(radiation);
    let avgPeakSum = peakSunSum/(radiation.length/24);
    let watts = avgPeakSum *1.25*365;
    response.json({
        wattData: watts
    });
});

function peakSun(radiation) {
    let hours = 0;
    for (let i = 0; i < radiation.length; i++){
        if (radiation[i] > 400)
        {
            hours++;
        }
    }
    return hours;
}