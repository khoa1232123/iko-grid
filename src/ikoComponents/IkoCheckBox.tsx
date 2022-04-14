import React, { FC, HTMLAttributes, useRef } from 'react';
import PropTypes from 'prop-types';

const IkoCheckBox: FC<Props> = ({ label, checked, ...props }) => {
  const inputRef = useRef(null);

  const onChange = () => {
    if (props.onChange) {
      props.onChange(inputRef.current);
    }
  };

  return (
    <label className="iko-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChange}
        checked={checked}
      />
      <span className="iko-checkbox__checkmark">
        <i className="fas fa-check"></i>
      </span>
      <span className="iko-checkbox__txt">{label}</span>
    </label>
  );
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  checked: boolean;
  props: any;
}

export default IkoCheckBox;
