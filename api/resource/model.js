// build your `Resource` model here
const db = require('../../data/dbConfig')

function fetch() {
    return db('resources')
}

function insert(project) {
    
}

module.exports = {fetch}

//RESOURCE