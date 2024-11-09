const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./config");

const perdidos = require("./modulos/Perdidos/routes");
const encontrados = require("./modulos/Encontrados/routes");
const users = require("./modulos/Users/routes");

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// configuracion
app.set("port", config.app.port);

//rutas
app.use("/api/perdidos", perdidos);
app.use("/api/encontrados", encontrados);
app.use("/api/users", users);

module.exports = app;
