const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT title, message FROM messages");
  return rows;
}

async function insertMessage(title, message) {
  await pool.query("INSERT INTO messages (title, message) VALUES ($1, $2)", [
    title,
    message,
  ]);
}

module.exports = {
  getAllMessages,
  insertMessage,
};
