import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class TodoItem extends Component {
  constructor(props){
  	super(props);
    this.state = {
      data: this.props.data,
      redirect: null
    }
    console.log(this.props.data);
    this.editItem = this.editItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  editItem(){
    this.setState({
      redirect: '/update/'+this.state.data.id
    });
  }
  deleteItem(){
    this.setState({
      redirect: '/delete/'+this.state.data.id
    });
  }
  getDateFromUTC(UTC){
  	const date = new Date();
  	date.setTime(UTC);
  	return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  }
  render() {
    
    if(this.state.redirect){
      console.log(this.state.redirect);
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <div>Title: <span>{this.props.data.title}</span></div>
        <div>Description: <span>{this.props.data.description}</span></div>
        <div>Due: <input type="date" name="bday" defaultValue={this.getDateFromUTC(this.props.data.dueDate)} /></div>
        <div onClick={this.editItem}>Edit</div>
        <div onClick={this.deleteItem}>Delete</div>
      </div>
    );
  }
}

export default TodoItem;