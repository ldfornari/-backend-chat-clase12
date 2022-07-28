const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

httpServer.listen(8080, () => {
    console.log('Server on port 8080')
})

io.on('connection',socket => {
    console.log('Un cliente se ha conectado');
    socket.emit('messages', messages);

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('messages', messages);
    });
 });


const messages = [
    { author: 'John', text: 'Hola cono estas' },
    { author: 'Jane', text: 'Hola, bien' },
    { author: 'Mery', text: 'Hola, todo muy bien' },
]



app.use(express.static('public'))