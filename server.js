const express = require('express');
const app =express();

const mockUserData=[
				{name:'mark'},
				{name:'jill'}
			]
app.get('/users',function(req,res){
	res.jason({
		success:true,
		message:'successfully got users.Nice',
		users: mockUserData
	})
})
app.listen(8000,function(){
	console.log("server is running")
})