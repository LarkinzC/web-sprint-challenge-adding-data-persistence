// build your `/api/tasks` router here
const router = require('express').Router()
const Task = require('./model')


router.get('/', (req, res, next) => {
    Task.getTasks()
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(next)
})



router.use((err, req, res , next) => { //eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in task router'
    })
})

module.exports = router