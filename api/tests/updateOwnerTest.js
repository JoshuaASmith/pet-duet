const dal = require('../dal.js')
const ownerData = {
    _id: "owner_Smith_Joshua_joshua@smith.com",
    _rev: "1-8d5a28d51f3a750bc8d8d5e37c192a5c",
    type: "owner",
    ownerFirstName: "Joshua",
    ownerLastName: "Smith",
    ownerAddress: "5095 Stone Fence Dr, Colorado Springs, CO 80923",
    ownerPhone: "307-262-6835",
    ownerEmail: "joshua@smith.com"
}

function callback(msgHeader) {
    return function(err, response) {
        if (err)
            return console.log('ERROR:\n', err.message)
        return console.log(msgHeader, response)
    }
}

ownerData.forEach(function(owner) {
    dal.updateOwner(owner, callback)
})
