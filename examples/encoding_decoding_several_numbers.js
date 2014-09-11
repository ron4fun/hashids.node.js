
/* require hashids */
var Hashids = require("hashids");

/* creating class object */
var hashids = new Hashids("this is my salt");

/* encoding several numbers into one id */
var id = hashids.encode(1337, 5, 77, 12345678);

/* decoding that hash */
var numbers = hashids.decode(id);

/* numbers is always an array */
console.log(id, numbers);
