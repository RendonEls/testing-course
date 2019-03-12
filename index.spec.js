const assert = require('assert')
const { add } = require('./index')

console.log("First Test")

    const actual = add(5, 6)
    const expectation = 11

    assert.equal(actual, expectation)

    console.log("successfully ran all tests")


console.log("End of first test")



console.log("Second Test: Test that add function throws and error if no arguments are passed")

assert.throw(() => {

    add()

})

console.log("successfully ran all tests")


console.log("End of second test")

