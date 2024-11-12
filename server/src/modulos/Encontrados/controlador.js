const db = require("../../DB/mysql");

const TABLE = "encontrados";

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
    console.log("Datos recibidos para insertar:", data); // Para depurar los datos que llegan

    const {
      name,
      found_date,
      breed,
      city,
      place,
      color_1,
      color_2,
      gender,
      photo,
      contact_phone,
      description,
      userId,
    } = data;

    const result = await db.insertar(TABLE, {
      name,
      found_date,
      breed,
      city,
      place,
      color_1,
      color_2,
      gender,
      photo,
      contact_phone,
      description,
      id_user: userId,
    });

    return result;
  } catch (error) {
    console.error("Error al insertar en la tabla encontrados:", error.message);
    throw new Error("Error al insertar el registro: " + error.message);
  }
}

module.exports = {
  todos,
  uno,
  eliminar,
  insertar,
};
