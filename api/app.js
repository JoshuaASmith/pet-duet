const http = require('http')
const app = require('express')()
require('dotenv').config()
const HTTPError = require('node-http-error')
const port = process.env.PORT || 4000
const cors = require('cors')
app.use(cors({origin: true, credentials: true}))
const bodyParser = require('body-parser')
app.use(bodyParser.json({limit: '50mb'}))
//parses the json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
const dal = require('./dal.js')
const jwt = require('express-jwt')
const checkJWT = jwt({secret: process.env.AUTH0_SECRET})

/////////////////////////////////////////////////////
////////////// PETS /////////////////////////////////
/////////////////////////////////////////////////////

app.post('/pets', function(req, res, next) {
    dal.createPet(req.body, function(err, result) {
        res.status(201).send(result)
    })
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
    dal.getPet(req.params.id, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.updatePet(req.body, function(err, result) {
                res.status(200).send(result)
            })
        }
    })
})

app.delete('/pets/:id', function(req, res, next) {
    const petID = req.params.id
    dal.getPet(petID, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.deletePet(data, function(err, data) {
                res.status(200).send(data)
            })
        }
    })
})

/////////////////////////////////////////////////////
////////////// PROCEDURES ///////////////////////////
/////////////////////////////////////////////////////

app.post('/procedures', function(req, res, next) {
    dal.createProcedure(req.body, function(err, result) {
        res.status(201).send(result)
    })
})

app.get('/procedures', function(req, res, next) {
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
    dal.getProcedure(req.params.id, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.updateProcedure(req.body, function(err, result) {
                res.status(200).send(result)
            })
        }
    })
})

app.delete('/procedures/:id', function(req, res, next) {
    const procedureID = req.params.id
    dal.getPet(req.params.id, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.deleteProcedure(data, function(err, data) {
                res.status(200).send(data)
            })
        }
    })
})

/////////////////////////////////////////////////////
////////////// CATEGORIES ///////////////////////////
/////////////////////////////////////////////////////

app.post('/categories', function(req, res, next) {
    dal.createCategory(req.body, function(err, result) {
        res.status(201).send(result)
    })
})

app.get('/categories', function(req, res, next) {
    dal.listCategories(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.get('/categories/:id', function(req, res, next) {
    const categoryID = req.params.id
    dal.getCategory(categoryID, function(err, result) {
        res.status(200).send(result)
    })
})

app.put('/categories/:id', function(req, res, next) {
    const categoryID = req.params.id
    dal.getCategory(categoryID, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.updateCategory(req.body, function(err, result) {
                res.status(200).send(result)
            })
        }
    })
})

app.delete('/categories/:id', function(req, res, next) {
    const categoryID = req.params.id
    dal.getCategory(categoryID, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.deleteCategory(data, function(err, data) {
                res.status(200).send(data)
            })
        }
    })
})

/////////////////////////////////////////////////////
////////////// GLOSSARY /////////////////////////////
/////////////////////////////////////////////////////

app.post('/glossary', function(req, res, next) {
    dal.createGlossaryItem(req.body, function(err, result) {
        res.status(201).send(result)
    })
})

app.get('/glossary', function(req, res, next) {
    dal.getGlossary(req.body, function(err, result) {
        res.status(200).send(result)
    })
})

app.get('/glossary/:id', function(req, res, next) {
    const glossaryID = req.params.id
    dal.getGlossaryItem(glossaryID, function(err, result) {
        res.status(200).send(result)
    })
})

app.put('/glossary/:id', function(req, res, next) {
    const glossaryID = req.params.id
    dal.getGlossaryItem(glossaryID, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.updateGlossaryItem(data, function(err, result) {
                res.status(200).send(result)
            })
        }
    })
})

app.delete('/glossary/:id', function(req, res, next) {
    const glossaryID = req.params.id
    dal.getGlossaryItem(glossaryID, function callback(err, data) {
        if (err) {
            return err
        }
        if (data) {
            dal.deleteGlossaryItem(data, function(err, data) {
                res.status(200).send(data)
            })
        }
    })
})

/////////////////////////////////////////////////////
////////////// HELPER ///////////////////////////////
/////////////////////////////////////////////////////

app.get('*', (req, res) => res.send({ok: true}))

var server = http.createServer(app)
server.listen(port, () => console.log('opened server on', server.address()))
