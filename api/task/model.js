const db = require('../../data/dbConfig')

async function fetch() {
    const projTasks = await
    db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id')
    .select(
        't.task_id',
        't.task_notes',
        't.task_description',
        't.task_completed',
        'p.project_name',
        'p.project_description'
    )

    return projTasks
}


module.exports = {fetch}