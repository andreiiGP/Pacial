const express = require('express');
const app = express();
const routes = require('./router/routers')
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors()); // Permitir acceso a todas las rutas y dominios
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

routes(app);

// ponemos el puerto deonde va a escuchar nuestra paina web 
app.listen(3000, () => {
    // cuando aranque dejamos mensaje en consola que se ejecuta en el puerto 
    console.log('Server corriendo en http://localhost:3000');
});

