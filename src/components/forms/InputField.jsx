/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { twMerge } from "tailwind-merge";

const InputField = React.forwardRef(({
  
  inputType,
  inputName,
  height,
  width,
  value,
  className,
  bgColor,
  border,
  placeholder,
  onChange,
  disabled,
  error,
  required, 
  ...rest
},ref) => {
  return (
    <input
      type={inputType}
      name={inputName}
      ref={ref}
      defaultValue={value}
      className={twMerge(` 
      ${bgColor ? bgColor : "bg-gray-50"} 
      ${height ? height : ""}
      ${width ? width : "w-full"}
    ${border}
      $ text-gray-900 
        text-sm rounded 
        focus:outline-none focus:ring-blue-500 focus:border-light-green-100 block p-3 ${
        error && `border border-red-600`
      }`, 
      className


      )}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      required={required && required}
   {...rest}/>
  );
});

export default InputField;
