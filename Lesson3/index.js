// ####todays topic os & path module ###############

const os = require("os");
// console.log(os.userInfo());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());

// path .................

const path = require("path");
// console.log(path);

// const extensionName = path.extname("index.html");
// console.log(extensionName);

const joinName = path.join(__dirname + "/loak");
console.log(joinName);
