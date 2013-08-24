var Hashids = require("../lib/hashids");

describe("Hashids", function() {
	
	it("should pass basic encryption", function() {
		
		var hashids = new Hashids(),
			numbers = [1, 2, 3, 4, 5];
		
		var hash = hashids.encrypt.apply(hashids, numbers),
			returnedNumbers = hashids.decrypt(hash);
		
		expect(hash).toBeTruthy();
		expect(numbers).toEqual(returnedNumbers);
		
	});
	
	it("should pass basic encryption by passing array directly", function() {
		
		var hashids = new Hashids(),
			numbers = [1, 2, 3, 4, 5];
		
		var hash = hashids.encrypt(numbers),
			returnedNumbers = hashids.decrypt(hash);
		
		expect(hash).toBeTruthy();
		expect(numbers).toEqual(returnedNumbers);
		
	});
	
	it("should pass encryption by passing a hex string (mongodb test)", function() {
		
		var hashids = new Hashids(),
			hex = "507f1f77bcf86cd799439011";
		
		var hash = hashids.encryptHex(hex),
			returnedHex = hashids.decryptHex(hash);
		
		expect(hash).toBeTruthy();
		expect(hex).toEqual(returnedHex);
		
	});
	
	it("should pass encryption by passing a hex string (mongodb test), with minimum hash length parameter", function() {
		
		var minHashLength = 1000,
			hashids = new Hashids("", minHashLength),
			hex = "507f1f77bcf86cd799439011";
		
		var hash = hashids.encryptHex(hex),
			returnedHex = hashids.decryptHex(hash);
		
		expect(hash).toBeTruthy();
		expect(hex).toEqual(returnedHex);
		
		expect(hash.length).toEqual(minHashLength);
		
	});
	
	it("should pass encryption by passing a long hex string (mongodb test)", function() {
		
		var hashids = new Hashids(),
			hex = "f000000000000000000000000000000000000000000000000000000000000000000000000000000000000f";
		
		var hash = hashids.encryptHex(hex),
			returnedHex = hashids.decryptHex(hash);
		
		expect(hash).toBeTruthy();
		expect(hex).toEqual(returnedHex);
		
	});
	
	it("should pass basic encryption with salt value", function() {
		
		var hashids = new Hashids("this is my salt"),
			numbers = [1, 2, 3, 4, 5];
		
		var hash = hashids.encrypt.apply(hashids, numbers),
			returnedNumbers = hashids.decrypt(hash);
		
		expect(hash).toBeTruthy();
		expect(numbers).toEqual(returnedNumbers);
		
	});
	
	it("should pass encryption with salt value, and minimum hash length", function() {
		
		var minHashLength = 1000,
			hashids = new Hashids("this is my salt", minHashLength),
			numbers = [1, 2, 3, 4, 5];
		
		var hash = hashids.encrypt.apply(hashids, numbers),
			returnedNumbers = hashids.decrypt(hash);
		
		expect(hash).toBeTruthy();
		expect(numbers).toEqual(returnedNumbers);
		
		expect(hash.length).toEqual(minHashLength);
		
	});
	
	it("should pass encryption with salt value, and big minimum hash length", function() {
		
		var minHashLength = 1000000,
			hashids = new Hashids("this is my salt", minHashLength),
			numbers = [1, 2, 3, 4, 5];
		
		var hash = hashids.encrypt.apply(hashids, numbers),
			returnedNumbers = hashids.decrypt(hash);
		
		expect(hash).toBeTruthy();
		expect(numbers).toEqual(returnedNumbers);
		
		expect(hash.length).toEqual(minHashLength);
		
	});
	
	it("should pass encryption with salt value, minimum hash length, and custom alphabet", function() {
		
		var minHashLength = 1000,
			customAlphabet = "0123456789abcdef",
			hashids = new Hashids("this is my salt", minHashLength, customAlphabet),
			numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		
		var hash = hashids.encrypt(numbers),
			returnedNumbers = hashids.decrypt(hash);
		
		expect(hash).toBeTruthy();
		expect(numbers).toEqual(returnedNumbers);
		
		expect(hash.length).toEqual(minHashLength);
		
		var isHex = /^[0-9a-f]+$/.test(hash);
		expect(isHex).toEqual(true);
		
	});
	
});
