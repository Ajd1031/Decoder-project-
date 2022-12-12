const {substitution} = require("../src/substitution")
const { expect } = require("chai");


// Write your tests here!
describe("subsitution", ()=> {
    describe("errors", ()=> {
        it("should return false if there is no alphabet", ()=> {
            let input = "This is a test"
            let actual = substitution(input);
            let expected = false;
            expect(actual).to.be.false;
        })
        it("should return false if alphabet is not 26 characters long", ()=> {
            let input = "This is a test"
            let alphabet = "qpwoeirtuy"
            let actual = substitution(input, alphabet)
            expect(actual).to.be.false;
        })
        it("should return false if the alphabet has repeating characters", ()=> {
            let input = "this is a test";
            let alphabet = "qwqwqwqwqwqwqwqwqwqwqwqwqw";
            let actual = substitution(input, alphabet);
            expect(actual).to.be.false;
        })
        describe("encoding", ()=> {
            it("should encode messages with the given alphabet and perserve spaces", ()=> {
                let input = "test time";
                let alphabet = "qwertyuiopasdfghjklzxcvbnm"
                let actual = substitution(input, alphabet);
                let expected = "ztlz zodt"
                expect(actual).to.equal(expected)
            })
            it("should work no matter what kind of characters the alphabet has", ()=> {
                let input = "test";
                let alphabet = "!@#$%^&*(_{|:><hgfdsaqwert";
                let actual = substitution(input, alphabet);
                let expected = "s%ds";
                expect(actual).to.equal(expected);            
            })
        })
        describe("decoding", ()=> {
            it("should decode a message with the given alphabet while keeping spaces", ()=> {
                let input = "ztlz zodt";
                let alphabet = "qwertyuiopasdfghjklzxcvbnm";
                let actual = substitution(input, alphabet, false);
                let expected = "test time";
                expect(actual).to.equal(expected);
            })
            it("should work no matter what kind of characters the alphabet has", ()=> {
                let input = "s%ds";
                let alphabet = "!@#$%^&*(_{|:><hgfdsaqwert";
                let actual = substitution(input, alphabet, false);
                let expected = "test";
                expect(actual).to.equal(expected);   
            })
        })
    })
})