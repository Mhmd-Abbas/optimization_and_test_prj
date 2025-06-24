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
    it("should return the input as it is", () => {
        //data to pass to function
        const input = [45];
        const result = shuffle(input);

        //check result
        assert.equal(result, 45, `expected 45 but recieved ${result}`)
    })
})
