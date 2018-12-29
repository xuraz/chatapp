var socket = io();
socket.on("connect", function() {
  console.log("Connected to server..");
  /*
  socket.emit("createMessage", {  
    from: "Asmita Lammichane",
    text: "Create Your First Message"
  });*/
});

socket.on("disconnect", function() {
  console.log("Disconnected from server..");
});

socket.on("newMessage", function(message) {
  console.log("New Message Received", message);
});
