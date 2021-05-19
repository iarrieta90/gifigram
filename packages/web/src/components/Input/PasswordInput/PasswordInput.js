import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { func, object, string } from "prop-types";
import React, { useState } from "react";

const eye = <FontAwesomeIcon icon={faEye} />;
const slash = <FontAwesomeIcon icon={faEyeSlash} />;

const PasswordInput = ({
  name,
  type,
  className,
  onChange,
  placeholder,
  register,
  validation,
  errors,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="relative">
      <div className="flex w-full mb-4">
        <input
          id={name}
          name={name}
          className={className}
          type={passwordShown ? "text" : type}
          onChange={onChange}
          placeholder={placeholder}
          {...register(name, validation)}
          validation={validation}
        />
        <button onClick={togglePasswordVisiblity} type="button">
          <i className="absolute text-gray-500 top-2 right-3">
            {passwordShown ? slash : eye}
          </i>
        </button>
      </div>
      {errors && (
        <p className="absolute w-full -mt-8 mb-3 border-t-4 border-red-600">
          {errors.message}
        </p>
      )}
    </div>
  );
};

PasswordInput.propTypes = {
  name: string.isRequired,
  type: string.isRequired,
  className: string.isRequired,
  onChange: func.isRequired,
  placeholder: string.isRequired,
  register: func.isRequired,
  validation: object.isRequired,
  errors: object,
};

PasswordInput.defaultProps = {
  errors: null,
};

export default PasswordInput;
