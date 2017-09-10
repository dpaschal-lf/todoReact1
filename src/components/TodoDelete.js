import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import TodoItem from './TodoItem.js';

class TodoDelete extends Component {
  constructor(props){
  	console.log("props: ",props);
  	super(props);
    this.state = {
      redirect: false,
      confirm: false,
      message: 'are you sure you want to delete '+ this.props.match.params.id+'?'
    }
    this.deleteItem = this.deleteItem.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
  }
  deleteItem(){
    console.log("deleting",this.props.match.params.id);
    if(this.props.model.deleteRecord(this.props.match.params.id)){
      this.setState({
        message: 'deleted',
        confirm: true
      })      
    } else {
      this.setState({
        message: "failed to delete",
        confirm: true
      })       
    }

  }
  cancelDelete(){
    this.setState({
      redirect: '/'
    })
  }
  render() {
    if(this.state.redirect){
      return <Redirect to={this.state.redirect} />
    }
    else if(this.state.confirm){
      return (
        <div>
          {this.state.message}
          <div onClick={this.cancelDelete}>Go Back</div>
        </div>
      )
    }
    return (
      <div>
        {this.state.message}
        <div onClick={this.deleteItem}>Delete</div>
        <div onClick={this.cancelDelete}>Cancel</div>
      </div>
    );
  }
}

export default TodoDelete;