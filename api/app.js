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
////////////// PETS /////////////////////////////////
/////////////////////////////////////////////////////

app.post('/pets', function(req, res, next) {
    dal.createPet(req.body, function(err, result) {
        res.status(201).send(result)
    })
    console.log(req.body)
    res.send(req.body)
})

app.get('/pets', function(req, res, next) {
    dal.listPets(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.get('/pets/:id', function(req, res, next) {
    const petID = req.params.id
    dal.getPet(petID, function(err, result) {
        res.status(200).send(result)
    })
})

app.put('/pets/:id', function(req, res, next) {
    const petID = req.params.id
    dal.updatePet(petID, function(err, result) {
        res.status(200).send(result)
    })
})

app.delete('/pets/:id', function(req, res, next) {
    const petID = req.params.id
    dal.deletePet(petID, function(err, result) {
        res.status(200).send(result)
    })
})
/////////////////////////////////////////////////////
////////////// PROCEDURES ///////////////////////////
/////////////////////////////////////////////////////

app.post('/procedure', function(req, res, next) {
    dal.createProcedure(req.body, function(err, result) {
        res.status(201).send(result)
    })
})

app.get('pets', function(req, res, next) {
    dal.listProcedures(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.get('/procedures/:id', function(req, res, next) {
    const procedureID = req.params.id
    dal.getProcedure(procedureID, function(err, result) {
        res.status(200).send(result)
    })
})

app.put('/procedures/:id', function(req, res, next) {
    const procedureID = req.params.id
    dal.updateProcedure(procedureID, function(err, result) {
        res.status(200).send(result)
    })
})

app.delete('/procedures/:id', function(req, res, next) {
    const procedureID = req.params.id
    dal.deleteProcedure(procedureID, function(err, result) {
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
    const glossaryID = req.params.id
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
