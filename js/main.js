
document.getElementById('date').textContent = new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getDate();
setInterval(() => {
    document.getElementById('time').textContent = new Date().toLocaleTimeString()
}, 1000);

// ************************************************************** date end ********************************************************************************************************
const server = new WebSocket('ws://localhost:3000');

let sendMessage = document.getElementById('send-message');
server.addEventListener('open',()=>{
    // confirm('Connection Sucessfull......');
    
    
});
$('#send-btn').click(() => {
    console.log(sendMessage.value);
    server.send(sendMessage.value);
    sendMessage.value = '';
});

server.addEventListener('message', (message) => {
    let messageList = document.getElementById('message-list')
    let list = document.createElement('li')
    let time = document.createElement("p");

    list.style.backgroundColor='rgba(90, 47, 209, 0.5)'
    list.style.backgroundSize='auto'
    time.style.color = "black";
    time.style.fontWeight='bold'
    time.style.fontSize = '15px'

    list.textContent = message.data;
    time.textContent = new Date().toLocaleTimeString();

    messageList.appendChild(list);
    messageList.appendChild(time);

});
server.addEventListener('close',()=>{
    alert("Connection Failed.......Try Again!!!");
    location.href='https://harshanadevelopmentproject.github.io/Chat-app-Client-Side/'
});


$('#disconnect-btn').click(() => { window.location.href = 'https://harshanadevelopmentproject.github.io/Chat-app-Client-Side/' });