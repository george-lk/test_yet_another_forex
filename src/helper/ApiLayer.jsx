function GetApiLayerData(dataType,currDate,apiKey){
    if(dataType=="Live"){	
        var myHeaders = new Headers();
        myHeaders.append("apikey", apiKey);

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        console.log("https://api.apilayer.com/currency_data/live")

        return fetch("https://api.apilayer.com/currency_data/live", requestOptions)
                .then(response => response.json())
                .then(result => result )
                .catch(error => console.log('error', error));

      
    }
    else{
        var myHeaders = new Headers();
        myHeaders.append("apikey", apiKey);

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        console.log(`https://api.apilayer.com/currency_data/historical?date=${currDate}`)

        return fetch(`https://api.apilayer.com/currency_data/historical?date=${currDate}`, requestOptions)
                .then(response => response.json())
                .then(result => result)
                .catch(error => console.log('error', error));
    }
}

export default GetApiLayerData;
