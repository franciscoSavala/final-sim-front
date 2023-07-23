import React, { useState } from "react";


function NumberImput({ label, name, value, onChange }) {
    return (
        <div>
            <label>
                {label}:
                <input className="number-input-simulation"
                    name={name}
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>

    );
}

export default NumberImput;