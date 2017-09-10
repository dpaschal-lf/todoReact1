import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const TodoHeader = props => {
  return (
    <header>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create</Link></li>
      </ul>
    </header>
  );
}
export default TodoHeader;