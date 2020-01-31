const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Auto = require('../../models/Auto');

router.get('/', async (req, res) => {
	try {
		const auto = await Auto.find().sort({ date: -1 });
		res.json(auto);
	} catch (error) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.get('/:id', async (req, res) => {
	try {
		const car = await Auto.findById(req.params.id);
		res.json(car);
	} catch (err) {
		console.error(err.message);
	}
});
router.get('/:modello', async (req, res) => {
	try {
		const auto = await Auto.find({ codice: req.params.modello });
		res.send(auto);
	} catch (err) {
		res.send(err);
	}
});

router.post('/', [ auth, [ check('modello', 'Modello is required').not().isEmpty() ] ], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	try {
		const newAuto = new Auto({
			titolo: req.body.titolo,
			modello: req.body.modello,
			descrizione: req.body.descrizione,
			prezzo: req.body.prezzo,
			foto1: req.body.foto1,
			foto2: req.body.foto2,
			foto3: req.body.foto3,
			foto4: req.body.foto4,
			foto5: req.body.foto5,
			foto6: req.body.foto6,
			foto7: req.body.foto7
		});

		const auto = await newAuto.save();
		res.json(auto);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const recipe = await Auto.findById(req.params.id);

		await recipe.remove();
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
