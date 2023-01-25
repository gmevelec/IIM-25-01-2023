export const isEven = (n: number) => {
  if (n < 0) throw Error('Cant be negative')
  return n % 2 === 0
}
