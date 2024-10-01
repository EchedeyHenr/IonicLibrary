module.exports = (sequelize, Sequelize) => {
    const Library = sequelize.define("book", {
        title: {
            type: Sequelize.STRING
        },
        author: {
            type: Sequelize.STRING
        },
        isbn: {
            type: Sequelize.STRING
        },
        genre: {
            type: Sequelize.STRING
        },
        publicationYear: {
            type: Sequelize.INTEGER
        }
    })

    return Library;
}