// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.fetch()
        .then(resource => {
            res.json(resource)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.insert(req.body)
        .then(newResource => {
            res.json(newResource)
        })
})

router.use((err, req, res ,next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in resource router'
    })
})

module.exports = router