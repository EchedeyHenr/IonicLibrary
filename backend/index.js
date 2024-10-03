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
//db.sequelize.sync();

/* Es posible que necesitemos borrar la base de datos y no sincronizarla.
Para ello descomentar lineas 24, 25 y 26, y comentar la linea 19.*/

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop an re-sync db.");
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Library Application"});
});

require("./routes/library.routes")(app);

const PORT = process.env.PORT ||8080;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});