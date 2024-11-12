const express = require("express");
const responses = require("../../red/responses");
const controlador = require("./controlador");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOnlyOne);
router.delete("/:id", deleteOnlyOne);
router.post("/", postUser);
router.post("/login", loginUser);

async function getAll(req, res) {
  const items = await controlador.todos();
  responses.success(req, res, items, 200);
}

async function getOnlyOne(req, res) {
  try {
    const item = await controlador.uno(req.params.id);
    responses.success(req, res, item, 200);
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function deleteOnlyOne(req, res) {
  try {
    const id = req.params.id;
    await controlador.eliminar(id);
    responses.success(req, res, "Item Eliminado correctamente", 200);
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function postUser(req, res) {
  try {
    // Extraemos la contraseña del cuerpo de la solicitud
    const { name, email, password } = req.body;

    // Generamos un salt para el hashing
    const salt = await bcrypt.genSalt(10); // 10 es el número de rondas de salting

    // Encriptamos la contraseña
    const hashedPassword = await bcrypt.hash(password, salt);

    // Ahora puedes guardar el usuario con la contraseña encriptada
    const newUser = { name, email, password: hashedPassword };

    // Guardamos el usuario en la base de datos
    const item = await controlador.insertar(newUser);

    // Respondemos con el nuevo usuario
    responses.success(req, res, item, 200);
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    // Buscar al usuario por email
    const user = await controlador.findByEmail(email); // Asegúrate de que esto devuelve un usuario

    console.log(
      user ? `Usuario encontrado ${user.email}` : "Usuario no encontrado"
    );

    if (!user) {
      return responses.error(req, res, "Credenciales incorrectas", 401);
    }

    // Comparar la contraseña en texto plano con el hash almacenado
    console.log("Contraseña enviada:", password); // Contraseña en texto plano
    console.log("Hash almacenado:", user.password); // Hash en la base de datos

    // Comparar las contraseñas
    const passwordMatch = await bcrypt.compare(password, user.password);

    console.log("¿Las contraseñas coinciden?", passwordMatch); // true si coinciden, false si no

    if (!passwordMatch) {
      return responses.error(req, res, "Credenciales incorrectas", 401);
    }

    // Si las contraseñas coinciden, generar el token JWT
    const token = jwt.sign(
      { id: user.id, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return responses.success(req, res, { user, token }, 200);
  } catch (error) {
    console.error(error);
    return responses.error(req, res, "Error al intentar iniciar sesión", 500);
  }
}

module.exports = router;
