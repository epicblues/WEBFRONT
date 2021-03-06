let weatherObject:any = null;

class EpicLocation {
    public latitude:number;
    public longitude:number;
    constructor() {
        this.latitude = 0;
        this.longitude = 0;
    }
}

function getWeather():Promise<EpicLocation> {
    return new Promise<EpicLocation>((resolve,reject) => {
        const kmsGeo:Geolocation = navigator.geolocation;
         let locations:EpicLocation = new EpicLocation(); // 초기화
        if(kmsGeo !== null) {
        kmsGeo.getCurrentPosition((position) => {
            locations.latitude = position.coords.latitude;
            locations.longitude = position.coords.longitude;
            resolve(locations);
        }, (error) => {
            reject(error);
        })
    }
    }) 
}


getWeather().then((locations) => {
    const lat = locations.latitude;
    const long = locations.longitude;
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=52befdc897be5ce9cb87e3d1fd0074b2`);
})
.then(data=> data.json())
.then(json => {
    weatherObject = json;
    document.querySelector('h1').innerHTML = 
    `지역 : ${json.name}<br>
    날씨 : ${json.weather[0].description}<br>
    바람 세기 : ${json.wind.speed}
    `;
    document.querySelector('h1').style.fontSize="1.2em";
    document.querySelector('h1').style.fontFamily='"굴림","궁서",sans-serif';
})
.catch(console.error);


