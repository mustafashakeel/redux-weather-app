import React,{Component} from 'react';
import {connect} from 'react-redux';

class WeatherList extends Component {
	renderWeather(cityData){
		return(
			<tr key={cityData.city.name}>
				<td>
					{cityData.city.name}
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