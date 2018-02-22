import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './todoItem.css';

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
  // getDateFromUTC(UTC){
  //   console.log("UTC: "+UTC);
  // 	const date = new Date();
  // 	date.setTime(UTC);
  // 	return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  // }
  render() {
    
    if(this.state.redirect){
      console.log(this.state.redirect);
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div className="todoItem">
        <div className="dataField prominent"><span>Title:</span>{this.props.data.title}</div>
        <div className="dataField"><span>Description:</span>{this.props.data.description}</div>
        <div className="dataField"><span>Due:</span><input type="date" name="bday" defaultValue={this.props.data.dueDate} /></div>
        <div className="editButton todoButton" onClick={this.editItem}>Edit</div>
        <div className="deleteButton todoButton" onClick={this.deleteItem}>Delete</div>
      </div>
    );
  }
}

export default TodoItem;













