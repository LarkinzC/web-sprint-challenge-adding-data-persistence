// build your `/api/projects` router here
const router = require('express').Router()
const Project = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const data = await Project.fetch();
        const booleanized = data.map(project => ({
            ...project,
            project_completed: !!project.project_completed
        }));
        res.json(booleanized);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newProject = await Project.insert(req.body);
        const booleanized = {
            ...newProject,
            project_completed: !!newProject.project_completed
        };
        res.json(booleanized);
    } catch (error) {
        next(error);
    }
});




router.use((err, req, res ,next) => {
    res.status(500).json({
        customMessage: 'something went wrong in projects router'
    })
})

module.exports = router