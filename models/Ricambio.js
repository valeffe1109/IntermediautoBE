const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RicambioSchema = new Schema({
	nome: {
		type: String,
		required: true
	},
	modello: {
		type: String,
		required: true
	},
	codice: {
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
	foto: {
		type: String,
		required: true
	}
});
module.exports = Ricambio = mongoose.model('ricambio', RicambioSchema);
