import React from "react";
import {Link} from "react-router";
import $ from "jquery";

import ListOne from "./list1.js";
import ListTwo from "./list2.js";

import "./client.css";

class Client extends React.Component {
	constructor(props){
		super(props);
		this.state={
			childData:[],
			headUr:"",
			headName:""
		}
	}

	componentDidMount(){
		const parentName=this.props.params.name;
		$.ajax({
			dataType:"json",
			url:"http://webapi.fe.ptdev.cn/user",
			data:{name:parentName},
			success:function(res){
				this.setState({
					childData:res.data,
					headUr:res.data[0].headIcon,
					headName:res.data[0].name
				});
			}.bind(this)
		})
	}

	handleAdd(){
		let childVal=this.refs.childName.value;
		this.setState({
			childData:this.state.childData.concat({"type":"child","name":childVal,"headIcon":"http://static.fe.ptdev.cn/test.png"})
		});
		this.refs.childName.value="";

	}
	
	delist(rows){
		this.setState({
			childData:rows
		})
	}

	render(){
		let childList;
		if(this.state.childData.length==1){
				childList=<ListOne/>
			}else{
				childList=<ListTwo list={this.state.childData} del={this.delist.bind(this)}/>
			};
		return (			
		  <div className="box">
		  	<div className="top">
				<img src={this.state.headUr}/>
				<span>父母名字:{this.state.headName}</span>
		  	</div>
			{childList}
			<div className="bottom">
				<input type="button" value="添加孩子" className="one" onClick={this.handleAdd.bind(this)}/>
				<input type="text" className="two" ref="childName"/>
			</div>
		  </div>
	   )
	}
	
}

export default Client;