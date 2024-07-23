const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const infoplantas = require("./routes/tabla_infoplantas");
const infoplantas2 = require("./routes/tabla_infoplantas2");
const usuarios = require("./routes/tabla_usuarios");

const app = express();

// Configura CORS
app.use(cors({
  origin: 'http://localhost:5173', // URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Si usas cookies necesitas esta línea
}));

app.use(bodyParser.json());
app.use("/infoplantas", infoplantas);
app.use("/infoplantas2", infoplantas2);
app.use("/usuarios", usuarios);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
