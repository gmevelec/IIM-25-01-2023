const isMultipleOf = (n: number, m: number): boolean => {
  return n % m === 0
}

const primeFactors = (n: number): Array<number> => {
  const res = []
  for (let divisor = 2; divisor <= n; divisor++) {
    while (isMultipleOf(n, divisor)) {
      res.push(divisor)
      n /= divisor
    }
  }
  return res
}

describe('Prime factor', () => {
  it('should return [] when 1 is given', () => {
    expect(primeFactors(1)).toEqual([])
  })
  it('should return [2] when 2 is given', () => {
    expect(primeFactors(2)).toEqual([2])
  })
  it('should return [2, 2] when 4 is given', () => {
    expect(primeFactors(4)).toEqual([2, 2])
  })
  it('should return [2, 2, 2] when 8 is given', () => {
    expect(primeFactors(8)).toEqual([2, 2, 2])
  })
  it('should return [3] when 3 is given', () => {
    expect(primeFactors(3)).toEqual([3])
  })
  it('should return [3, 3] when 9 is given', () => {
    expect(primeFactors(9)).toEqual([3, 3])
  })
  it('should return [2, 3, 7, 13, 17] when 2 * 3 * 7 * 13 * 17 is given', () => {
    expect(primeFactors(2 * 3 * 7 * 13 * 17)).toEqual([2, 3, 7, 13, 17])
  })
})
