const key = "264d67b811e31d9dd4203118ec0ed839"; //api key



//getInputValue will get the city name that user enters on page
function getInputValue() {
   var inputVal = document.getElementById("userInput").value; 
   weatherBaloon(inputVal);
    
}

var weatherButton = document.getElementById('weatherButton');



//function weatherButton() {
//weatherButton.addEventListener('click', drawWeather);
   //};

function weatherBaloon( inputVal ) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${key}`)
.then(function(resp) { return resp.json() }) //converts data to JSON
.then(function(data) {
    console.log(data);
    drawWeather(data);
})
.catch(function() {
  
    //catch errors
});
}   


let clouds = "#D3D3D3"
let rain = "#4169E1"
let clear = "#EEE8AA"
let snow = "#FFFAFA"
let mist = "#87CEFA"


function ChangeBg (weatherType) {

    if (weatherType === "Clouds") {
        document.body.style.backgroundColor = clouds
    }
    else if (weatherType === "Rain") {
        document.body.style.backgroundColor = rain    
    }

    else if (weatherType === "Snow") {
        document.body.style.backgroundColor = snow
    }

    else if (weatherType === "Mist") {
        document.body.style.backgroundColor = mist
    }
    
else {
        document.body.style.backgroundColor = clear
    }
}



function drawWeather( d ) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
   document.getElementById('main').innerHTML = d.weather[0].main;
   document.getElementById('temp').innerHTML = celcius + '&deg;';
   document.getElementById('location').innerHTML = d.name;
   document.getElementById('country').innerHTML = d.sys.country; //need div in html
    ChangeBg(d.weather[0].main) 
}