import { isMultipleOf3 } from './isMultiple'

export const fizzbuzz = (n: number): string => {
  let res = ''
  if (isMultipleOf3(n)) res += 'fizz'
  if (n % 5 === 0) res += 'buzz'
  if (!res) res += n.toString()
  return res
}
