import React, { useRef, useEffect } from "react";
import ReactInputMask from "react-input-mask";

import { useField } from "@unform/core";

interface Props {
    name: string
    mask: string
    label: string
    className: string
    placeHolder: string
  }

const InputMask:React.FunctionComponent<Props> = ({className, placeHolder, label, name, mask, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue("");
      }
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>
      <ReactInputMask
        placeholder={placeHolder}
        className={className}
        mask={mask}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span style={{color: 'red'}}>{error}</span>}

    </div>
  );
};

export default InputMask;