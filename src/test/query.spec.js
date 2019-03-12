const assert = require('assert')

const { parse, stringify } = require('../query')

// describe('The query function can be anything I want but should be very descriptive to understand what it is doing'), function() {
//     it('should return an object of all query params when a query string is passed to it.')
// }

describe('The query function', function(){
    describe('The parse function', function() {
        it('should return an object of all query params when query string is passed to it')
        const query ='?by=kati-frantz&popular=true&category=nodejs'
        const actual = parse(query)
        const expectation = {
            by: 'kati-frantz',
            popular: 'true',
            category: 'nodejs'
        }
        assert.deepEqual(actual, expectation)
    })
    describe('The stringify function', function(){
        it('Should return a query string when an object is passed into it', () => {
            const query = {
                by: 'kati-frantz',
                popular: 'true',
                category: 'nodejs'
            }
            const actual = stringify(query)
            const expectation = 'by=kati-frantz&popular=true&category=nodejs'
            assert.deepEqual(actual, expectation)
        })
    })
})