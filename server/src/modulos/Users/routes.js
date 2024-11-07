//routes
const express = require("express");
const responses = require("../../red/responses");
const controlador = require("./controlador");

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
    const item = await controlador.insertar(req.body);
    responses.success(req, res, item, 200);
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

async function loginUser(req, res) {
  const { email, password } = req.body;

  try {
    const user = await controlador.findByEmail(email);

    if (!user) {
      return responses.error(req, res, "Credenciales incorrectas", 401);
    }

    if (user.password !== password) {
      return responses.error(req, res, "Credenciales incorrectas", 401);
    }

    return responses.success(req, res, user, 200);
  } catch (error) {
    console.error(error);
    return responses.error(req, res, "Error al iniciar sesión", 500);
  }
}

module.exports = router;
