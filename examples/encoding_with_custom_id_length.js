
/* require hashids */
var Hashids = require("hashids");

/* creating class object with minimum hash length of 8 */
var hashids = new Hashids("this is my salt", 8);

/* encoding several numbers into one id (length of id is going to be at least 8) */
var id = hashids.encode(1337, 5);

/* decoding the same id */
var numbers = hashids.decode(id);

/* numbers is always an array */
console.log(id, numbers);

