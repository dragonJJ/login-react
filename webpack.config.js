var webpack=require("webpack");

module.exports={
	entry:"./index.js",
	output:{
		path:__dirname+"/build",
		filename:"build.js"
	},
	module:{
		loaders:[
			{test:/\.js$/,loader:"babel-loader",exclude:"/node_modules/", query: {presets: ['es2015', 'react']}},
			{test:/\.css$/,loader:"style-loader!css-loader"}
		]
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
	},
}