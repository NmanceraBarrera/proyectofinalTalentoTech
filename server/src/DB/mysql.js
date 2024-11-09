const mysql = require("mysql");
const config = require("../config");

const dbConfig = {
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
};
let connection = "";

function connectionToMysql() {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.log("db error: ", err);
      setTimeout(connectionToMysql, 2000);
    } else {
      console.log("Db connected");
    }
  });

  connection.on("error", function (err) {
    console.log("[mysql error]", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      connectionToMysql();
    } else {
      throw err;
    }
  });
}

connectionToMysql();

function todos(tabla) {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${tabla}`, (err, results) => {
      return err ? reject(err) : resolve(results);
    });
  });
}

function uno(tabla, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM ${tabla} WHERE id = ${id}`,
      (err, results) => {
        return err ? reject(err) : resolve(results);
      }
    );
  });
}

function insertar(tabla, data) {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${tabla} SET ?`, data, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
}

function eliminar(tabla, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `DELETE FROM ${tabla} WHERE id = ?`,
      [id],
      (err, result) => {
        return err ? reject(err) : resolve(result);
      }
    );
  });
}

function findOne(tabla, email) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${tabla} WHERE email = ?`; // Busca por el email
    connection.query(query, [email], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results[0]); // Devolvemos el primer usuario encontrado
      }
    });
  });
}

module.exports = {
  todos,
  uno,
  insertar,
  eliminar,
  connectionToMysql,
  findOne,
};
