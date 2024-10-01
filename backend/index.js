const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

// No borramos la base de datos, la sincronizamos.
db.sequelize.sync();

/* Es posible que necesitemos borrar la base de datos y no sincronizarla.
Para ello descomentar lineas 17, 18 y 19, y comentar la linea 12.*/

/* db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop an re-sync db.");
}); */

// Ruta simple - End-point que escucha en localhost:8080/ y devuelve un mensaje en formato JSON
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Library Application"});
});

require("./routes/library.routes")(app);

const PORT = process.env.PORT ||8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});