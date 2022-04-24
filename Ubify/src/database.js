const mongoose = require('mongoose');

// const URI = 'mongodb://localhost/presupuestos';
const URI = 'mongodb+srv://adminuebify:RrWIXq9DaYSTvHQX@cluster0.b84hr.mongodb.net/presupuestos?retryWrites=true&w=majority';

mongoose.connect(URI)
    .then(db => console.log('db is connected!'))
    .catch(err => console.log(err));

module.exports = mongoose;
