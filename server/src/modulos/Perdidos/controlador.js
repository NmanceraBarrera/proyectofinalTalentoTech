const db = require("../../DB/mysql");

const TABLE = "perdidos";

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

module.exports = {
  todos,
  uno,
  eliminar,
  insertar,
};
