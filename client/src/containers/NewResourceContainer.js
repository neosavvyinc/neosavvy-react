import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import NewResourceForm from '../components/NewResourceForm';

class NewResourceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  handleSubmit = (values) => {
    this.props.createResource(values)
      .then(() => this.props.router.push('/'))
      .catch(console.error);
  }

  render() {
    const { errors } = this.state;
    return (
      <NewResourceForm
        onSubmit={this.handleSubmit}
        errors={errors}
      />
    );
  }
}

const NewResourceContainerWithData = graphql(gql`
  mutation createResource(
    $firstName: String!,
    $lastName: String!,
    $contractType: ContractType!,
    $positionRole: PositionRoleType!,
    $positionLevel: PositionLevelType!,
    $salary: Float!
  ) {
    createResource(
      firstName: $firstName,
      lastName: $lastName,
      contractType: $contractType,
      positionRole: $positionRole,
      positionLevel: $positionLevel,
      salary: $salary
    ) {
      id
      firstName,
      lastName,
      contractType,
      positionRole,
      positionLevel,
      salary
    }
  }
`, {
  props: ({ mutate }) => ({
    createResource: ({ firstName, lastName, contractType, positionRole, positionLevel, salary }) => mutate({
      variables: { firstName, lastName, contractType, positionRole, positionLevel, salary }
    }),
  }),
})(withRouter(NewResourceContainer));


export default NewResourceContainerWithData;

