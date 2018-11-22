import React, { Component } from 'react';

class SearchMenu extends Component {

	constructor(props){
		super(props);
		this.state = {
			query:[],
			searchInput:""
		}
	}

	doLocationFilter(){
		let input = document.querySelectorAll(".search-bar>input")[0].value
		console.log("Filter Location:" + input)
	}

	render(){
		return(
			<div className="location-menu">
				<p className="location-menu-title">
					Hong Kong Attractions
				</p>
				<div className="search-bar">
					<input type="text" placeholder="Attractions Location"/>
					<button onClick={this.doLocationFilter}>Filter</button>
				</div>
			</div>
		)
	}
}

export default SearchMenu