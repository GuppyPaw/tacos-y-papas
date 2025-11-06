export const VIEWS = {
    MAIN: 'MAIN',
    COLOR_PALETTE: 'COLOR_PALETTE',
    TIMER: 'TIMER',
    UNIT_CONVERT: 'UNIT_CONVERT',
    HABITS_DASHBOARD: 'HABITS_DASHBOARD',
    TRIVIA: 'TRIVIA',
    WIP: 'WIP'
}

export const OPERTAION_TYPE = {
    Mass: 'Mass',
    Distance: 'Distance',
    Temperature: 'Temperature'
}

export const MASS = {
    Kg: 'Kilogram',
    ton: 'Ton',
    g: 'Gram',
    oz: 'Ounce',
    lb: 'Pound'
}

export const DISTANCE = {
    Km: 'Kilometer',
    m: 'Meter',
    cm: 'Centimeter',
    ft: 'Foot',
    yrd: 'Yard',
    in: 'Inches'
}

export const TEMP = {
    celsius: '°C',
    farenheit: '°F',
    kelvin: 'K'
}

export const MASS_OPERATION = {
    Kg: { toBase: 1, fromBase: 1 },
    ton: { toBase: 1000, fromBase: 0.001 },
    g: { toBase: 0.001, fromBase: 1000 },
    oz: { toBase: 0.0283495, fromBase: 35.27396 },
    lb: { toBase: 0.453592, fromBase: 2.20462 }
}

export const DISTANCE_OPERATION = {
    Km: { toBase: 1000, fromBase: 0.001 },
    m: { toBase: 1, fromBase: 1 },
    cm: { toBase: 0.01, fromBase: 100 },
    ft: { toBase: 0.3048, fromBase: 3.28084 },
    yrd: { toBase: 0.9144, fromBase: 1.09361 },
    in: { toBase: 0.0254, fromBase: 39.3701 }
}

export const TEMP_OPERATION = {
    celsius: 'celsius',
    farenheit: 'farenheit',
    kelvin: 'kelvin'
}