const form = document.getElementById("airQualityForm");
const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");
const result = document.getElementById("result");
const aqiResult = document.getElementById("aqi");
const coResult = document.getElementById("co");
const no2Result = document.getElementById("no2");
const o3Result = document.getElementById("o3");
const pm2Result = document.getElementById("pm2");
const pm10Result = document.getElementById("pm10");
const so2Result = document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value;
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${latitude}&lat=${longitude}`;  
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b30793829fmsh807bb2830b8fb33p15e760jsnac1a28bb6147',
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}};
    fetch(url,options)
    .then(response => response.json())
    .then(result1 =>{
        let reading = result1.data[0];
        console.log(reading);
        aqiResult.textContent = reading.aqi;
        coResult.textContent = reading.co;
        no2Result.textContent = reading.no2;
        o3Result.textContent = reading.o3;
        pm2Result.textContent = reading.pm2;
        pm10Result.textContent = reading.pm10;
        so2Result.textContent = reading.so2;
        result.style.display = 'flex';
    })
})