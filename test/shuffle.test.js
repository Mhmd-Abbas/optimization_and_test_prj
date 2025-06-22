/* eslint-disable no-undef */
import { shuffle } from "../src/shuffle.js";
import { assert } from "chai";


// describe test suit
describe("Verifies shuffle funtionality", () => {
    //it test cases

    //happy path
    it("should shuffle the indexes of an array", () => {
        //data to pass to function
        const input = [1, 2, 3, 4, 5];
        const result = shuffle(input);
        //check result
        assert.notEqual(result, input, `expected shuffled array but recieved ${result}`)
    })

    //edge case
    it("should return that the input is not iterable", () => {
        //data to pass to function
        const input = 1;
        const result = shuffle(input);

        //check result
        assert.isNotArray(result, `expected an array but recieved ${result}`)
    })
})
