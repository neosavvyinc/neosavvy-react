import React from 'react';

import { Field, reduxForm } from 'redux-form';

import FormField from '../base_components/FormField';
import Errors from '../base_components/Errors';

const NewClientForm = (props) => {
  const { handleSubmit } = props;
  const errors = props.errors <= 0 ? null : Errors(props.errors);
  return (
    <form onSubmit={handleSubmit}>
      {errors}
      <Field name="name" type="text" component={FormField} label="First name"/>
      <button type="submit" className="button is-primary">Add</button>
    </form>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  return errors;
};

// Decorate the form component
export default reduxForm({
  form: 'NewClientForm', // a unique name for this form
  validate
})(NewClientForm);
