const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("Hello new 2"));

module.exports = newRouter;
