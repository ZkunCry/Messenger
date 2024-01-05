const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const server = http.createServer(app);
const mongoString = process.env.MONGODB_URL
mongoose.connect(mongoString);
const database = mongoose.connection
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

var message = mongoose.model(`Message`,{ name : String, message : String})

io.on("connection", (socket) => {
  console.log("Connected");
  socket.on("join", ({ userLogin, idRoom }) => {
    socket.join(idRoom);

    socket.emit("message", {
      data: {
        userLogin: { name: "ADMIN" },
        message: "Welcome to the club body",
      },
    });
  });
  io.on("disconnect", () => {
    console.log("Disconnected");
  });
});
const port = process.env.PORT;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/messages', (req, res) => {
  message.find({},(err, messages)=> {
    res.send(messages);
  })
})

app.post('/messages', (req, res) => {
  var message = new message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
