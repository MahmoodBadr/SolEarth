async function getAddress() {
    let addressInput = document.getElementById("address-input").value;
    data = {addressInput};

    const options = {
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch('/address', options);
    const json = await response.json();
    console.log(json.wattData);
    document.getElementById("watts").innerHTML = "Your home can generate " + json.wattData.toFixed(2) + " Watts of Electricity Per Day!";

    if (json.wattData > 1600) {
        document.getElementById("assesment").innerHTML = "Great! You should install solar panels, it will help the earth! ☀️"
    } else if (json.wattData <= 1600 || json.wattData >= 1200) {
        document.getElementById("assesment").innerHTML = "OK. It won't hurt to install solar panels! ⛅"
    } else {
        document.getElementById("assesment").innerHTML = "Bad. It will not be eco-friendly to use solar power for your area. 🌧️"
    }

}

// if ('geolocation' in navigator) {

//     navigator.geolocation.getCurrentPosition(async position => {

//         const api_url = 'http://api.positionstack.com/v1/forward?access_key=b613b9c534d825142cb3e1fa06088bcb&query=155 Paisley St, Guelph, ON&limit=1';
//         const response = await fetch(api_url);
//         const json = await response.json();

        
//         const data = {lon, lat};
//         const options = {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body: JSON.stringify(data)
//         };


//         console.log(json);
//         console.log(data);
//     });
//   } else {
//     console.log('not working');
//   }