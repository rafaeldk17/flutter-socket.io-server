
const {io} = require('../index');

//Mensajes de socker
io.on('connection', client => {
    console.log('Cliente conectado');

    client.on('disconnect', () => {
        console.log('Cliente descoectado');
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje!!!', payload);

        io.emit('mensaje', {admin: 'Nuevo mensaje'});
    });
  });

