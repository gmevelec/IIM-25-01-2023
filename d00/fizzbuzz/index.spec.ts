import { fizzbuzz } from './index'

describe('Fizzbuzz', () => {
  describe('Not a multiple of 3 or 5', () => {
    it.each([
      ["1", 1],
      ["7", 7],
      ["17", 17]
    ])('should return "%s" when %i is given', (expected, value) => {
      expect(fizzbuzz(value)).toEqual(expected)
    })
  })
  describe('Multiple of 3', () => {
    it('should return "fizz" when 3 is given', () => {
      expect(fizzbuzz(3)).toEqual("fizz")
    })
    it('should return "fizz" when 6 is given', () => {
      expect(fizzbuzz(6)).toEqual("fizz")
    })
  })
  describe('Multiple of 5', () => {
    it('should return "buzz" when 5 is given', () => {
      expect(fizzbuzz(5)).toEqual("buzz")
    })
    it('should return "buzz" when 10 is given', () => {
      expect(fizzbuzz(10)).toEqual("buzz")
    })
  })
  describe('Multiple of 15', () => {
    it('should return "fizzbuzz" when 15 is given', () => {
      expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
    it('should return "fizzbuzz" when 30 is given', () => {
      expect(fizzbuzz(30)).toEqual("fizzbuzz")
    })
  })
})
