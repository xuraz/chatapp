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
  var li = $("<li></li>");
  li.text(`${message.from}:${message.text}`);

  $("#messages").append(li);
});

/*
socket.emit(
  "createMessage",
  {
    from: "Andrew",
    text: "Good Morning"
  },
  function(data) {
    //When server send back acknowledgement & client recieve
    //acknowledge is just cb that allow request listener to send sth back from request emiter
    console.log("Got it", data);
  }
);*/

$("#message-form").on("submit", function(e) {
  e.preventDefault();
  socket.emit(
    "createMessage",
    {
      from: "User",
      text: $("[name=message]").val()
    },
    function() {}
  );
});
