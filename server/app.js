const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

require("dotenv").config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});
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

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
