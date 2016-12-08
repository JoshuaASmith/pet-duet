const dal = require('../dal.js')
const wordData = [
    {
        word: "Rabies",
        definition: "Of all animal diseases, rabies is probably the most feared. The rabies virus attacks the brain and is always fatal. Most pets are exposed to rabies by bites from wild animals, particularly skunks, raccoons, bats and foxes. The disease can be transmitted to humans through the bite or scratch of an infected pet. Vaccination of all dogs and cats is the most effective means of control."
    }, {
        word: "Canine Distemper",
        definition: "This highly contagious viral disease is found wherever dogs are found. It affects the respiratory and nervous system and is often fatal. Primary vaccination should begin at 6-12 weeks of age since dogs often contract the disease at an early age."
    }
]

function callback(msgHeader) {
    return function(err, response) {
        if (err)
            return console.log(err.message)
        return console.log(msgHeader, response)
    }
}

wordData.forEach(function(word) {
    dal.createGlossaryItem(word, callback)
})
