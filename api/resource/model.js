// build your `Resource` model here
const db = require('../../data/dbConfig')

function fetch() {
    return db('resources')
}

async function insert(resource) {
    try {
        const [insertedId] = await db('resources').insert(resource)
        const newResource = await db('resources').where('resource_id', insertedId).first()
        return newResource
    } catch(err) {
        console.log(err)
    }
}

function findByName(resource_name) {
    return db('resources').where('resource_name', resource_name).first()
}

module.exports = {
    fetch,
    insert,
    findByName
}

//RESOURCE