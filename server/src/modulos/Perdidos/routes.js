//routes
const express = require("express");
const responses = require("../../red/responses");
const controlador = require("./controlador");

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOnlyOne);
router.delete("/:id", deleteOnlyOne);
router.post("/", postLost);

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

async function postLost(req, res) {
  try {
    const item = await controlador.insertar(req.body);
    responses.success(req, res, item, 200);
  } catch (error) {
    responses.error(req, res, error, 500);
  }
}

module.exports = router;
