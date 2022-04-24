const express = require('express')
const router = express.Router();
const Gastos = require('../models/gastos');

router.get("/", async (req, res) => {
    try {
        const gastos = await Gastos.find();
        console.log(gastos);
        res.json(gastos);
    } catch(e) {
        console.log(e);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const gasto = await Gastos.findById(req.params.id);
        res.json(gasto);
    } catch(e) {
        console.log(e);
    }
});

router.post('/', async (req, res) => {
    const { id, fecha, hora, categoria, subcategoria, valor } = req.body;
    const gasto = new Gastos({ id, fecha, hora, categoria, subcategoria, valor });
    await gasto.save();
    res.json({status: 'Gasto almacenado'});
});

router.put('/:id', async (req, res) => {

    const { id, fecha, hora, categoria, subcategoria, valor } = req.body;
    const newGasto = { id, fecha, hora, categoria, subcategoria, valor };
    await Gastos.findByIdAndUpdate(req.params.id, newGasto);
    res.json({status: 'Gasto actualizado!'});
    
});

router.delete('/:id', async (req, res) => {
    await Gastos.findByIdAndDelete(req.params.id);
    res.json({status: 'Gasto Eliminado!'});
});

module.exports = router;