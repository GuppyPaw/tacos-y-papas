import { useState, useEffect } from 'react';
import './unit-converter.css'
import SelectOptions from '../../components/select-options/select-options';
import * as CONSTANTS from '../../config/constants';

const convertTemperature = (value, fromUnit, toUnit) => {
    let celsiusValue;

    switch (fromUnit) {
        case CONSTANTS.TEMP_OPERATION.celsius:
            celsiusValue = value;
            break;
        case CONSTANTS.TEMP_OPERATION.farenheit:
            celsiusValue = (value - 32) * 5 / 9;
            break;
        case CONSTANTS.TEMP_OPERATION.kelvin:
            celsiusValue = value - 273.15;
            break;
        default:
            return value;
    }

    switch (toUnit) {
        case CONSTANTS.TEMP_OPERATION.celsius:
            return celsiusValue;
        case CONSTANTS.TEMP_OPERATION.farenheit:
            return (celsiusValue * 9 / 5) + 32;
        case CONSTANTS.TEMP_OPERATION.kelvin:
            return celsiusValue + 273.15;
        default:
            return celsiusValue;
    }
}


function Units() {
    const [value, setValue] = useState(0);
    const [result, setResult] = useState(0);
    const [opertaionType, setOpertaionType] = useState(CONSTANTS.OPERTAION_TYPE.Mass);
    const [units, setUnits] = useState(CONSTANTS.MASS);
    const [fromUnits, setFromUnits] = useState(Object.keys(CONSTANTS.MASS)[0]);
    const [toUnits, setToUnits] = useState(Object.keys(CONSTANTS.MASS)[0]);

    useEffect(() => {
        let newUnits = CONSTANTS.MASS;
        switch(opertaionType) {
            case CONSTANTS.OPERTAION_TYPE.Mass:
                newUnits = CONSTANTS.MASS;
                break;
            case CONSTANTS.OPERTAION_TYPE.Distance:
                newUnits = CONSTANTS.DISTANCE;
                break;
            case CONSTANTS.OPERTAION_TYPE.Temperature:
                newUnits = CONSTANTS.TEMP;
                break;
            default:
                newUnits = CONSTANTS.MASS;
                break;
        }
        setUnits(newUnits);

        const firstUnitKey = Object.keys(newUnits)[0];
        setFromUnits(firstUnitKey);
        setToUnits(firstUnitKey);

    }, [opertaionType]);

    useEffect(() => {
        handleOperation();
    }, [value,fromUnits,toUnits]);

    const handleOperation = () => {
        let numValue = Number(value);

        if (numValue === 0 && value !== '0') {
            setResult(0);
            return;
        }

        if(fromUnits === toUnits) {
            if (numValue.toString().length > 12) {
                numValue = numValue.toPrecision(8);
            }
            setResult(numValue);
            return;
        }

        let finalResult = 0;

        if (opertaionType === CONSTANTS.OPERTAION_TYPE.Mass) {
            const baseValue = numValue * CONSTANTS.MASS_OPERATION[fromUnits].toBase;
            finalResult = baseValue * CONSTANTS.MASS_OPERATION[toUnits].fromBase;
        } else if (opertaionType === CONSTANTS.OPERTAION_TYPE.Distance) {
            const baseValue = numValue * CONSTANTS.DISTANCE_OPERATION[fromUnits].toBase;
            finalResult = baseValue * CONSTANTS.DISTANCE_OPERATION[toUnits].fromBase;
        } else if (opertaionType === CONSTANTS.OPERTAION_TYPE.Temperature) { 
            finalResult = convertTemperature(numValue, fromUnits, toUnits);
        }

        setResult(finalResult);
    }

    const handleInputChange = (event) => {
        const inputValue = event.target.value;

        let cleanedValue = inputValue.replace(/[^0-9.]/g, '');
        const parts = cleanedValue.split('.');

        if (parts.length > 2) {
            cleanedValue = parts[0] + '.' + parts.slice(1).join('');
        }

        setValue(cleanedValue);
    };

    const handleOperationTypeChange = (event) => {
        setOpertaionType(event.target.value);
    }

    const handleFromUnitChange = (event) => {
        setFromUnits(event.target.value);
    }

    const handleToUnitChange = (event) => {
        setToUnits(event.target.value);
    }


    return ( 
    <section id="units" className="units">
        <div className='operation-type'>
            <select onChange={handleOperationTypeChange}>
                {SelectOptions(CONSTANTS.OPERTAION_TYPE)}
            </select>
        </div>
        <div className="units-input">
            <input type="text" inputMode="decimal" value={value} onChange={handleInputChange} />
            <select id="from-units" onChange={handleFromUnitChange} value={fromUnits}>
                {SelectOptions(units)}
            </select>
        </div>
        <div className="units-result">
            <span className='result'>{result}</span>
            <select id="to-units" onChange={handleToUnitChange} value={toUnits}>
                {SelectOptions(units)}
            </select>
        </div>
    </section>
    );
};

export default Units;