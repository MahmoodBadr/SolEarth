console.log('test');

// Secret access Key
let access_key = 'b613b9c534d825142cb3e1fa06088bcb';
// Form input
let query = '255 Westwood road';
// Longitude and Latitude
let lat;
let lon;
// Position Stack api url (end point) and Open Meteo api url
const pos_URL = `http://api.positionstack.com/v1/forward?access_key=${access_key}&query=${query}`;
const weather_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=direct_radiation,diffuse_radiation&current_weather=true`;

// Index.js
app.get('/weather/:query', async (request, response) => {
    query = request.params.query;
    const pos_URL = `http://api.positionstack.com/v1/forward?access_key=${access_key}&query=${query}`;
    const fetch_response = await fetch(pos_URL);
    const lljson = await fetch_response.json();
    response.json(json);
});

// const pos_URL = `weather/${query}`;



let test = `hello ${access_key}`;
console.log(api_url);

console.log(test);