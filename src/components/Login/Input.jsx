import React from "react";

const Input = ({ attribute, param, handleChange}) => {
  return (
    <>
      <input
      id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        onChange={ (e) => handleChange(e.target.name, e.target.value) }
        className="form-control"
        param={attribute.id}
        required
      />
    </>
  );
};

export default Input;
