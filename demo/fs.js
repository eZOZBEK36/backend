/** @format */

const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (err) => {
// 	if (err) {
// 		throw err;
// 	}

// 	console.log("File created");
// });

// fs.writeFile(path.join(__dirname, "test", "text.md"), "Hello NodeJS", (err) => {
// 	if (err) {
// 		throw err;
// 	}
// 	console.log("File created");
// });

fs.readFile(
	path.join(__dirname, "test", "text.md"),
	"utf-8",
	(err, content) => {
		if (err) {
			throw err;
		}
		console.log(content);
	}
);
