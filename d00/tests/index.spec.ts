import { isEven } from './index'

describe('Est pair', () => {
  it('should return true if number is even', () => {
    expect(isEven(2)).toBeTruthy()
  })
  it('should return false if number is odd', () => {
    expect(isEven(1)).toBeFalsy()
  })
})
