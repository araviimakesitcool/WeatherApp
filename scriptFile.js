
let city = "bangalore"
let url ="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric";
let key = "6e35737ff14a3c42811a604bc39ece8c";

async function checkWeather(){
    const response = await fetch(url + "&appid="+key);
    data = await response.json();
    // console.log(data);

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML=data.main.temp + " °C" ;
     document.querySelector(".humidity").innerHTML = data.main.humidity;
     document.querySelector(".wind").innerHTML = data.wind.speed;

}

checkWeather();

async function getCityInfo(){
    let userCity = document.getElementById("firstText").value;
    let urlFunction ="https://api.openweathermap.org/data/2.5/weather?q="+userCity+"&units=metric";
let keyUser = "6e35737ff14a3c42811a604bc39ece8c";
console.log("Testing");
console.log(urlFunction + "&appid="+keyUser);
    
    const response = await fetch(urlFunction + "&appid="+keyUser);
    data = await response.json();

     document.querySelector(".city").innerHTML = data.name;
     document.querySelector(".temp").innerHTML=data.main.temp + " °C" ;
     document.querySelector(".humidity").innerHTML = data.main.humidity;
     document.querySelector(".wind").innerHTML = data.wind.speed;

}

