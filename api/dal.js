const path = require('path')
const PouchDB = require('pouchdb-http')
PouchDB.plugin(require('pouchdb-mapreduce'))
const fetchConfig = require('zero-config')
var config = fetchConfig(path.join(__dirname, '..'), {dcValue: 'test'})
const urlFormat = require('url').format
// const db = new PouchDB(urlFormat(config.get("couch")))
require('dotenv').config();
const db = new PouchDB(process.env.DB_URL)

const dal = {
    createOwner: createOwner, //done
    listOwners: listOwners,
    getOwner: getOwner, //done
    updateOwner: updateOwner, //done
    deleteOwner: deleteOwner, //done
    /////////////////////////
    createPet: createPet, //done
    listOwnersPets: listPets,
    getPet: getPet,
    updatePet: updatePet,
    deletePet: deletePet,
    updateOwnerwithPet: updateOwnerwithPet,
    /////////////////////////
    createGlossaryItem: createGlossaryItem, //done
    getGlossary: getGlossary,
    getGlossaryWord: getGlossaryWord
}

function createOwner(owner, callback) {
    // const id = "owner_" + owner.ownerLastName + "_" + owner.ownerFirstName + "_" + owner.ownerEmail
    // const ownerResponse = {
    //     ok: true,
    //     id: id,
    //     rev: "1-30989284034985798u98473589027345"
    // }
    // return callback(null, ownerResponse)

    //example response
    // {
    //   "ok": true,
    //   "id": "mydoc",
    //   "rev": "1-84893984AKLJSLKJG24"
    // }
    owner.active = true
    owner.type = 'owner'
    owner._id = "owner_" + owner.ownerLastName + "_" + owner.ownerFirstName + "_" + owner.ownerEmail
    owner.pets = []
    db.post(owner, function(err, result) {
        if (err)
            return callback(err)
        if (result)
            return callback(null, result)
    })
}

function listOwners(owner, callback) {
    const ownerResponse = [
        {
            ownerFirstName: "Joshua",
            ownerLastName: "Smith",
            ownerAddress: "5095 Stone Fence Dr, Colorado Springs, CO 80923",
            ownerPhone: "307-262-6835",
            ownerEmail: "joshua@smith.com",
            type: "owner",
            _id: "owner_smith_joshua_joshua@smith.com",
            _rev: "2-c2e1681013626a82f7ebd35083b304a6"
        }, {
            ownerFirstName: "Joshua",
            ownerLastName: "Smith",
            ownerAddress: "5095 Stone Fence Dr, Colorado Springs, CO 80923",
            ownerPhone: "307-262-6835",
            ownerEmail: "joshua@smith.com",
            type: "owner",
            _id: "owner_smith_joshua_joshua@smith.com",
            _rev: "2-c2e1681013626a82f7ebd35083b304a6"
        }
    ]

    return callback(null, ownerResponse)
}

function getOwner(owner, callback) {
    db.get(owner, function(err, result) {
        if (err) {
            return console.log(err)
        }
        return callback(null, result)
    })
    // const ownerResponse = {
    //     ok: true,
    //     _id: "owner_fake",
    //     _rev: "1-30989284034985798u98473589027345"
    // }
    // return callback(null, ownerResponse)
}

function updateOwner(owner, callback) {
    if (typeof owner == "undefined" || owner === null) {
        return callback(new Error('400Missing owner for update'))
    } else if (owner.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing id property from owner'))
    } else {
        db.put(owner, function(err, result) {
            if (err) {
                return console.log(err)
            }
            return callback(null, result)
        })
    }
}

// function updateOwner(owner, callback) {
//     const ownerResponse = {
//         ok: true,
//         _id: owner._id,
//         _rev: "2-2849384938598453989485HI"
//     }
//     return callback(null, ownerResponse)
// }

function deleteOwner(owner, callback) {
    // const ownerResponse = {
    //     ok: true,
    //     _id: owner._id,
    //     _rev: "4-29284334958723948572093847520983457"
    // }
    // return callback(null, ownerResponse)
    if (typeof owner == "undefined" || owner === null) {
        return callback(new Error('400Missing owner for delete'))
    } else if (owner.hasOwnProperty('_id') !== true) {
        return callback(new Error('400Missing _id property from owner'))
    } else if (owner.hasOwnProperty('_rev') !== true) {
        return callback(new Error('400Missing _rev property from owner'))
    } else {
        db.remove(owner, function(err, response) {
            if (err)
                return callback(err)
            if (response)
                return callback(null, response);
            }
        )
    }
}

function createPet(ownerID, pet, callback) {
    // if (typeof pet == "undefined" || pet === null) {
    //     return callback(new Error('400Missing pet to create'))
    // } else if (pet.hasOwnProperty('_id') === true) {
    //     return callback(new Error('400Unnecessary _id property within data. ' +
    //         'createPerson() will generate a unique _id'))
    // } else {
    console.log('pet', pet)
    pet.active = true
    pet.type = 'pet'
    pet._id = "pet_" + pet.petName + "_" + pet.ownerName
    db.post(pet, function(err, result) {
        if (err)
            return callback(err)
        if (result) {
            return callback(null, result)
        }
    })
}

function getPet(pet, callback) {
    // const petResponse = {
    //     ok: true,
    //     _id: "pet_fakeGet",
    //     _rev: "1-30989284034985798u98473589027345"
    // }
    // return callback(null, petResponse)
}

