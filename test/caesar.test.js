// Write your tests here!
const expect = require('chai').expect;
const caesar = require('../src/caesar');

/*****Caesar Test******/
describe('Caesar', () => {
    //Ensure that the message to encode or decode is a string
    it("Should return false if the first paramter is not string", () => {
        let output = caesar(124, 5);
        expect(output).to.be.false;
    });
    //Ensure that the the second parameter is an interger string
    it("Should return false if second parameter is not a number or doesn't exist", () => {
        let actual = caesar("Hello", "Shift by 3");
        let actual1 = caesar("thinkful");
        expect(actual).to.be.false;
        expect(actual1).to.be.false;
    });
    //Ensure that the shift value is between -25 and 25
    it("Should return false if shit is not between -25 and 25", () => {
        let actual = caesar("My name is Sunny", 56);
        let actual1 = caesar("Hello World!", -37);
        let actual2 = caesar("thinkful");
        expect(actual).to.be.false;
        expect(actual1).to.be.false;
        expect(actual2).to.be.false;
    });
    //Ensure encoding is correctly
    it("Should return encoded message. Must ignore capital characters.", () => {
        let actual = caesar("thinkful", 3);
        let actual1 = caesar("thinkful", -3);
        let actual2 = caesar("THis is a secret meSsage!", 8);

        let expected = 'wklqnixo';
        let expected1 = 'qefkhcri';
        let expected2 = 'bpqa qa i amkzmb umaaiom!';

        expect(actual).to.eql(expected);
        expect(actual1).to.eql(expected1);
        expect(actual2).to.eql(expected2);
    });

    it("Should reture decoded message", () => {
        let actual = caesar("wklqnixo", 3, false);
        let actual1 = caesar("BPQA qa I amkzmb umaaiom!", 8, false);

        let expected = 'thinkful';
        let expected1 = 'this is a secret message!';

        expect(actual).to.eql(expected);
        expect(actual1).to.eql(expected1);
    });


});
