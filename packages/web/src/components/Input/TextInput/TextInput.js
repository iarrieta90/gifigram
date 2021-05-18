import { func, object, oneOfType, string } from "prop-types";
import React from "react";

const Input = ({
  name,
  type,
  className,
  onChange,
  placeholder,
  defaultValue,
  register,
  validation,
  errors,
}) => {
  return (
    <>
      <input
        id={name}
        name={name}
        className={className}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, validation)}
        validation={validation}
      />
      {errors && (
        <p className="-mt-5 mb-3 border-t-4 border-red-600">{errors.message}</p>
      )}
    </>
  );
};

Input.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  className: string.isRequired,
  onChange: func.isRequired,
  placeholder: oneOfType([string, object]),
  defaultValue: string,
  register: func.isRequired,
  validation: object.isRequired,
  errors: object,
};

Input.defaultProps = {
  placeholder: "",
  defaultValue: "",
  errors: {},
};

export default Input;
