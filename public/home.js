// function returnText() {
//     let cityInput = document.getElementById("city-input").value;
//     let addressInput = document.getElementById("address-input").value;
//     alert(cityInput)
//     alert(addressInput)
// }

if ('geolocation' in navigator) {
    console.log('working');
    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const data = {lon, lat};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };

        const api_url = 'http://api.positionstack.com/v1/forward?access_key=b613b9c534d825142cb3e1fa06088bcb&query=155 Paisley St, Guelph, ON&limit=1';
        const response = await fetch(api_url);
        const json = await response.json();
        console.log(json);
        console.log(json.data[0].latitude);
    });
  } else {
    console.log('not working');
  }