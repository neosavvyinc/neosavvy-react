import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import Navbar from '../containers/NavbarContainer';

export class DashboardPage extends Component {
  componentWillReceiveProps() {
    this.props.data.refetch();
  }

  editClient = (client) => {
    console.log("EDITING: ", client);
  }

  deleteClient = (client) => {
    console.log("DELETING: ", client);
    this.props.deleteClient({ id: client.id })
      .then(() => this.props.data.refetch());
  }

  editResource = (resource) => {
    console.log("EDITING: ", resource);
  }

  deleteResource = (resource) => {
    console.log("DELETING: ", resource);
    this.props.deleteResource({ id: resource.id })
      .then(() => this.props.data.refetch());
  }

  render() {
    const {users, clients, resources } = this.props.data;

    if (!users) {
      return (
        <div className="container">
          <h1 className="title is-h1">Loading</h1>
        </div>
      );
    }

    return (
      <div>
        <Navbar />
        <div className="container" style={styles.dashboardContainer}>
          <h4 className="title is-4">Users</h4>
          <table className="table mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users && users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="title is-4">Clients</h4>
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {clients && clients.map((client, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td><button className="button is-info is-small" onClick={() => this.editClient(client)}><i className="fa fa-edit" /></button></td>
                  <td><button className="button is-danger is-small" onClick={() => this.deleteClient(client)}><i className="fa fa-remove" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4 className="title is-4">Resources</h4>
          <table className="table mt-2">
            <thead>
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>First name</th>
                <th>Last Name</th>
                <th>Contract Type</th>
                <th>Position Role</th>
                <th>Position Level</th>
                <th>Salary</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {resources && resources.map((resource, index) => (
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{resource.id}</td>
                  <td>{resource.firstName}</td>
                  <td>{resource.lastName}</td>
                  <td>{resource.contractType}</td>
                  <td>{resource.positionRole}</td>
                  <td>{resource.positionLevel}</td>
                  <td>{resource.salary}</td>
                  <td><button className="button is-info is-small" onClick={() => this.editResource(resource)}><i className="fa fa-edit" /></button></td>
                  <td><button className="button is-danger is-small" onClick={() => this.deleteResource(resource)}><i className="fa fa-remove" /></button></td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
    );
  }
};

const styles = {
  dashboardContainer: {
    marginTop: '20px'
  }
};

const ResourceData = graphql(gql`
  mutation deleteResource($id: String!) {
    deleteResource(id: $id) {
      status
    }
  }
`, {
  props: ({ mutate }) => ({
    deleteResource: ({ id }) => mutate({
      variables: { id }
    })
  })
});

const ClientData = graphql(gql`
  mutation deleteClient($id: String!) {
    deleteClient(id: $id) {
      status
    }
  }
`, {
  props: ({ mutate }) => ({
    deleteClient: ({ id }) => mutate({
      variables: { id }
    }),
  }),
});


const DashboardPageWithData = compose(ResourceData, ClientData)(DashboardPage);
export default DashboardPageWithData;

