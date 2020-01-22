const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Ricambio = require('../../models/Ricambio');

router.get('/', async (req, res) => {
	try {
		const ricambi = await Ricambio.find();
		res.json(ricambi);
	} catch (error) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/:codice', async (req, res) => {
	try {
		const ricambi = await Ricambio.find({ codice: req.params.codice });
		res.send(ricambi);
	} catch (err) {
		res.send(err);
	}
});

router.post('/', [ check('codice', 'Codice is required').not().isEmpty() ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}
	try {
		const newRicambio = new Ricambio({
			nome: req.body.nome,
			modello: req.body.modello,
			codice: req.body.codice,
			descrizione: req.body.descrizione,
			prezzo: req.body.prezzo,
			foto: req.body.foto
		});

		const ricambio = await newRicambio.save();
		res.json(ricambio);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const recipe = await Ricambio.findById(req.params.id);

		await recipe.remove();
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
