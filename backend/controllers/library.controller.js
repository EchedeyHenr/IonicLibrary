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
    const id = req.params.id;

    Library.findByPk(id)
        .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: "Error retrieving book with id= " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Library.update(req.body, { 
        where: { id: id} 
    })
        .then(num => {
        if (num == 1) {
            res.send({
                message: "Book was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update book with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating book with id= " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Library.destroy({
        where: {id: id}
    })
        .then(() => {
            console.log("Se ha borrado");
            res.send({ message: "Deleted" });
        })
    };