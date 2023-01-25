

describe('Ma premiere suite de test', () => {
  let plop = 'plop'
  describe('Mon cas precis', () => {
    beforeEach(() => {
      plop = 'plop'
    })
    it('should be false', () => {
      plop = 'plop updated'
      expect(plop).toBe('plop updated')
    })
    it('should be true', () => {
      plop = 'plop updated'
      expect(plop).toBe('plop updated')
    })
  })
  it('should be true', () => {
    expect(plop).toBe('plop updated')
  })
})
