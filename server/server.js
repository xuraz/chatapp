const path = require("path");
const http = require("http");

const express = require("express");
const socketIO = require("socket.io");

const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, "../public")));
//Connection
io.on("connection", socket => {
  console.log("New user connected");

  /*
  socket.emit("newMessage", {
    from: "Asmita Lamichane",
    text: "Your first message using socket.io",
    createdAt: 14 / 09 / 2075
  });*/

  socket.emit("newMessage", {
    from: "Admin",
    text: "Welcome to chat app",
    createdAt: new Date().getTime()
  });

  //Not the one but everyone else <3.
  socket.broadcast.emit("newMessage", {
    from: "Admin",
    text: "New user joined",
    createdAt: new Date().getTime()
  });

  //Emit newMessage on createMessage
  socket.on("createMessage", message => {
    //Event listener,cb ie. msg as params
    //console.log("Create New Message", newMessage);
    io.emit("newMessage", {
      //io.emit emits eventL to multiple connection
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });
    /*
    //Not the one but everyone else <3.
    socket.broadcast.emit("newMessage", {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    });*/
  });

  //Disconnect
  socket.on("disconnect", () => {
    console.log("User Disconnected..");
  });
});

server.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
