// build your `/api/projects` router here
const router = require('express').Router()



router.use((err, req, res ,next) => {
    res.status(500).json({
        customMessage: 'something went wrong in projects router'
    })
})

module.exports = router