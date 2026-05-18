const db = require("../db/queries");

async function newMessage(req, res) {
  res.render("index", { title: "new" });
}

async function insertNewMessage(req, res) {
  await db.insertMessage(req.body.title, req.body.message);

  res.redirect("/");
}

module.exports = {
  newMessage,
  insertNewMessage,
};
