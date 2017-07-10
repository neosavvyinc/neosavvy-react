import React from 'react';
import _ from 'lodash';

export default function renderErrors(errors){
  return (
    <div className="alert alert-danger" role="alert">
      {
        _.map(errors, (error, index) => <span key={index}>{error.value}</span>)
      }
    </div>
  );
};
