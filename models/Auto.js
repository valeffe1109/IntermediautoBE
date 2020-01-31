const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AutoSchema = new Schema({
	titolo: {
		type: String,
		required: true
	},
	modello: {
		type: String,
		required: true
	},

	descrizione: {
		type: String,
		required: true
	},
	prezzo: {
		type: String,
		required: true
	},
	foto1: {
		type: String,
		required: true
	},
	foto2: {
		type: String,
		required: true
	},
	foto3: {
		type: String,
		required: true
	},
	foto4: {
		type: String,
		required: true
	},
	foto5: {
		type: String,
		required: true
	},
	foto6: {
		type: String,
		required: true
	},
	foto7: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});
module.exports = Auto = mongoose.model('auto', AutoSchema);
