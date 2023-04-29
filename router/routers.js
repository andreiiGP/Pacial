const conexion = require('../data/conexion');
const ejs = require('ejs');

 const routers = app => {
    // Display welcome message on the root
     app.get('/', (request, response) => {
        response.send({
            message: 'Welcome to sentimiento output rest api!',
            
        });
    }); 

    app.get('/tickets', (request, response) => {
        conexion.query('SELECT * FROM ApiAndrei', (error, result) => {
            if (error) throw error;
            response.send(result);
        });
    });

    app.get('/tickets/:id', (request, response) => {
        const id = request.params.id;

        conexion.query('SELECT * FROM ApiAndrei WHERE ID = ?', id, (error, result) => {
            if (error) throw error;

            response.send(result);
        });
    });

    app.post('/tickets', (request, response) => {
        conexion.query('INSERT INTO ApiAndrei SET ?', request.body, (error, result) => {
            if (error) throw error;

            response.status(201).send(`Ticket added with ID: ${result.insertId}`);
        });
    });

    app.delete('/tickets/:id', (request, response) => {
        const id = request.params.id;

        conexion.query('DELETE FROM ticket_details  WHERE ID = ?', id, (error, result) => {
            if (error) throw error;
            response.send('Ticket deleted.');
        });
    });
} 
module.exports = routers;