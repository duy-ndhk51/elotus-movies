import type { FC, InputHTMLAttributes } from 'react';
import React, { useEffect, useState } from 'react';

type PInputProps = InputHTMLAttributes<HTMLInputElement>;

const PInput: FC<PInputProps> = ({ value, onChange, ...props }) => {
  const [currentVal, setCurrentVal] = useState(value);

  useEffect(() => {
    if (currentVal !== value) {
      setCurrentVal(value);
    }
  }, [value]);

  return (
    <input
      value={currentVal}
      {...props}
      onChange={(e) => {
        setCurrentVal(e.target.value);
        if (typeof onChange === 'function') {
          onChange(e);
        }
      }}
    />
  );
};

export default PInput;
