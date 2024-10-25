const apiKey = '8dfe38475b314a1cd820b8f2fc1b013d';
let cityName = document.getElementById("input");
let resultElement = document.getElementById('result');
function getApi() {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=${apiKey}`).then(response => {
        return response.json();
    }).then(data => {
        if (data.cod === 200){
            resultElement.innerHTML =`<h1>Temp:${data.main.temp}</h1>
        <h1>Weather:${data.weather[0].description}</h1>
        <h1>Visibility:${data.visibility}</h1>`
        }else if(data.cod === 401){
            resultElement.innerHTML =`<h1>Invalid API key</h1> `         
        }else if(data.cod === 402){
            resultElement.innerHTML =`<h1>City Not Found</h1>`
        }
        else{
            resultElement.innerHTML =`<h1>Something Wrong</h1>`
        }  
        cityName.value = ''          
    })
    
}


