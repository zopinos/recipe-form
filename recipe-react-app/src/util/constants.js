export const conversions = {
    volume: {
        l: 1.0, /* base unit */
        dl: 10.0,
        tl: 200.0,
        rkl: 66.666
    },
    mass: {
        kg: 1.0, /* base unit */
        g: 1000.0
    }
}

export const allUnits = Object.keys(conversions)
    .flatMap((key) =>
        Object.keys(conversions[key])
    )

export const volumes = Object.keys(conversions.volume)

export const masses = Object.keys(conversions.mass)