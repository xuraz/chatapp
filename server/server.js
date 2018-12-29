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

  socket.emit("newEmail", {
    from: "asuraj893@gmail.com",
    text: "Hello socket.io",
    createAt: 14 / 09 / 2075
  });

  socket.emit("newMessage", {
    from: "Asmita Lamichane",
    text: "Your first message using socket.io",
    createdAt: 14 / 09 / 2075
  });

  socket.on("createEmail", newEmail => {
    console.log("Create New Email", newEmail);
  });

  socket.on("createMessage", newMessage => {
    console.log("Create New Message", newMessage);
  });

  //Disconnect
  socket.on("disconnect", () => {
    console.log("User Disconnected..");
  });
});

server.listen(port, () => {
  console.log(`Server Started on ${port}`);
});
