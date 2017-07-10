import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({ input, label, type, meta: { touched, error } }) => {
  const hasError = (touched && error) ? 'is-danger' : '';
  return (
    <div className="field">
      <label className="label">{label}</label>
      <p>
        <input {...input} placeholder={label} type={type} className={`input ${hasError}`} />
        {touched && error && <div className="help is-danger">{error}</div>}
      </p>
    </div>
  );
};

const renderErrors = (errors) => (
  <div className="alert alert-danger" role="alert">
    {errors.map((error, index) => <span key={index}>{error.value}</span>)}
  </div>
);

const SignInForm = (props) => {
  const { handleSubmit } = props;
  const errors = props.errors <= 0 ? null : renderErrors(props.errors);
  return (
    <form onSubmit={handleSubmit}>
      {errors}
      <Field name="email" type="email" component={renderField} label="Email" />
      <Field name="password" type="password" component={renderField} label="Password" />
      <button type="submit" className="button is-primary">Sign in</button>
    </form>
  );
}

const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length <= 3) {
    errors.password = 'Must be at least 4 characters';
  }

  return errors;
}

// Decorate the form component
export default reduxForm({
  form: 'SignInForm', // a unique name for this form
  validate
})(SignInForm);
