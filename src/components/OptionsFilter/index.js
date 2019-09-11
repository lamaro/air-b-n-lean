import React from 'react'

const OptionsFilter = props => {
    const { options, selected, icon, name, onOptionChange } = props; const listOptions = options.map(option => (
        <option value={option.value} key={`${option.value}`}>
            {option.name}
        </option>
    )); return (

        <div className="field">
            <div className="control has-icons-left">
                <div className="select" style={{ width: '100%' }}>
                    <select style={{ width: '100%' }} value={selected} onChange={onOptionChange} name={name}>
                        {listOptions}
                    </select>
                </div>
                <div className="icon is-small is-left">
                    <i className={`fas fa-${icon}`} />
                </div>
            </div>
        </div>
    );
};

export default OptionsFilter;