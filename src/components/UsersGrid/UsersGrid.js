import React from 'react';
import { Link } from 'react-router-dom';
import './UsersGrid.css';

const UsersGrid = (props) => {
    const users = props.users;

    return (
      users.map((user) => {
        return (
          <div className="card" key={user.id}>
            <img src={user.avatar_url} alt="user_avatar"/>
            <p>{user.login}</p>
            <Link to={`/user/${user.id}`}><button type="button" className="btn btn-primary">See Details</button></Link>
          </div>
        );
      })
    );
};

export default UsersGrid;