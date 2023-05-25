import React from 'react';

function RadioInput({ className, id, name, value, checked, onChange, label }) {
  return (
    <>
      <input
        type="radio"
        className={className}
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="label" htmlFor={id}>
        {label}
      </label>
    </>
  );
}

export default RadioInput;
