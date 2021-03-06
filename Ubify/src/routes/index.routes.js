const express = require('express')
const router = express.Router();
const Gastos = require('../models/gastos');

router.get("/:usuario", async (req, res) => {
    try {
        const gastos = await Gastos.find({usuario: req.params.usuario});
        console.log(gastos);
        res.json(gastos);
    } catch (e) {
        console.log(e);
    }
});

router.get("/:id/:usuario", async (req, res) => {
    try {
        if(req.params.id == "bycategory") {
            const gasto = await Gastos.aggregate( [
                {
                   $group: { _id: "$categoria", subtotales: { $sum: "$valor" } }
                }
             ] );
             console.log(gasto);
             res.json(gasto);
        } else {
            const gasto = await Gastos.findById(req.params.id);
            res.json(gasto);
        }
        
    } catch (e) {
        console.log(e);
    }
});

router.post('/', async (req, res) => {
    const { id, fecha, hora, categoria, subcategoria, valor, usuario } = req.body;
    const gasto = new Gastos({ id, fecha, hora, categoria, subcategoria, valor, usuario });
    await gasto.save();
    res.json({ status: 'Gasto almacenado' });
});


router.post('/:id/:usuario', async (req, res) => {
    try {
        if(req.params.id == "bycategory") {
            const { firstDay, lastday } = req.body;

            const aggregation = [
                {
                    $match: { 
                        fecha: { $gte: new Date(firstDay), $lt: new Date(lastday) },
                        usuario: req.params.usuario
                    } 
                },
                { 
                    $group: { _id: '$categoria', subtotales: { $sum: '$valor' } } 
                }
            ];

            const gastos = await Gastos.aggregate(aggregation);

             console.log(gastos);
             res.json(gastos);
        } else if(req.params.id == "bysubcategory") {
            const { firstDay, lastday, selectCategory } = req.body;

            const gastos = await Gastos
            .find(
              {
                fecha: { $gte: new Date(firstDay), $lt: new Date(lastday) },
                categoria: selectCategory,
                usuario: req.params.usuario
              }
            )
            .sort({
              fecha: 1
            });

            console.log(gastos);

            res.json(gastos);
        } else{
            res.json({ status: 'Error 404' });
        }
    } catch (e) {
        console.log(e);
    }
});


router.put('/:id', async (req, res) => {

    const { id, fecha, hora, categoria, subcategoria, valor, usuario } = req.body;
    const newGasto = { id, fecha, hora, categoria, subcategoria, valor, usuario };
    console.log(newGasto);
    await Gastos.findByIdAndUpdate(req.params.id, newGasto);
    res.json({ status: 'Gasto actualizado!' });

});

router.delete('/:id', async (req, res) => {
    await Gastos.findByIdAndDelete(req.params.id);
    res.json({ status: 'Gasto Eliminado!' });
});

module.exports = router;