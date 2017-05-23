import React,{component} from "react"
import ReactDOM from "react-dom"
import {Router,Route,browserHistory,Link,IndexRoute} from "react-router"

import Login from "./src/components/login/login.js";
import Entry from "./src/components/login/entry.js";
import Client from "./src/components/login/client.js";

class Mycontent extends React.Component{
	render(){
		return (
				<div>
					{this.props.children}
				</div>
			)
	}
}



ReactDOM.render(
	(<Router history={browserHistory}>
		<Route path="/" component={Mycontent}>
		<IndexRoute component={Entry}/>
		<Route path="/login" component={Login}>
			<Route path="/entry" component={Entry}/>
			<Route path="/client/:name" component={Client}/>
		</Route>
		</Route>
	</Router>),
	document.getElementById("template")
)

