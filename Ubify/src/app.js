const express = require('express');
// const { create } = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const { mongoose } = require('./database');
var cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Inicializaciones
const app = express();

//Cors
app.use(cors());

//Settings
app.set('port', process.env.PORT || 4000);

// Cors



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

app.use('/api/gastos', createProxyMiddleware({ 
    target: 'http://localhost:4000/api/gastos',
    changeOrigin: true, 
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000/';// '*'
    }
}));

// Stactic files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;