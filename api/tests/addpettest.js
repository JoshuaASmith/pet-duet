const dal = require('../dal.js')
const petData = [
    {
        petName: "Fluffy",
        petDOB: "2014-08-10",
        petSpeciesBreed: "Cat-MainCoon",
        petMarkings: "brown and black mix",
        petGender: "Female",
        petBreeder: "n/a",
        petDateAcquired: "08-10-2015",
        ownerID: "owner_wieck_debbie_debbie@wieck.com",
        petOwnerName: "DebbieWieck",
        petMedicalRecord: [
            {
                vaccineRecord: [
                    {
                        type: "vaccineDog",
                        medID: "vac_Lyme_Disease",
                        vacName: "Lyme Disease",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Distemper",
                        vacName: "Distemper",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Adenovirus2",
                        vacName: "Adenovirus 2",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Parvovirus",
                        vacName: "Parvovirus",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Leptospirs",
                        vacName: "Leptospira",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Coronavirus",
                        vacName: "Coronavirus",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Bordetella",
                        vacName: "Bordetella",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Giardiasis",
                        vacName: "Giardiasis",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Leukemia",
                        vacName: "LeukemiaVirus",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Panleukopenia",
                        vacName: "Panleukopenia",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Calicivirus",
                        vacName: "Calicivirus",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Rhinotracheitis",
                        vacName: "Rhinotracheitis",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Pneumonitis",
                        vacName: "Pneumonitis",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_FIP",
                        vacName: "FIP",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccine",
                        medID: "vac_Rabies",
                        vacName: "Rabies",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }
                ],
                labTestData: [
                    {
                        type: "labTest",
                        medId: "labHeartworm",
                        labName: "Heartwork",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }, {
                        type: "labTest",
                        medId: "labLeukemiaFIV",
                        labName: "Leukemia/FIV",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }, {
                        type: "labTest",
                        medId: "labLymeDisease",
                        labName: "Lyme Disease",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }, {
                        type: "labTest",
                        medId: "labDeworming",
                        labName: "Deworming",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }
                ]

            }
        ]
    }, {
        petName: "Dooley",
        petDOB: "2014-08-10",
        petSpeciesBreed: "Dog-Corgi",
        petMarkings: "brown and white mix",
        petGender: "Male",
        petBreeder: "n/a",
        petDateAcquired: "08-10-2015",
        ownerID: "owner_smith_joshua_joshua@smith.com",
        petOwnerName: "JoshuaSmith",
        petMedicalRecord: [
            {
                vaccineRecord: [
                    {
                        type: "vaccineDog",
                        medID: "vac_Lyme_Disease",
                        vacName: "Lyme Disease",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Distemper",
                        vacName: "Distemper",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Adenovirus2",
                        vacName: "Adenovirus 2",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Parvovirus",
                        vacName: "Parvovirus",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Leptospirs",
                        vacName: "Leptospira",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Coronavirus",
                        vacName: "Coronavirus",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Bordetella",
                        vacName: "Bordetella",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineDog",
                        medID: "vac_Giardiasis",
                        vacName: "Giardiasis",
                        administered: false,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Leukemia",
                        vacName: "LeukemiaVirus",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Panleukopenia",
                        vacName: "Panleukopenia",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Calicivirus",
                        vacName: "Calicivirus",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Rhinotracheitis",
                        vacName: "Rhinotracheitis",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_Pneumonitis",
                        vacName: "Pneumonitis",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccineCat",
                        medID: "vac_FIP",
                        vacName: "FIP",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }, {
                        type: "vaccine",
                        medID: "vac_Rabies",
                        vacName: "Rabies",
                        administered: true,
                        administeredOn: "12-1-2015"
                    }
                ],
                labTestData: [
                    {
                        type: "labTest",
                        medId: "labHeartworm",
                        labName: "Heartwork",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }, {
                        type: "labTest",
                        medId: "labLeukemiaFIV",
                        labName: "Leukemia/FIV",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }, {
                        type: "labTest",
                        medId: "labLymeDisease",
                        labName: "Lyme Disease",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }, {
                        type: "labTest",
                        medId: "labDeworming",
                        labName: "Deworming",
                        result: "negative",
                        injection: false,
                        comments: ""
                    }
                ]

            }
        ]
    }
]

function callback(msgHeader) {
    return function(err, response) {
        if (err)
            return console.log('ERROR:\n', err.message)
        return console.log(msgHeader, response)
    }
}

petData.forEach(function(pet) {
    dal.createPet(pet, callback)
})
