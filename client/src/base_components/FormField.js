import React from 'react';

export default function FormField ({ input, label, type, meta: { touched, error } }) {
  const hasError = (touched && error) ? 'is-danger' : '';
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} className={`input ${hasError}`} />
        {touched && error && <div className="help is-danger">{error}</div>}
      </div>
    </div>
  );
};
