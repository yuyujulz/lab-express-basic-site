const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/music", (request, response) => {
  response.sendFile(__dirname + "/views/music.html");
});

app.listen(3004, () => console.log("connected"));
