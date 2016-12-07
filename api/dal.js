const path = require('path')
const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
PouchDB.plugin(require('pouchdb-find'))
const fetchConfig = require('zero-config')
var config = fetchConfig(path.join(__dirname, '..'), {dcValue: 'test'})
const urlFormat = require('url').format
// const db = new PouchDB(urlFormat(config.get("couch")))
require('dotenv').config();
const db = new PouchDB(process.env.DB_URL)

const dal = {
    createPet: createPet,
    listPets: listPets,
    getPet: getPet,
    updatePet: updatePet,
    deletePet: deletePet,
    /////////////////////////
    createProcedure: createProcedure,
    listProcedures: listProcedures,
    getProcedure: getProcedure,
    updateProcedure: updateProcedure,
    deleteProcedure: deleteProcedure,
    /////////////////////////
    createCategory: createCategory,
    listCategories: listCategories,
    getCategory: getCategory,
    updateCategory: updateCategory,
    deleteCategory: deleteCategory
}

/////////////////////////////////////////////////////
////////////// PET FUNCTIONS ////////////////////////
/////////////////////////////////////////////////////

function createPet(owner, callback) {
    pet.active = true
    pet.type = 'pet'
    pet._id = "pet_" + pet.petName + "_" + pet.ownerLastName
    db.post(pet, function(err, result) {
        if (err)
            return callback(err)
        if (result)
            return callback(null, result)
    })
}

function listPets(pet, callback) {
    db.find({
        selector: {
            type: {
                $eq: 'pet'
            }
        }
    }).then(function(result) {
        return callback(null, result)
    })
}

function getPet(pet, callback) {
    db.get(pet, function(err, result) {
        if (err) {
            return console.log(err)
        }
        return callback(null, result)
    })
}

function updatePet(pet, callback) {
    if (typeof pet == "undefined" || pet === null) {
        return callback(new Error('400Missing pet for update'))
    } else if (pet.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing id property from pet'))
    } else {
        db.put(pet, function(err, result) {
            if (err) {
                return console.log(err)
            }
            return callback(null, result)
        })
    }
}

function deletePet(pet, callback) {
    if (typeof pet == "undefined" || pet === null) {
        return callback(new Error('400Missing pet for delete'))
    } else if (pet.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing _id property from pet'))
    } else if (pet.hasOwnProperty('_rev') !== true) {
        return callback(new Error('400Missing _rev property from pet'))
    } else {
        db.remove(pet, function(err, response) {
            if (err)
                return callback(err)
            if (response)
                return callback(null, response);
            }
        )
    }
}

/////////////////////////////////////////////////////
////////////// PROCEDURE FUNCTIONS //////////////////
/////////////////////////////////////////////////////

function createProcedure(procedure, callback) {
    procedure.type = 'procedure'
    procedure._id = "procedure_" + procedure.name
    db.post(procedure, function(err, result) {
        if (err)
            return callback(err)
        if (result) {
            return callback(null, result)
        }
    })
}

function listProcedures(procedure, callback) {
    db.find({
        selector: {
            type: {
                $eq: 'procedure'
            }
        }
    }).then(function(result) {
        return callback(null, result)
    })
}

function getProcedure(procedure, callback) {
    db.get(procedure, function(err, result) {
        if (err) {
            return console.log(err)
        }
        return callback(null, result)
    })
}

function updateProcedure(procedure, callback) {
    if (typeof procedure == "undefined" || procedure === null) {
        return callback(new Error('400Missing procedure for update'))
    } else if (procedure.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing id property from procedure'))
    } else {
        db.put(procedure, function(err, result) {
            if (err) {
                return console.log(err)
            }
            return callback(null, result)
        })
    }
}

function deleteProcedure(procedure, callback) {
    if (typeof procedure == "undefined" || procedure === null) {
        return callback(new Error('400Missing procedure for delete'))
    } else if (procedure.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing _id property from procedure'))
    } else if (procedure.hasOwnProperty('_rev') !== true) {
        return callback(new Error('400Missing _rev property from procedure'))
    } else {
        db.remove(procedure, function(err, response) {
            if (err)
                return callback(err)
            if (response)
                return callback(null, response);
            }
        )
    }
}

/////////////////////////////////////////////////////
////////////// CATEGORY FUNCTIONS ///////////////////
/////////////////////////////////////////////////////

function createCategory(category, callback) {
    category.type = 'category'
    category._id = "category_" + category.name
    db.post(category, function(err, result) {
        if (err)
            return callback(err)
        if (result) {
            return callback(null, result)
        }
    })
}

function listCategories(category, callback) {
    db.find({
        selector: {
            type: {
                $eq: 'category'
            }
        }
    }).then(function(result) {
        return callback(null, result)
    })
}

function getCategory(category, callback) {
    db.get(category, function(err, result) {
        if (err) {
            return console.log(err)
        }
        return callback(null, result)
    })
}

function updateCategory(category, callback) {
    if (typeof category == "undefined" || category === null) {
        return callback(new Error('400Missing category for update'))
    } else if (category.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing id property from category'))
    } else {
        db.put(category, function(err, result) {
            if (err) {
                return console.log(err)
            }
            return callback(null, result)
        })
    }
}

function deleteCategory(category, callback) {
    if (typeof category == "undefined" || category === null) {
        return callback(new Error('400Missing category for delete'))
    } else if (category.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing _id property from category'))
    } else if (category.hasOwnProperty('_rev') !== true) {
        return callback(new Error('400Missing _rev property from category'))
    } else {
        db.remove(category, function(err, response) {
            if (err)
                return callback(err)
            if (response)
                return callback(null, response);
            }
        )
    }
}

/////////////////////////////////////////////////////
////////////// GLOSSARY FUNCTIONS //////////////////
/////////////////////////////////////////////////////

function createGlossaryItem(word, callback) {
    word.type = 'glossary'
    word._id = 'glossary_' + word.word
    db.post(word, function(err, result) {
        if (err)
            return callback(err)
        if (result)
            return callback(null, result)
    })
}

function getGlossary(word, callback) {}

function getGlossaryWord(word, callback) {}

module.exports = dal
