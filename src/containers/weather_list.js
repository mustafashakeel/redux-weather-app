import React,{Component} from 'react';
import {connect} from 'react-redux';
// import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather);
		console.log(" temps ", temps[0] );

		
		return(
			<tr key={name}>
				<td>
					{name}
				</td>
				<td>
					{temps[0].weather[0].main}				
				</td>
			</tr>
		)

	}
	render(){
		return (
			<div>
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature </th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>

			</div>
			);
	}
}

// export default  WeatherList;

// {weather} === {weather:weather}
function mapStateToProps({weather}){
	return {weather};  
}

export default connect(mapStateToProps)(WeatherList);