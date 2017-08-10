import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			term:''
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event){
		//event.preventDefault();

		// console.log(" great" ,event.target.value);
		this.setState({term:event.target.value});

	}
	onFormSubmit(event){
		event.preventDefault();
		// we need to search and Fetch Weather Data

		this.props.fetchWeather(this.state.term)
		this.setState({term:''});	
	}

	render(){
		return(
			<div>
				<form className="input-group" onSubmit={this.onFormSubmit}>
					<input 
						placeholder="get a 5 day forecast in your favourite city"
						className="form-control"
						value={this.state.term}
						onChange={this.onInputChange}
						/>
					<span
						className="input-group-btn"
						>
						<button type="submit" className="btn button-secondary">Submit</button>
					</span>
				</form>
			</div>
			)
	}


}
// export default SearchBar;

function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar)
