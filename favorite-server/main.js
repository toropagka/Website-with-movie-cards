const jsonServer = require("json-server");
const multer = require("multer");
const path = require("path");
const express = require("express");
const { nanoid } = require("nanoid");

const server = jsonServer.create();
const router = jsonServer.router("./db.json");

const middlewares = jsonServer.defaults({
  options: {
    noCors: true
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "posters"));
  },
  filename: function (req, file, cb) {
    const id = nanoid();
    cb(null, id + "--" + file.originalname);
  }
});

const upload = multer({
  storage: storage
});

server.use(middlewares);

server.use("/static/posters", express.static(path.join(__dirname, "posters")));

server.post("/poster", upload.single("poster"), (req, res) => {
  res.jsonp({
    path: "/static/posters/" + req.file.filename
  });
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
