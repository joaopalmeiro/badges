const fs = require("fs");

exports.badges = fs.readdirSync("./src/images/badges");
