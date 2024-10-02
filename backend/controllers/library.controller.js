const db = require("../models");
const Library = db.libraries;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const book = {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        genre: req.body.genre,
        publicationYear: req.body.publicationYear
    }
    Library.create(book).then((data) => {
        res.send(data);
    })
}

exports.findAll = (req, res) => {
    Library.findAll().then((data) => {
        res.send(data);
    })
};

exports.findOne = (req, res) => {
    
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {
    const id = req.params.id;

    Library.destroy({where: {id: id}}).then(() => {
        console.log("Se ha borrado");
        res.send({ message: "Deleted" });
    })
};