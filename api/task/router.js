// build your `/api/tasks` router here
const router = require('express').Router()

router.use('*', (req, res, next) => {
    res.json({ message: 'RESOURCE ROUTER TASK POINT'})
})

router.use((err, req, res ,next) => {
    res.status(500).json({
        customMessage: 'something went wrong in task router'
    })
})

module.exports = router