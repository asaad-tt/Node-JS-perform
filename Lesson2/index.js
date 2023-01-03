const fs = require("fs");
// write file ...........
/* fs.writeFile("lava.jsx", "lal pahar dake", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("lava success");
  }
}); */

/* // add file .................
fs.appendFile("lava.jsx", "Pandora is wonderful", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("lava success");
  }
}); */

/* // read file.................
fs.readFile("lava.jsx", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}); */

/* // rename file ...................
fs.rename("lava.jsx", "apple.jsx", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
}); */

/* // delete  file ...................
fs.unlink("apple.jsx", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
}); */

// exists  file ...................
fs.exists("apple.jsx", (result) => {
  if (result) {
    console.log("Found");
  } else {
    console.log("not found");
  }
});
