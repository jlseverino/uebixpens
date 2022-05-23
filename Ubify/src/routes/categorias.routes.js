const express = require('express');
const router = express.Router();
const Categorias = require('../models/catgeorias');

router.get("/:usuario", async (req, res)=>{
    try {
        const category = await Categorias.find({usuario: req.params.usuario});
        console.log(category);
        res.json(category);
    } catch (e) {
        console.log(e);
    }
})

router.post("/", async (req, res)=>{
    const {categoria, subcategoria, icon, usuario} = req.body;
    const category = new Categorias({categoria, subcategoria, icon, usuario});
    await category.save();
    res.json({status: 'Categoria almacenada!'});
})

router.put('/:id', async (req, res) => {
    const { categoria, subcategoria, icon, usuario } = req.body;
    const newCatefory = { categoria, subcategoria, icon, usuario };
    console.log(newCatefory);
    await Categorias.findByIdAndUpdate(req.params.id, newCatefory);
    res.json({ status: 'Categoria actualizada!' });
});

router.delete('/:id', async (req, res) => {
    await Categorias.findByIdAndDelete(req.params.id);
    res.json({ status: 'Categoria Eliminada!' });
});

module.exports = router;