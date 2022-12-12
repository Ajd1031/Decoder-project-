// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", ()=> {
    describe("encoding", ()=> {
        it("should encode a message by translating each letter into a pair of numbers while also leaving spaces", ()=> {
            let input = "Test time";
            let actual = polybius(input);
            let expected = '44513444 44422351';
            expect(actual).to.equal(expected)
        })
        it("should transalte 'j' and 'i' to 42", ()=> {
            let input = "Jig"
            let actual = polybius(input);
            let expected = "424222"
            expect(actual).to.equal(expected)
        })
    })
    describe("decoding", ()=> {
        it("should leave spaces and decode a message by translating pairs of numbers to letters", ()=> {
            let input = '44513444 44422351'
            let encode = false;
            let actual = polybius(input, encode);
            let expected = 'test ti/jme'
            expect(actual).to.equal(expected);
        })
        it("should translate 42 to 'i/j'", ()=> {
            let input = "424222";
            let encode = false;
            let actual = polybius(input, encode);
            let expected = "i/ji/jg"
            expect(actual).to.equal(expected);
        })
        it("should return false if the length of the numbers is not even", ()=> {
            let input = 13284729574649302;
            let encode = false;
            let actual = polybius(input, encode);
            let expected = false;
            expect(actual).that.equal(expected);
        })
    })
})