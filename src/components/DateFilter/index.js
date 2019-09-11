import React from 'react'

const DateFilter = props => {
    const { date, icon, name, onDateChange } = props; return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" onChange={onDateChange} value={date} name={name} />
                <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`} />
                </span>
            </div>
        </div>
    );
};

export default DateFilter;