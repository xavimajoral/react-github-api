import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';
import UsersGrid from '../../components/UsersGrid/UsersGrid';
import Spinner from '../../components/Spinner/Spinner';
import './App.css';

class App extends Component {

  componentDidMount() {
    if (this.props.users.users.length === 0) {
      this.props.fetchUsers();
    }
  }

  renderUsers() {
    const userList = this.props.users.users;
    return <UsersGrid users={userList} />
  }

  render() {
    return (
      <div className="container">
        <div className="cardsContainer">
          { this.props.users.loadingUsers ? Spinner : this.renderUsers() }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps, { fetchUsers })(App);
