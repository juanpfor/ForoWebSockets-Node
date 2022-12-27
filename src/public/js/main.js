$(function() {
    const socket = io()
    //obtengo el dom de la interfaz
    const $messageForm = $('#message-form') 
    const $messageBox = $('#message') 
    const $chat = $('#chat') 
    //eventos 
    $messageForm.submit(e => {
        e.preventDefault()
        socket.emit('send email', $messageBox.val())
        $messageBox.val('')
    })

    socket.on('forward message' , data => {
        $chat.append(data.concat('<br>'))
    })
})