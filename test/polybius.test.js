// Write your tests here!
const expect = require('chai').expect;
const polybius = require('../src/polybius');

describe('Polybius', () => {
    it("Should return false if input to be decoded is an incorrect length",() => {
        let actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
    it("Should return false if input to be encoded is not a valid message",() => {
        let actual = polybius("Take!$3928it$");
        expect(actual).to.be.false;
    });

    it("Should return a properly encoded message if given the correct input. Must ignore caps", () => {
        let actual = polybius("thinkful");
        let actual1 = polybius("Hello world");
        let expected = "4432423352125413";
        let expected1 = "3251131343 2543241341";

        expect(actual).to.eql(expected);
        expect(actual1).to.eql(expected1);
    });

    it("Should return a properly decoded message if given the correct input", () => {
        let actual = polybius("3251131343 2543241341", false);
        let actual1 = polybius("4432423352125413", false);

        let expected = "hello world";
        let expected1 = "th(i/j)nkful"

        expect(actual).to.eql(expected);
        expect(actual1).to.eql(expected1);
    });

    
});