import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/index';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import './UserDetail.css';

class UserDetail extends Component {

  renderUser() {
    if (this.props.users.users.length === 0) {
      this.props.fetchUsers();
    } else {
      return (this.renderUserDetails());
    }
  }

  renderNoUser() {
    return (
      <div className="userContainer noUser">
        <h1>User Details</h1>
        <h3>No User has been selected</h3>
        <p><Link to="/">Please go to Users Lists Page and select a User</Link></p>
      </div>
    );
  }

  renderUserDetails() {
    const { users } = this.props.users;
    const userId = parseInt(this.props.match.params.id);
    const singleUser = users.find((user) => {
      if (user.id === userId) {
        return user
      }
    });
    if (singleUser === undefined) {
      return this.renderNoUser();
    }
    return (
      <div className="userContainer">
        <Link to="/"><button type="button" className="btn btn-default">Back to Users List</button></Link>
        <h1>User Details</h1>
        <img src={singleUser.avatar_url} alt="avatar" className="img-thumbnail" width="250" height="250"/>
          <dl className="dl-horizontal">
            <div>
              <dt>Id :</dt>
              <dd>{singleUser.id}</dd>
            </div>
            <div>
              <dt>Login :</dt>
              <dd>{singleUser.login}</dd>
            </div>
            <div>
              <dt>Html_url :</dt>
              <dd><a href={singleUser.html_url} target="_blank">{singleUser.html_url}</a></dd>
            </div>
          </dl>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        <div className="cardsContainer">
          { this.props.users.loadingUsers ? Spinner : this.renderUser() }
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

export default connect(mapStateToProps, { fetchUsers })(UserDetail);