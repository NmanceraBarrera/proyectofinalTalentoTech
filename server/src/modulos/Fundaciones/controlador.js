const db = require("../../DB/mysql");

const TABLE = "fundaciones";

function todos() {
  return db.todos(TABLE);
}
function uno(id) {
  return db.uno(TABLE, id);
}
function eliminar(id) {
  return db.eliminar(TABLE, id);
}

async function insertar(data) {
  try {
    const { name, address, city, photo, phone, description, userId } = data;

    const result = await db.insertar(TABLE, {
      name,
      address,
      city,
      photo,
      contact_phone: phone,
      description,
      id_user: userId,
    });

    return result;
  } catch (error) {
    console.error("Error al insertar en la tabla fundaciones:", error.message);
    throw new Error(
      "Error al insertar el registro en perdidos: " + error.message
    );
  }
}
module.exports = {
  todos,
  uno,
  eliminar,
  insertar,
};
