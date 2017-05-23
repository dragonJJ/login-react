import React from "react";
import ReactDOM from "react-dom";

import {Router,Route,hashHistory,Link,IndexRoute} from "react-router";
import Entry from "./entry.js";
import Client from "./client.js";

class Login extends React.Component {
	render(){		 
		return (
			<div>
				{this.props.children}
			</div>
			)			
	}
}



export default Login;