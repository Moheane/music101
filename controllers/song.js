const song = require('../models/song')

async function getSongs(req, res) {
    try {

        console.log(req.body)
        console.log('trying to get results')
        
        const results = await song.find();

        console.log('results is '+ results)
        if (results) {
            res.status(200).json({
                message: 'success',
                code: 200,
                data: results
            })
        }

    } catch (error) {
        return res.send(error)
    }
}


async function addSong(req, res) {

    console.log('the body is '+ req.body.title)

    const checkSong = await song.findOne({title: req.body.title})

    console.log('the checked is '+ checkSong)

    if (checkSong) {
        return res.status(401).json({
            message: 'song already exist',
            code: 401,
            data: null
        })
    }

    try {


        const newSong = new song({
            title: req.body.title,
            content: req.body.content,
            category: req.body.category
        });

        console.log('the new song is '+ newSong)


        const results = await newSong.save()

        
            res.status(201).json({
                message: 'song added successfuly',
                code: 201,
                data: results
            })
        

    } catch (error) {
        return res.send(error)
    }
}

 module.exports.getSongs = getSongs
 module.exports.addSong = addSong