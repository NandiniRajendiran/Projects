import React, { Component } from "react";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false
    };
  }
  //asynch function
  //Synchronous execution means the first task in a program must finish processing before moving on to executing the next task whereas asynchronous execution means a second task can begin executing in parallel, without waiting for an earlier task to finish

  //componentDidMount used to load the data when app is loaded at first time
  async componentDidMount() {
    this.setState({ isLoading: true });

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (response.ok) {
      const users = await response.json();
      this.setState({ users: users, isLoading: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }
  //Object. keys() method is used to return an array whose elements are strings corresponding to the enumerable properties found directly upon an object. The ordering of the properties is the same as that given by the object manually in a loop is applied to the properties.
  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };

  renderTableRows = () => {
    return this.state.users.map((user) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{`${user.address.street}, ${user.address.city}`}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
          <td>{user.company.name}</td>
        </tr>
      );
    });
  };
  render() {
    const { users, isLoading, isError } = this.state;
    if (isLoading) {
      return <div>Loading the data ......</div>;
    }
    if (isError) {
      return <div>Error while Loading</div>;
    }
    return users.length > 0 ? (
      <table>
        <thead>
          <tr>{this.renderTableHeader()}</tr>
        </thead>
        <tbody>{this.renderTableRows()}</tbody>
      </table>
    ) : (
      <div>No users available</div>
    );
  }
}

export default Table;
