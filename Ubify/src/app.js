const express = require('express');
// const { create } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const { mongoose } = require('./database');

// Inicializaciones
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
// app.set('views', path.join(__dirname, "views"));
// app.engine(
//     ".hbs",
//     create({
//       layoutsDir: path.join(app.get("views"), "layouts"),
//       partialsDir: path.join(app.get("views"), "partials"),
//       defaulLayout: "main",
//       extname: ".hbs",
//     }).engine
// );
// app.set("view engine", ".hbs");

// Middelwares
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// Global Variables
app.use((req, res, next) => {
    next();
});

// Routes  
app.use('/api/gastos', require('./routes/index.routes.js'));

// Stactic files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;