function getAddress() {
    let addressInput = document.getElementById("address-input").value;
    data = {addressInput};

    const options = {
        method: 'POST',
        headers: {
           'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('/address', options).then(response=> {
        console.log(response.body.watts);
    });
}

if ('geolocation' in navigator) {

    navigator.geolocation.getCurrentPosition(async position => {

        const api_url = 'http://api.positionstack.com/v1/forward?access_key=b613b9c534d825142cb3e1fa06088bcb&query=155 Paisley St, Guelph, ON&limit=1';
        const response = await fetch(api_url);
        const json = await response.json();

        
        const data = {lon, lat};
        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        };


        console.log(json);
        console.log(data);
    });
  } else {
    console.log('not working');
  }