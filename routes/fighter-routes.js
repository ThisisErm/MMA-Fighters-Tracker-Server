const express = require('express')

const Fighter = require('../models/fighter')

const router = express.Router()

//GET /fighters
router.get('/fighters', (req, res, next) =>{
    Fighter.find()
        .then(fighters =>{
            return fighters.map(fighter => fighter)
        })
        .then(fighters => {
            res.status(200).json({fighters: fighters })
        })
        .catch(next)
})

// SHOW
// GET /fighters/:id
router.get('/fighters/:id', (req, res, next) => {
    Fighter.findById(req.params.id)
        .then(fighter => {
            res.status(200).json({ fighter: fighter })
        })
        .catch(next)
})

//CREATE
//POST / fighters
router.post('/fighters', (req, res, next) =>{
    //req.body will have fighter {with properties in it}
    Fighter.create(req.body.fighter)
        .then(fighter => {
            //top lvl of this object is fighter
            res.status(201).json({fighter: fighter })
        })
        .catch(next)
})



module.exports = router