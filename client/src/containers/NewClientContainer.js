import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import NewClientForm from '../components/NewClientForm';

class NewClientContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  handleSubmit = (values) => {
    this.props.createClient(values)
      .then(() => this.props.router.push('/'))
      .catch(console.error);
  }

  render() {
    return (
      <NewClientForm
        onSubmit={this.handleSubmit}
        errors={this.state.errors}
      />
    );
  }
}

const NewClientContainerWithData = graphql(gql`
  mutation createClient($name: String!) {
    createClient(name: $name) {
      id,
      name
    }
  }
`, {
  props: ({ mutate }) => ({
    createClient: ({ name }) => mutate({
      variables: { name }
    }),
  }),
})(withRouter(NewClientContainer));

export default NewClientContainerWithData;


