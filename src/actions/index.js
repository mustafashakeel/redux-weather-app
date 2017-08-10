import axios from 'axios';

const API_KEY = '24bd4178d0d95968efbba7c0a33902e5';  
// api.openweathermap.org/data/2.5/forecast?
// const ROOT_URL = 'http://samples.openweathermap.org/data/2.5/forecast?appid='+API_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){
	
	const url =`${ROOT_URL}&q=${city},us`;
	
	const request = axios.get(url);
	// console.log(' Request : ', request);
	return {
		type:FETCH_WEATHER,
		payload:request
	}
}