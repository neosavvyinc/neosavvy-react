import React from 'react';

import { Field, reduxForm } from 'redux-form';

import FormField from '../base_components/FormField';
import Errors from '../base_components/Errors';

const NewResourceForm = (props) => {
  const {handleSubmit} = props;
  const errors = props.errors <= 0 ? null : Errors(props.errors);
  return (
    <form onSubmit={handleSubmit}>
      {errors}
      <Field name="firstName" type="text" component={FormField} label="First name"/>
      <Field name="lastName" type="text" component={FormField} label="Last name" />
      <div className="field">
        <label className="label">Contract Type</label>
        <p className="control">
          <span className="select">
            <Field name="contractType" type="text" component="select">
              <option />
              <option value="FULL_TIME">Full Time Employee</option>
              <option value="TEN_NINETYNINE">1099 Contractor</option>
            </Field>
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">Position</label>
        <p className="control">
          <span className="select">
            <Field name="positionRole" type="text" component="select">
              <option />
              <option value="FRONT_END">Front-End Engineer</option>
              <option value="BACK_END">Back-End Engineer</option>
              <option value="USER_EXPERIENCE">User Experience Designer</option>
              <option value="HUMAN_RESOURCES">Human Resources</option>
            </Field>
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">Level</label>
        <p className="control">
          <span className="select">
            <Field name="positionLevel" type="text" component="select">
              <option />
              <option value="JUNIOR">Junior</option>
              <option value="MEDIUM">Medium</option>
              <option value="SENIOR">Senior</option>
            </Field>
          </span>
        </p>
      </div>
      <Field name="salary" type="number" component={FormField} label="Salary" />
      <button type="submit" className="button is-primary">Add</button>
    </form>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!values.contractType) {
    errors.contractType = 'Required';
  }

  if (!values.positionRole) {
    errors.positionRole = 'Required';
  }

  if (!values.positionLevel) {
    errors.positionLevel = 'Required';
  }

  if (!values.salary) {
    errors.salary = 'Required';
  }

  return errors;
};

// Decorate the form component
export default reduxForm({
  form: 'NewResourceForm', // a unique name for this form
  validate
})(NewResourceForm);
