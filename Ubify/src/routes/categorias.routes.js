const express = require('express');
const router = express.Router();
const Categorias = require('../models/catgeorias');

router.get("/", async (req, res)=>{
    try {
        // const aggregation = [
        //     { $group: { _id: '$categoria' } }
        // ];
        // const category = await Categorias.aggregate(aggregation);
        const category = await Categorias.find();
        console.log(category);
        res.json(category);
    } catch (e) {
        console.log(e);
    }
})

router.post("/", async (req, res)=>{
    const {categoria, subcategoria, icon} = req.body;
    const category = new Categorias({categoria, subcategoria, icon});
    await category.save();
    res.json({status: 'Categoria almacenada!'});
})

router.put('/:id', async (req, res) => {
    const { categoria, subcategoria, icon } = req.body;
    const newCatefory = { categoria, subcategoria, icon };
    console.log(newCatefory);
    await Categorias.findByIdAndUpdate(req.params.id, newCatefory);
    res.json({ status: 'Categoria actualizada!' });
});

router.delete('/:id', async (req, res) => {
    await Categorias.findByIdAndDelete(req.params.id);
    res.json({ status: 'Categoria Eliminada!' });
});

module.exports = router;