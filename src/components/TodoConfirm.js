import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const TodoConfirm = props => {
  const optionJSX = props.options.forEach(
  	(item,index)=><li key={item}><Link to={item.destination}>{item.description}</Link></li>
  );
  return (
    <div>
      <ul>
        {optionJSX}
      </ul>
    </div>
  );
}
export default TodoConfirm;