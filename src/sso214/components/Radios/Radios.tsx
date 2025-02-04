import React, { useState, ChangeEvent } from 'react';

export interface Props {
  name: string;
  defaultValue?: string;
  onChange: (v: string) => void;
  data: {
    label?: string;
    value: string;
    el: React.ReactNode | string;
  }[];
}

const Radios = ({ name, defaultValue, onChange, data }: Props) => {
  const [selected, setSelected] = useState(defaultValue ?? data[0].value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
    setSelected(value);
  };

  return (
    <fieldset data-testid="radioGroup">
      {data.map(({ label, value, el }, index) => (
        <label key={index} data-testid="radioItem">
          <input
            type="radio"
            aria-label={label}
            name={name}
            value={value}
            checked={value === selected}
            onChange={handleChange}
          />
          <span />
          {el}
        </label>
      ))}
    </fieldset>
  );
};

export default Radios;
