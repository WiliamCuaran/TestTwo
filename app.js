const path = require('path');

const express = require('express');

const http = require('http');

const app = express();

const socket = require('socket.io');

const mongoose = require('mongoose');

//const require = require('eddress');

var address = require('address');





const server = http.createServer(app);

const io = socket.listen(server);


app.set('port', process.env.PORT||3000);

app.use(express.static(path.join(__dirname,'public')));

server.listen(app.get('port'), () =>{
 console.log('local server on port', app.get('port'));
});

io.on('connection', (socket) =>{
    console.log('new user connected', socket.id);

 
    

    socket.on('onpum',(data) =>{
        console.log(data);
        io.sockets.emit('Pum', { turn_on: new Date().toJSON() });
    });

    socket.on('offpum',(data) =>{
        console.log(data);
        io.sockets.emit('Pum', { turn_off: new Date().toJSON() });
    });

    socket.on('upled',(data) =>{
        console.log(data);
       socket.emit('ip', address.ip())
       io.sockets.emit('Led', { Up: new Date().toJSON() });

    });

    socket.on('downled',(data) =>{
        console.log(data);
        socket.emit('sabado', app.get('port'));
        io.sockets.emit('Led', { Down: new Date().toJSON() });
    });

    
    socket.on('JSON',(data) => {
        io.sockets.emit('load old msgs', data);
      

       console.log(data);
      
    });

    socket.on('JSON', (data) =>{
        var z = data.temperature;
        if(z> 29){
            io.sockets.emit('Temperature', { Greenhouse_over: new Date().toJSON() });
            
         }else{
            io.sockets.emit('Temperature', { Greenhouse_right: new Date().toJSON() });
         }

    })
});


