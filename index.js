const cowsay = require("cowsay");

function mimosa(message = "Instituto Biosistêmico") {
    console.log(cowsay.say({
        text : message,
        e : "oO",
        T : "U "
    }))
}

module.exports = mimosa