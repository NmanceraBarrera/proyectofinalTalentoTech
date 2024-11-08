const cloudinary = require("cloudinary").v2; // Importa Cloudinary
const app = require("./app");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Puedes usar variables de entorno para mantenerlo seguro
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
