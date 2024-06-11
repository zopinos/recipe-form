/* eslint-disable no-undef */
import { expect, test } from 'vitest'
import {
    hasUnit,
    findUnit,
    hasQuantity,
    findQuantity,
    hasConvertableAmount,
    convertAmount
} from '../util/unitConversion.js'
import { allUnits } from '../util/constants.js'

test('tests work', () => {
    console.log("hello  world!".split(/\s+/))
    console.log(allUnits)

    expect(true).toBe(true)
})

describe('hasUnit', () => {
    test('returns true when a unit is found in a string', () => {
        expect(hasUnit('5 dl')).toStrictEqual(true)
    })

    test('returns false when a unit is not found in a string', () => {
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

describe('hasQuantity', () => {
    test('returns true when quantity is in string', () => {
        expect(hasQuantity('5 dl', 'dl')).toStrictEqual(true)
    })

    test('returns false when quantity is not in string', () => {
        expect(hasQuantity('viisi dl', 'dl')).toStrictEqual(false)
    })
})

describe('findQuantity', () => {
    test('returns the found quantity as a Number when amount is correctly formatted in a string', () => {
        expect(findQuantity('5 dl', 'dl')).toStrictEqual(5)
    })

    test('returns falsey when quantity is not in string', () => {
        expect(hasQuantity('viisi dl', 'dl')).toBeFalsy()
    })
})

describe('hasConvertableAmount', () => {
    test('returns true if a convertable amount can be found in a string', () => {
        expect(hasConvertableAmount('5 dl')).toStrictEqual(true)
    })

    test('returns false if a convertable amount cannot be found in a string', () => {
        expect(hasConvertableAmount('viisi dl')).toStrictEqual(false)
        expect(hasConvertableAmount('5 not-a-unit')).toStrictEqual(false)
    })
})

describe('convertAmount', () => {
    test('returns correctly converted amount (volume)', () => {
        expect(convertAmount('5 l', 'dl')).toStrictEqual('50 dl')
        expect(convertAmount('50 dl', 'l')).toStrictEqual('5 l')
    })

    test('returns correctly converted amount (little more complex volume)', () => {
        expect(convertAmount('1 tl', 'dl')).toStrictEqual('0.05 dl')
    })

    test('returns correctly converted amount (complex volume)', () => {
        expect(convertAmount('1 dl', 'rkl')).toStrictEqual('6.6666 rkl')
    })

    test('returns correctly converted amount (mass)', () => {
        expect(convertAmount('5 kg', 'g')).toStrictEqual('5000 g')
        expect(convertAmount('5000 g', 'kg')).toStrictEqual('5 kg')
    })
})