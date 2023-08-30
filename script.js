function Weather(){
    let API_KEY= "b68177d3392240989230bce8eebb9da7";
    let city = searchCity();

 fetch("https://api.weatherbit.io/v2.0/current?&city=" + city + 
    "&key=" + API_KEY + "&exclude=minutely")
    .then((res) => res.json())
    .then((data) => display(data))

    function display(data){
        const {city_name, country_code, temp, pod, wind_cdir, vis} = data.data[0];
        const {code, description} = data.data[0].weather;

       document.querySelector(".location").innerText = `${city_name + ", "+ country_code }`;
       document.querySelector(".description").innerText = `${description}`;
       document.querySelector(".wind").innerText = `${wind_cdir}`
       document.querySelector(".vis").innerText= `${vis}`;

        document.querySelector(".temp").innerText = `${temp + "°C"}`

       
        let day = "d"
        let night = "n"

        if(pod == day){
            document.body.style.backgroundColor = "#76aedb";
            document.body.style.color = "#000"
        }
        else{
            document.body.style.backgroundColor = "#273042";
            document.body.style.color = "#fff"

        }



        console.log(pod);
        console.log(wind_cdir + "wind direc");
        console.log(description);
        console.log(vis + "vis")
        switch(description){
            case("Thunderstorm with light rain"):
            case("Thunderstorm with heavy rain"):
            case("Thunderstorm with rain"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/t01d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/t01n.png"
            break;

            case("Thunderstorm with light drizzle"):
            case("Thunderstorm with drizzle"):
            case("Thunderstorm with heavy drizzle"):
            case("Thunderstorm with Hail"):

            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/t04d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/t04n.png"
            break;

            case("Light Drizzle"):
            case("Heavy  Drizzle"):
            case("Drizzle"):
            document.querySelector(".icon").src = "Weatherbit/d01d.png"
             break;

            case("Light Rain"):
            case("Moderate Rain"):
            case("Freezing rain"):
            document.querySelector(".icon").src = "Weatherbit/r01d.png"
            break;

            case("Heavy Rain"):
            document.querySelector(".icon").src = "Weatherbit/r03d.png"
            break;

            case("Light shower rain"):
            case("Shower rain"):
            case("Heavy shower rain"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/r05d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/r05n.png"
            break;


            case("Light snow"):
            case("Snow"):
            case("Heavy Snow"):
            case("Mix snow/rain"):
            case("Snow shower"):
            case("Heavy snow shower"):
            case("Flurries"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/s01d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/s01n.png"
            break;

            case("Sleet"):
            case("Heavy sleet"):
            document.querySelector(".icon").src = "Weatherbit/s05d.png"
            break;

            case("Mist"):
            case("Smoke"):
            case("Haze"):
            case("Sand/dust"):
            case("Fog"):
            case("Freezing Fog"):
            case("Flurries"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/a01d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/a01n.png"
            break;

            case("Clear sky"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/c01d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/c01n.png"
            break;

            case("Few clouds"):
            case("Scattered clouds"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/c02d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/c02n.png"
            break;

            case("Broken clouds"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/c03d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/c03n.png"
            break;

            case("Overcast clouds"):
            if(pod == day)
            document.querySelector(".icon").src = "Weatherbit/c04d.png"
            else
            document.querySelector(".icon").src = "Weatherbit/c04n.png"
            break;

            default:
            document.querySelector(".icon").src = "Weatherbit/u00d.png"
            


        }
        

    }
}


function searchCity(){
    let keysearch = document.querySelector(".search").value;
    let loc;
    if(keysearch === ""){
      loc = "lagos"
      console.log(loc)
     }else{
      loc = keysearch;
     }
    
   return loc;
  }
  