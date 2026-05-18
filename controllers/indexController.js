const db = require("../db/queries");

async function allMessages(req, res) {
  const messages = await db.getAllMessages();

  res.render("index", { title: "home", messages });
}

module.exports = {
  allMessages,
};
