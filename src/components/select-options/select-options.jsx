function SelectOptions(options) {
    return Object.keys(options).map(key => {
        return <option key={key} value={key}>{options[key]}</option>
    });
}

export default SelectOptions;