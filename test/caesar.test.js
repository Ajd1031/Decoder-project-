// Write your tests here!
const {caesar} = require("../src/caesar")
const {expect} = require("chai")

describe("caesar function", () => {
    describe("errors", () => {
        it("should return false if shift is equal to 0", () => {
            let input = "This is a test.";
            let shift = 0;
            let actual = caesar(input, shift)
            expect(actual).to.be.false;
        })
        it("should return false if shift is above 25", () => {
            let input = "This is a test.";
            let shift = 75;
            let actual = caesar(input, shift)
            expect(actual).to.be.false;
        })
        it("should return false if shift is below -25", () => {
            let input = "This is a test.";
            let shift = -88;
            let actual = caesar(input, shift)
            expect(actual).to.be.false;
        })
    })
    describe("encoding", () => {
        it("encodes a message and leaves spaces and other characters alone while ignoring capitol letters", () => {
            let input = "This is a test.";
            let shift = 1;
            let actual = caesar(input, shift)
            let expected = "uijt jt b uftu."
            expect(actual).to.equal(expected)
        })
        it("wraps around the alphabet if necessary", ()=> {
            let input = "Zen";
            let shift = 5;
            let actual = caesar(input, shift);
            let expected = "ejs";
            expect(actual).to.equal(expected);
        })
        it("should allow for a negative shift", ()=> {
            let input = "Dog";
            let shift = -1;
            let actual = caesar(input, shift);
            let expected = "cnf";
            expect(actual).to.equal(expected);
        })
    })
    describe("decoding", ()=> {
        it ("should leave spaces and ignore capitol letters when decoding a message", ()=> {
            let input = "uijt jt b uftu."
            let shift = 1;
            let encode = false;
            let actual = caesar(input, shift, encode);
            let expected = "this is a test."
            expect(actual).to.equal(expected)
        })
        it ("should wrap around the alphabet if necessary", ()=> {
            let input = "ejs";
            let shift = 5;
            let encode = false;
            let actual = caesar(input, shift, encode);
            let expected = "zen";
            expect(actual).to.equal(expected);
        })
        it ("should decode a message accurately if the shift is negative", ()=> {
            let input = "cnf";
            let shift = -1;
            let encode = false
            let actual = caesar(input, shift, encode);
            let expected = "dog";
            expect(actual).to.equal(expected);
        })
    })
}) 