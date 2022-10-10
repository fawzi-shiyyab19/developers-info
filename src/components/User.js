import React from 'react'
import { removeAction } from './Developer';
import '../App.css'

function User({ user, dispatch }) {
  return (
    <div onClick={() => { dispatch(removeAction(user.id)) }}>
      <table>
        <thead>
          <tr>
            <th>_id</th>
            <th>Name</th>
            <th>Language</th>
            <th>Techs</th>
            <th>Favorite Food</th>
            <th>Favorite Drink</th>
          </tr>
        </thead>
        <tbody>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.language}</td>
          <td>{user.tech}</td>
          <td>{user.food}</td>
          <td>{user.drink}</td>
        </tbody>
      </table>
    </div>
  )
}

export default User