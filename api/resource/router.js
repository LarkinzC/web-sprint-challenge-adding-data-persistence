// build your `/api/resources` router here
const router = require('express').Router()



router.use((err, req, res ,next) => {
    res.status(500).json({
        customMessage: 'something went wrong in resource router'
    })
})

module.exports = router