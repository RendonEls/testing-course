const assert = require('assert')
const { add } = require('./index')

describe('The ADD function tests', function() {

    it('Should return 11 for arguments 5 and 6', function(){
        const actual = add(5, 6)
        const expectation = 11
    assert.equal(actual, expectation)
    })

    it('Should throw and error if arguments are not passed in', function(){
        assert.throws(() => {
            add()
        })
    })
})



// console.log("First Test")

//     console.log("successfully ran all tests")

// console.log("End of first test")

// console.log("Second Test: Test that add function throws and error if no arguments are passed")

// console.log("successfully ran all tests")

// console.log("End of second test")

