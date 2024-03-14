// build your `Project` model here
const db = require('../../data/dbConfig')

function fetch() {
    return db('projects')
}

async function insert(projectData) {
    try {
        const [insertedId] = await db('projects').insert(projectData);

        const newProject = await db('projects').where('project_id', insertedId).first();

        return newProject;
    } catch (error) {
        console.error('Error inserting project:', error);
    }
}


// INSERT INTO projects (project_name, project_description, project_completed)
// VALUES ('Your project name', 'Your project description', 0);


module.exports = {
    fetch,
    insert
}