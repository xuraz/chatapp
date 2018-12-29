var socket = io();
socket.on("connect", function() {
  console.log("Connected to server..");

  socket.emit("createEmail", {
    to: "asuraj20@yahoo.com",
    text: "Interesting"
  });

  socket.emit("createMessage", {
    from: "Asmita Lammichane",
    text: "Create Your First Message"
  });
});

socket.on("disconnect", function() {
  console.log("Disconnected from server..");
});

socket.on("newEmail", function(email) {
  //data = from text cA
  //Custom EventListener
  console.log("New Email Received", email);
});

socket.on("newMessage", function(message) {
  console.log("New Message Received", message);
});
