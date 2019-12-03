const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

//Connect to dbms
mongoose.connect('mongodb+srv://user_0:papponi312@cluster0-vq45a.mongodb.net/reviewDB', { useUnifiedTopology: true, useNewUrlParser: true });

//Get Models
require('./models/review-model');

//Get Controllers
const reviewController = require('./controllers/review-controller');

//Define Path
const viewsPath = path.join(__dirname, './views');

app.use(
	express.urlencoded({
		extended: true
	})
);

app.use(express.json());

//fire controller
app.use(reviewController);

//set up views engine
app.set('view engine', 'hbs');

//set views path
app.set('views', viewsPath);

//static files
app.use(express.static('./utils'));

//general routes

/*==============================================================================================================*/

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log('Server up at port', port);
});
