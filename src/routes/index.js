const express = require('express');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores');

router.get('/', async (req, res) => {
    const valores = await Valor.find();
    console.log(valores);
    res.render('index.ejs',{
        valores
    });
});

router.post('/add', async (req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});

router.get('/del/:id', async (req, res) => {
    const id = req.params.id;
    await Valor.findByIdAndRemove(id);
    res.redirect('/');
});

router.put('/update/:id', async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    console.log(id)
    console.log('body', body)

    try {
        const valor = await Valor.findByIdAndUpdate(
            id, body, { useFindAndModify: false }
        )
        console.log(Proyect)
        res.json({
            estado: true,
            mensaje: 'Mascota editada'
        })
    } catch (error) {
        console.log(error)
        res.json({
            estado: false,
            mensaje: 'Mascota falla'
        })
    }
});

module.exports = router;