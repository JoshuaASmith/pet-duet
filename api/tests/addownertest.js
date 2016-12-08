const dal = require('./dal.js')
const personData = [
    {
        ownerFirstName: "Joshua",
        ownerLastName: "Smith",
        ownerAddress: "5095 Stone Fence Dr, Colorado Springs, CO 80923",
        ownerPhone: "307-262-6835",
        ownerEmail: "joshua@smith.com"
    }, {
        ownerFirstName: "Joshua",
        ownerLastName: "Smith",
        ownerAddress: "5095 Stone Fence Dr, Colorado Springs, CO 80923",
        ownerPhone: "307-262-6835",
        ownerEmail: "joshua@smith.com"
    }
]

function callback(msgHeader) {
    return function(err, response) {
        if (err)
            return console.log('ERROR:\n', err.message)
        return console.log(msgHeader, response)
    }
}

personData.forEach(function(owner) {
    dal.createOwner(owner, callback)
})
