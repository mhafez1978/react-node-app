require('dotenv').config();
const express = require('express');
const myRouter = express.Router();
const routes = require('./routes/index.js');
const app = express()
const PORT = process.env.PORT

app.use(myRouter);
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(PORT, ()=>{
	console.log(`Server running on http://localhost:${PORT}`);
});

app.use('/', (req,res)=>{
	return routes.main(req,res);
})