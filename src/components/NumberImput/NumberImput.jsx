import React from "react";
import "./NumberInput.css"

function NumberImput({ label, name, value, onChange }) {
    return (
        <div className="number-input">
            <label for="input" className="label-simulation">
                {label}:
                
            </label>
            <input id="input" className="number-input-simulation"
                    name={name}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            
            
        </div>

    );
}

export default NumberImput;