function updatePet(pet, callback) {
    const petResponse = {
        ok: true,
        _id: pet._id,
        _rev: "2-2849384938598453989485HI"
    }
    return callback(null, petResponse)
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

function listPets(pet, callback) {
    const petResponse = [
        {
            "petId": "pet_dooley_smith",
            "petName": "Dooley",
            "petDOB": "2014-08-10",
            "petSpeciesBreed": "Dog-Corgi",
            "petMarkings": "Tan with white socks",
            "petGender": "Male",
            "petBreeder": "n/a",
            "petDateAcquired": "08-10-2015",
            "ownerID": "owner_smith_joshua_joshua@smith.com",
            "type": "pet",
            "petMedicalRecord": [
                {
                    "vaccineRecord": [
                        {
                            "type": "vaccineDog",
                            "medID": "vac_Lyme_Disease",
                            "vacName": "Lyme Disease",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Distemper",
                            "vacName": "Distemper",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Adenovirus2",
                            "vacName": "Adenovirus 2",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Parvovirus",
                            "vacName": "Parvovirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Leptospirs",
                            "vacName": "Leptospira",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Coronavirus",
                            "vacName": "Coronavirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Bordetella",
                            "vacName": "Bordetella",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Giardiasis",
                            "vacName": "Giardiasis",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Leukemia",
                            "vacName": "LeukemiaVirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Panleukopenia",
                            "vacName": "Panleukopenia",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Calicivirus",
                            "vacName": "Calicivirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Rhinotracheitis",
                            "vacName": "Rhinotracheitis",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Pneumonitis",
                            "vacName": "Pneumonitis",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_FIP",
                            "vacName": "FIP",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccine",
                            "medID": "vac_Rabies",
                            "vacName": "Rabies",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }
                    ],
                    "labTestData": [
                        {
                            "type": "labTest",
                            "medId": "labHeartworm",
                            "labName": "Heartwork",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }, {
                            "type": "labTest",
                            "medId": "labLeukemiaFIV",
                            "labName": "Leukemia/FIV",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }, {
                            "type": "labTest",
                            "medId": "labLymeDisease",
                            "labName": "Lyme Disease",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }, {
                            "type": "labTest",
                            "medId": "labDeworming",
                            "labName": "Deworming",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }
                    ]

                }
            ]
        }, {
            "petId": "pet_seconddog_smith",
            "petName": "second dog",
            "petDOB": "2014-08-10",
            "petSpeciesBreed": "Dog-Corgi",
            "petMarkings": "Tan with white socks",
            "petGender": "Male",
            "petBreeder": "n/a",
            "petDateAcquired": "08-10-2015",
            "ownerID": "owner_smith_joshua_joshua@smith.com",
            "type": "pet",
            "petMedicalRecord": [
                {
                    "vaccineRecord": [
                        {
                            "type": "vaccineDog",
                            "medID": "vac_Lyme_Disease",
                            "vacName": "Lyme Disease",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Distemper",
                            "vacName": "Distemper",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Adenovirus2",
                            "vacName": "Adenovirus 2",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Parvovirus",
                            "vacName": "Parvovirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Leptospirs",
                            "vacName": "Leptospira",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Coronavirus",
                            "vacName": "Coronavirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Bordetella",
                            "vacName": "Bordetella",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineDog",
                            "medID": "vac_Giardiasis",
                            "vacName": "Giardiasis",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Leukemia",
                            "vacName": "LeukemiaVirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Panleukopenia",
                            "vacName": "Panleukopenia",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Calicivirus",
                            "vacName": "Calicivirus",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Rhinotracheitis",
                            "vacName": "Rhinotracheitis",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_Pneumonitis",
                            "vacName": "Pneumonitis",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccineCat",
                            "medID": "vac_FIP",
                            "vacName": "FIP",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }, {
                            "type": "vaccine",
                            "medID": "vac_Rabies",
                            "vacName": "Rabies",
                            "administered": true,
                            "administeredOn": "12-1-2015"
                        }
                    ],
                    "labTestData": [
                        {
                            "type": "labTest",
                            "medId": "labHeartworm",
                            "labName": "Heartwork",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }, {
                            "type": "labTest",
                            "medId": "labLeukemiaFIV",
                            "labName": "Leukemia/FIV",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }, {
                            "type": "labTest",
                            "medId": "labLymeDisease",
                            "labName": "Lyme Disease",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }, {
                            "type": "labTest",
                            "medId": "labDeworming",
                            "labName": "Deworming",
                            "result": "negative",
                            "injection": false,
                            "comments": ""
                        }
                    ]

                }
            ]
        }
    ]
    return callback(null, petResponse)
}

function updateOwnerwithPet(pet, owner, callback) {
    petID = 'pet_' + pet + "_" + owner.ownerLastName
    owner.pets.push(petID)
    db.put(owner, function(err, result) {
        if (err)
            return callback(err)
        if (result) {
            console.log(result)
            return callback(null, result)
        }
    })
}

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

function getGlossary(word, callback) {
    const glossaryDefinition = [
        {
            word: "rabies",
            definition: "rabies is bad"
        }, {
            word: "Bordetella",
            definition: "a type of shot"
        }
    ]
    return callback(null, glossaryDefinition)
}

function getGlossaryWord(word, callback) {
    const glossaryDefinition = {
        word: "lyme disease",
        definition: "a disease dogs get through ticks"
    }
    return callback(null, glossaryDefinition)
}

module.exports = dal
