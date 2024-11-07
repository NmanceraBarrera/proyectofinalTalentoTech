const db = require("../../DB/mysql");

const TABLE = "users";

function todos() {
  return db.todos(TABLE);
}
function uno(id) {
  return db.uno(TABLE, id);
}
function eliminar(id) {
  return db.eliminar(TABLE, id);
}

function insertar(data) {
  return db.insertar(TABLE, data);
}
function findByEmail(email) {
  return db.findOne(TABLE, email);
}

module.exports = {
  todos,
  uno,
  eliminar,
  insertar,
  findByEmail,
};
