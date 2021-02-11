// Write your tests here!
const expect = require('chai').expect;
const substitution = require('../src/substitution');

describe("Substitution", () => {
    it("Should return false if input is not a string", () => {
        let actual = substitution(123, "xoyqmcgrukswaflnthdjpzibev");
        expect(actual).to.be.false;
    });

    it("Should return false if the substitution alphabet is not 26 characters long", () => {
        let actual = substitution("thinkful", "short");
        expect(actual).to.be.false;
    });

    it("Should return false if the substitution alphabet contains duplicate characters", () => {
        let actual1 = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        expect(actual1).to.be.false;
    });

    it("Should return encoded message when given the proper input and alphabet",() => {
        let actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        let actual1 = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        let actual2 = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");

        let expected = 'jrufscpw';
        let expected1 = 'elp xhm xf mbymwwmfj dne';
        let expected2 = 'y&ii$r&';
    });
    it("Should return encoded message despite capital characters in input",() => {
        let actual = substitution("THINKFUL", "xoyqmcgrukswaflnthdjpzibev");
        let actual1 = substitution("You Are an EXcellent spy", "xoyqmcgrukswaflnthdjpzibev");
        let actual2 = substitution("MesSage", "$wae&zrdxtfcygvuhbijnokmpl");

        let expected = 'jrufscpw';
        let expected1 = 'elp xhm xf mbymwwmfj dne';
        let expected2 = 'y&ii$r&';
    });

    it("Should reutrn a decoded message when given the proper input and alphabet", () => {
        let actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
        let actual1= substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);

        let expected = 'thinkful';
        let expected1 = 'message';
    });
});