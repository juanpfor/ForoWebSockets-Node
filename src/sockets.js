module.exports =  function (io) {
    io.on('connection' , socket =>{
        console.log(`new user conection ${socket}`);

        socket.on('send email', data =>{
            io.sockets.emit('forward message' , data)
        })
      })
}