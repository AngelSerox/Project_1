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

router.get('/edit/:id', async(req, res) =>{
    try{
        const data = await Valor.findById(req.params.id).lean();
        const dato = await Valor.find();
        console.log(data);
        res.render('edit.ejs',{data, dato});
    }catch (error){
        console.log(error.message);
    }
});

router.post('/update/:id', async(req, res) => {
    const {id} = req.params;
    await Valor.findByIdAndUpdate(id, req.body);
    res.redirect('/');
});

module.exports = router;