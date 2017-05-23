import React from "react";
import {browserHistory} from "react-router";
import ReactDOM from "react-dom"

import "./login.css";

class Entry extends React.Component {
	handleClick(e){
		e.preventDefault();
		const nameVal=this.refs.inputName.value;
		const path="/client/"+nameVal;
		browserHistory.push(path);
	}

	render(){
	   return (<form className="loginBox" onSubmit={this.handleClick.bind(this)}>
					<div className="one">
						<label >请输入用户名：</label>
					    <input type="text" className="two" ref="inputName"/>
					</div>
					<input type="submit" value="登录" className="three" />
			</form>)
	}
}

export default Entry;