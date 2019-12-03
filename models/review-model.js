const mongoose = require('mongoose');

//schema

const Review = mongoose.model('Review', {
	reviewer_name: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		required: true,
		min: 1,
		max: 5
	},
	comment: {
		type: String,
		required: true
	}
});

module.exports = Review;
