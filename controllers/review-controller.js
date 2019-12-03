const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Review = mongoose.model('Review');

router.get('/home', (req, res) => {
	res.render('index');
});

router.post('/home/review', (req, res) => {
	var review = Review(req.body).save((e, data) => {
		if (e) {
			throw e;
		}
		res.json(data);
	});
});

router.get('/review/:param', (req, res) => {
	console.log(JSON.parse(req.params.param));
	var review = Review(JSON.parse(req.params.param)).save((e, data) => {
		if (e) {
			throw e;
		}
		var id = data._id;

		var review2 = Review.find({ _id: id }, (e, data) => {
			if (e) {
				throw e;
			}
			console.log(data);
			res.render('review', {
				name: data[0].reviewer_name,
				rate: data[0].rating,
				comment: data[0].comment
			});
		});
	});
});

module.exports = router;
