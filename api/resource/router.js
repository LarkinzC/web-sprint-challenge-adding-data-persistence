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

router.post('/', async (req, res, next) => {
        const possible = await Resource.findByName(req.body.resource_name)
        if (possible) {
            res.status(422).json({
                message: 'Name taken'
            }) 
        }
    Resource.insert(req.body)
        .then(newResource => {
            res.json(newResource)
        }) .catch(next)
})

router.use((err, req, res ,next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong in resource router'
    })
})

module.exports = router