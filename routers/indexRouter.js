const { Router } = require("express");
const indexRouter = Router();

const indexController = require("../controllers/indexController");
const newController = require("../controllers/newController");

indexRouter.get("/", indexController.allMessages);
indexRouter.get("/new", newController.newMessage);
indexRouter.post("/new", newController.insertNewMessage);

// indexRouter.use((req, res) => {
//   res.status(404).render("404");
// });

module.exports = indexRouter;
