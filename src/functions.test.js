

const {
    returnTwo,
    greeting,
    add
} = require('./functions')

// test('should run', () => expect(2).toBe(2))

describe('returnTwo', () => {
    test('returnTwo should return 2', () => {
        let returnsTwo = returnTwo()
        expect(returnsTwo).toBe(2)

    })
})

describe('greeting', () => {
    test('greeting should return "Hello, James"', () => {
        let greeted = greeting('James')
        expect(greeted).toBe('Hello, James')

    })
    test('greeting should return "Hello, Jill', () => {
        let greeted = greeting('Jill')
        expect(greeted).toBe('Hello, Jill')
    })
})

describe('add', () => {
    test('add should return 3', () => {
        let added = add(1, 2)
        expect(added).toBe(3)
    })
    test('add should return 14', () => {
        let added = add(5, 9)
        expect(added).toBe(14)
    })
})