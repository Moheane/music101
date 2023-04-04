const router = require('express').Router()
const {getSongs, addSong} = require('../controllers/song')


router.get('/songs', function (req, res) {
    getSongs(req,res)
})

router.post('/song', function (req, res) {
    addSong(req, res)
})

module.exports = router
