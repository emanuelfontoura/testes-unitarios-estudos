import { expect, test } from 'vitest'
import somar from '../services/sum.js'

test('somar 2 + 2 para ser igual a 4', () => {
    const result = somar(2, 2)
    expect(result).toEqual(4)
})