// function returnText() {
//     let cityInput = document.getElementById("city-input").value;
//     let addressInput = document.getElementById("address-input").value;
//     alert(cityInput)
//     alert(addressInput)
// }

if ('geolocation' in navigator) {
    console.log('working');
    navigator.geolocation.getCurrentPosition(async position => {
        const query = '1035 Victoria Road South, Guelph ON' // get this from form submission
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat);
        console.log(lon);
        const pos_url = `weather/${query}`
        const data = {lon, lat};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    });
  } else {
    console.log('not working')
  }