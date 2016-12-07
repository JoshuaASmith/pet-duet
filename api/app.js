const http = require('http')
const app = require('express')()
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000
const cors = require('cors')
app.use(cors({origin: true, credentials: true}))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const dal = require('./dal.js')

/////////////////////////////////////////////////////
////////////// OWNERS ///////////////////////////////
/////////////////////////////////////////////////////

app.post('/owners', function(req, res, next) {
    dal.createOwner(req.body, function(err, result) {
        res.status(201).send(result)
    })
    console.log(req.body)
    res.send(req.body)
})

app.get('/owners/:ownerid', function(req, res, next) {
    const ownerID = req.params.ownerid
    dal.getOwner(ownerID, function(err, result) {
        res.status(200).send(result)
    })
})

app.get('/owners', function(req, res, next) {
    dal.listOwners(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.put('/owners/:ownerid', function(req, res, next) {
    const ownerID = req.params.ownerid
    dal.updateOwner(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.delete('/owners/:ownerid', function(req, res, next) {
    const ownerID = req.params.ownerid
    dal.deleteOwner(req.body, function(err, result) {
        res.status(200).send(result)
    })
})
/////////////////////////////////////////////////////
////////////// PETS /////////////////////////////////
/////////////////////////////////////////////////////

app.post('/owners/:id/pets', function(req, res, next) {
    const ownerID = req.params.id
    dal.getOwner(ownerID, function(err, ownerdoc) {
        if (err)
            return err
        if (ownerdoc) {
            console.log(ownerdoc)
            dal.createPet(ownerID, req.body, function(err, result) {
                if (err) {
                    return err
                }
                if (result) {
                    console.log('create pet result', result)
                    let pet = req.body.petName
                    res.status(201).send(result)
                    dal.updateOwnerwithPet(pet, ownerdoc, function(err, response) {
                        if (err)
                            return (err)
                        if (response)
                            res.status(201).send(response)
                    })
                }
            })
        }
    })
})

app.get('owners/:id/pets', function(req, res, next) {
    const ownerID = req.params.ownerid
    dal.listOwnersPets(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.get('/owners/:id/pets/:id', function(req, res, next) {
    const ownerID = req.params.ownerid
    const petID = req.params.petid
    dal.getPet(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.put('/owner/:ownerid/pets/:petid', function(req, res, next) {
    const ownerID = req.params.ownerid
    const petID = req.params.petid
    const owner = dal.getOwner(req.body, function(err, result) {
        res.status(200).send(result)
    })
    dal.updatePet(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.delete('/owner/:id/pets/:id', function(req, res, next) {
    const ownerID = req.params.ownerid
    const petID = req.params.petid
    dal.deletePet(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

/////////////////////////////////////////////////////
////////////// GLOSSARY /////////////////////////////
/////////////////////////////////////////////////////

app.get('/glossary', function(req, res, next) {
    dal.getGlossary(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.get('/glossary/:id', function(req, res, next) {
    const glossaryID = req.params.glossaryid
    dal.getGlossaryWord(glossaryID, function(err, result) {
        res.status(200).send(result)
    })
})

/////////////////////////////////////////////////////
////////////// HELPER ///////////////////////////////
/////////////////////////////////////////////////////

app.get('*', (req, res) => res.send({ok: true}))

var server = http.createServer(app)
server.listen(port, () => console.log('opened server on', server.address()))
