const crypto = require("crypto");

const data = "dasdsdasdasdsd";

const hash = crypto.createHash("sha256").update(data).digest("hex");

const testData2 = "dasdsdasdasdsd";

const hash2 = crypto.createHash("sha256").update(testData2).digest("hex");

console.log(hash === hash2 ? true : false);
