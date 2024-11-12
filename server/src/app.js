const cloudinary = require("cloudinary").v2; // Importa Cloudinary
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
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Puedes usar variables de entorno para mantenerlo seguro
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//rutas
app.use("/api/perdidos", perdidos);
app.use("/api/encontrados", encontrados);
app.use("/api/users", users);

module.exports = app;
