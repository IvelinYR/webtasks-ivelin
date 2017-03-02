import {sum, division, multiplication, subtraction}  from './calc'

const {expect} = chai;

describe("sum", function () {
    it("should returna 100 from [1, 2, 3, 6, 12, 24, 52]", function () {
        expect(sum([1, 2, 3, 6, 12, 24, 52])).to.be.equal(100)
    })
    it("should returna 3 from [1,2]", function () {
        expect(sum([1, 2])).to.be.equal(3)
    })
    it("should returna 5 from [5]", function () {
        expect(sum([5])).to.be.equal(5)
    })
    it("should returna 20 from [10.5,9.5]", function () {
        expect(sum([10.5, 9.5])).to.be.equal(20)
    })
    it("should returna 20 from [-40, 60]", function () {
        expect(sum([-40, 60])).to.be.equal(20)
    })
    it("should returna -120 from [-40, -80]", function () {
        expect(sum([-40, -80])).to.be.equal(-120)
    })
    it("should return 'Error' when [4, sdasd ]", function () {
        expect(sum([4, 'dsf'])).to.be.equal("Error")
    })
    it("should return 'Error' when [sasasa, 56 ]", function () {
        expect(sum(['sasas', 56])).to.be.equal("Error")
    })
    it("should return 'Error' when sums words", function () {
        expect(sum(['asd', 'dfgsdf'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,$]", function () {
        expect(sum([67, '$'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,'']", function () {
        expect(sum([67, ''])).to.be.equal("Error")
    })
})

describe("division", function () {
    it("should returna 10 from [600, 3, 2, 5, 2]", function () {
        expect(division([600, 3, 2, 5, 2])).to.be.equal(10)
    })
    it("should returna 5 from [5]", function () {
        expect(division([5])).to.be.equal(5)
    })
    it("should returna -20 from [40,-2]", function () {
        expect(division([40, -2])).to.be.equal(-20)
    })
    it("should returna -0.6666666666666666 from [-40, 60]", function () {
        expect(division([-40, 60])).to.be.equal(-0.6666666666666666)
    })
    it("should returna 0.5 from [-40, -80]", function () {
        expect(division([-40, -80])).to.be.equal(0.5)
    })
    it("should returna 0 from [0,2]", function () {
        expect(division([0, 2])).to.be.equal(0)
    })
    it("should returna 'Error' from [asdas,2]", function () {
        expect(division(['adasd', 2])).to.be.equal("Error")
    })
    it("should returna 'Error' from [0,asdas]", function () {
        expect(division([0, 'asdasd'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,asdas]", function () {
        expect(division([67, 'asdasd'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [2,0]", function () {
        expect(division([2, 0])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,$]", function () {
        expect(division([67, '$'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,'']", function () {
        expect(division([67, ''])).to.be.equal("Error")
    })
})

describe("multiplication", function () {
    it("should returna 4 from [2,2]", function () {
        expect(multiplication([2, 2])).to.be.equal(4)
    })
    it("should returna 2400 from [2, 2, 2, 10, 3, 10]", function () {
        expect(multiplication([2, 2, 2, 10, 3, 10])).to.be.equal(2400)
    })
    it("should returna 5 from [5]", function () {
        expect(multiplication([5])).to.be.equal(5)
    })
    it("should returna -80 from [40,-2]", function () {
        expect(multiplication([40, -2])).to.be.equal(-80)
    })
    it("should returna -24 from [-4, 6]", function () {
        expect(multiplication([-4, 6])).to.be.equal(-24)
    })
    it("should returna 32 from [-4,-8]", function () {
        expect(multiplication([-4, -8])).to.be.equal(32)
    })
    it("should returna 0 from [0,2]", function () {
        expect(multiplication([0, 2])).to.be.equal(0)
    })
    it("should returna 0 from [2,0]", function () {
        expect(multiplication([2, 0])).to.be.equal(0)
    })
    it("should returne 'Error' from ['as',-4]", function () {
        expect(multiplication(['as', -4])).to.be.equal("Error")
    })
    it("should returne 'Error' from ['CCCCC',-4]", function () {
        expect(multiplication(['CCCCC', -4])).to.be.equal("Error")
    })
    it("should returna 'Error' from [CCCCC,2]", function () {
        expect(multiplication(['CCCCC', 2])).to.be.equal("Error")
    })
    it("should returna 'Error' from [0,CCCCC]", function () {
        expect(multiplication([0, 'CCCCC'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,CCCCC , 34 , 43 , 4]", function () {
        expect(multiplication([67, 'CCCCC', 34, 43, 4])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,$]", function () {
        expect(multiplication([67, '$'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,'']", function () {
        expect(multiplication([67, ''])).to.be.equal("Error")
    })
})

describe("subtraction", function () {
    it("should returne 5 from [9,4]", function () {
        expect(subtraction([9, 4])).to.be.equal(5)
    })
    it("should returne 5 from [99, 4, 5, 30, 50, 5]", function () {
        expect(subtraction([99, 4, 5, 30, 50, 5])).to.be.equal(5)
    })
    it("should returne -9 from [-5,4]", function () {
        expect(subtraction([-5, 4])).to.be.equal(-9)
    })
    it("should returne -1 from [-5,-4]", function () {
        expect(subtraction([-5, -4])).to.be.equal(-1)
    })
    it("should returne 'Error' from ['CCCCC',-4]", function () {
        expect(subtraction(['CCCCC', -4])).to.be.equal("Error")
    })
    it("should returna 'Error' from [CCCCC,2]", function () {
        expect(subtraction(['CCCCC', 2])).to.be.equal("Error")
    })
    it("should returna 'Error' from [0,CCCCC]", function () {
        expect(subtraction([0, 'CCCCC'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,CCCCC]", function () {
        expect(subtraction([67, 'CCCCC'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,CCCCC , 34 , 43 , 4]", function () {
        expect(subtraction([67, 'CCCCC', 34, 43, 4])).to.be.equal("Error")
    })
    it("should returna 100 from [233, 33, 50, 50]", function () {
        expect(subtraction([233, 33, 50, 50])).to.be.equal(100)
    })
    it("should returna 'Error' from [67,$]", function () {
        expect(subtraction([67, '$'])).to.be.equal("Error")
    })
    it("should returna 'Error' from [67,'']", function () {
        expect(subtraction([67, ''])).to.be.equal("Error")
    })

})