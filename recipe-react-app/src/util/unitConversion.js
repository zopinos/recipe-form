import unitConversions from './unitConversions.json' assert { type: 'json'}

export const findUnit = (amount) => {
    return unitConversions.allUnits
        .find(unit => 
            amount.split(/\s+/).includes(unit)
        )
}

export const hasUnit = (amount) => {
    return findUnit(amount) ? true : false
}

const unitConverter = (amount) => {
    return amount
}

export default unitConverter