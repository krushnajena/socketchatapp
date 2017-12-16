//make connection
var socket = io.connect('http://localhost:4000');

//query dom
var user = document.getElementById('user');
var message = document.getElementById('message');

var send = document.getElementById('send');

var output = document.getElementById('output');
var feedback = document.getElementById('feedback');



//emit eveents
send.addEventListener('click',function(){

	socket.emit('chat',{
		message: message.value,
		user: user.value
	});
})

message.addEventListener('keypress',function(){

	socket.emit('typing',{
		
		user: user.value
	});
})

//list for events
socket.on('chat',function(data){
	feedback.innerHTML="";
	output.innerHTML += '<p><strong>' + data.user + ': </strong>' +data.message +'</p>';
})

//list for events
socket.on('typing',function(data){
feedback.innerHTML="";
	feedback.innerHTML += '<p><em>' + data.user + ': </em>is typing</p>';
})