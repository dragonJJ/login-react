import React from "react";

import "./list2.css"

class ListTwo extends React.Component {

	handleDel(e){
		e.preventDefault();
		let index=e.target.getAttribute("data-key");
		let rows=this.props.list;
		rows.splice(index,1);
		this.props.del(rows);
	}

	render(){
		return (
			<div className="middle">
				<ul>
					{
						this.props.list.slice(1).map(function(value,i){
							return (
								<li>
									<div>
										<span>{value.name}</span>
										<a href="javascript:void(0)" data-key={i+1} onClick={this.handleDel.bind(this)}>delete</a>
									 </div>
								</li>
							)
						}.bind(this))
					}
					
					
				</ul>
		 </div>
	 )
	}
}

export default ListTwo