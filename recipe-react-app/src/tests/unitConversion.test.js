/* eslint-disable no-undef */
import { expect, test } from 'vitest'
import { hasUnit, findUnit } from '../util/unitConversion.js'

test('tests work', () => {
    console.log("hello  world!".split(/\s+/))

    expect(true).toBe(true)
})

describe('hasUnit', () => {
    test('returns true when unit in a string', () => {
        expect(hasUnit('5 dl')).toStrictEqual(true)
      })

    test('returns false when unit is not found in a string', () => {
        expect(hasUnit('5')).toStrictEqual(false)
    })

    test('returns false when a unit is part of some other word', () => {
        expect(hasUnit('waddle')).toStrictEqual(false)
    })
})

describe('findUnit', () => {
    test('returns the found unit when unit in a string', () => {
        expect(findUnit('5 dl')).toStrictEqual('dl')
      })

    test('returns falsy when unit is not found in a string', () => {
        expect(findUnit('5')).toBeFalsy()
    })
})