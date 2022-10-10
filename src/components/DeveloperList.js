
import React from 'react';
import { removeAction } from './Developer';
import User from './User';
import '../App.css';

function DeveloperList({ users, dispatch }) {
  return (
    <div className='users'>
        {(users.length) ? users.map((user, index) => <User key={index} user={user} dispatch={dispatch} />) : <p>No users</p>}
    </div>
  )
}

export default DeveloperList;