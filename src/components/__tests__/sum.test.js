import { Sum } from '../../Sum'

test('Sum function should calculate the sum of 2 numbers', () => {
    const res = Sum(3, 4)

    // Assertion
    expect(res).toBe(7)
})
