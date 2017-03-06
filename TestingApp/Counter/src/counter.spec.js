import {counter} from './counter'

const {expect} = chai

describe('Increment', function () {
    describe('Test state', function () {
        it('should return 1 if state is 0', function () {
            expect(counter(0, 'INCREMENT')).to.be.equal(1)
        })
        it('should return 2 if state is 1', function () {
            expect(counter(1, 'INCREMENT')).to.be.equal(2)
        })
        it('should return 101.6 if state is 100.6', function () {
            expect(counter(100.6, 'INCREMENT')).to.be.equal(101.6)
        })
        it('should return 0 if state is undefined', function () {
            expect(counter()).to.be.equal(0)
        })
        it('should return -5 if state is -4', function () {
            expect(counter(-5, 'INCREMENT')).to.be.equal(-4)
        })
        it('should return 0 if state is -1', function () {
            expect(counter(-1, 'INCREMENT')).to.be.equal(0)
        })
        it('should return "ERROR State must be digit" if state is STRING', function () {
            expect(counter('asa', 'INCREMENT')).to.be.equal('State must be digit')
        })
        it('should return "ERROR State must be digit" if state is Empty STRING', function () {
            expect(counter('', 'INCREMENT')).to.be.equal('State must be digit')
        })
    })
    describe('Test Command ', function () {
        it('should return "ERROR Command must be INCREMENT or DECREMENT" if command is STRING', function () {
            expect(counter(6, 'sdsaf')).to.be.equal('Command must be INCREMENT or DECREMENT')
        })
        it('should return 3 if state is 2 and command is increment', function () {
            expect(counter(2, 'increment')).to.be.equal(3)
        })
        it('should return "3 " if state is 2 and command is InCreMenT', function () {
            expect(counter(2, 'InCreMenT')).to.be.equal(3)
        })
        it('should return "ERRORCommand must be INCREMENT or DECREMENT" if command is undefined', function () {
            expect(counter(6)).to.be.equal('Command must be INCREMENT or DECREMENT')
        })
        it('should return "ERROR Command must be INCREMENT or DECREMENT" if command is DIGIT', function () {
            expect(counter(6, 5)).to.be.equal('Command must be INCREMENT or DECREMENT')
        })
    })
})
describe('Decrement', function () {
    describe('Test state', function () {
        it('should return 3 if state is 4', function () {
            expect(counter(4, 'DECREMENT')).to.be.equal(3)
        })
        it('should return 2 if state is 3', function () {
            expect(counter(3, 'DECREMENT')).to.be.equal(2)
        })
        it('should return 0 if state is 1', function () {
            expect(counter(1, 'DECREMENT')).to.be.equal(0)
        })
        it('should return -5 if state is -4', function () {
            expect(counter(-4, 'DECREMENT')).to.be.equal(-5)
        })

        it('should return 99.6 if state is 100.6', function () {
            expect(counter(100.6, 'DECREMENT')).to.be.equal(99.6)
        })
        it('should return "ERROR State must be digit" if state is STRING', function () {
            expect(counter('asa', 'DECREMENT')).to.be.equal('State must be digit')
        })

    })
    describe('Test command', function () {
        it('should return "ERROR Command must be INCREMENT or DECREMENT" if command is STRING', function () {
            expect(counter(6, 'sdsaf')).to.be.equal('Command must be INCREMENT or DECREMENT')
        })
        it('should return "ERROR Command must be INCREMENT or DECREMENT" if command is DIGIT', function () {
            expect(counter(345, 3454)).to.be.equal('Command must be INCREMENT or DECREMENT')
        })
        it('should return "3 " if state is 4 and command is dEcrEmeNT', function () {
            expect(counter(4, 'dEcrEmeNT')).to.be.equal(3)
        })
    })
})