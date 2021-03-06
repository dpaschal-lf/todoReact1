import React, { Component } from 'react';
import TodoItem from './TodoItem.js';

class TodoList extends Component {
  constructor(props){
  	super(props);
  }
  getItems(){
  	let data = this.props.model.getRecordList();
    console.log(data);
    if(!this.props.model.getRecordCount()){
      return <div>No items in list</div>;
    }
  	const output = [];
  	console.log("data: ",data);
  	for(let index in data){
  		output.push(<TodoItem key={index} data={data[index]} />);
  		output.push(<hr />);
  	}
  	return output;
  }
  render() {
    return (
      <div>

      	{this.getItems()}
      </div>
    );
  }
}

export default TodoList;