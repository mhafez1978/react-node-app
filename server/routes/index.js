const main = (req,res)=>{
	if(req.method === 'POST'){
		res.send('your POST request response')
	}
	if(req.method === 'GET'){
		res.send('Hello World')
	}
	else if(req.method){
		res.send('we are sorry ...')
	}
}


module.exports = {main}