import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class TodoCreate extends Component {
  constructor(props){
  	super(props);
  	if(this.props.match){
  		const itemData = this.props.model.getSingleRecord(this.props.match.params.id);
  		this.state = {
  			id: itemData.id,
  			title: itemData.title,
  			description: itemData.description,
  			dueDate: itemData.dueDate,
  			redirect: false,
  			completed: itemData.completed,
  			canBeSaved: true
  		}
  	} else {
	  	this.state = {
	  		id: null,
	  		title: '',
	  		description: '',
	  		dueDate: '', 
	  		redirect: false
	  	}  		
  	}

  	this.handleFieldChange = this.handleFieldChange.bind(this);
  	this.saveChanges = this.saveChanges.bind(this);

  }
  handleFieldChange(e, field){
  	console.log(e.target);
  	this.setState({
  		[field]: e.target.value || e.target.innerText
  	});
  }
  saveChanges(){
  	if(this.props.saveHandler({
  			id: this.state.id,
  			title: this.state.title, 
  			description: this.state.description, 
  			dueDate: this.state.dueDate
  	})){
  		this.setState({redirect: '/'})
  	}
  }
  render() {
  	if(this.state.redirect){
  		return <Redirect to={this.state.redirect} />
  	}
    return (
      <div>
      	<div>
      		<input type="text" placeholder="Title" defaultValue={this.state.title} onChange={e=>this.handleFieldChange(e,'title')}/>
      	</div>
      	<div>
      		<textarea placeholder="description" defaultValue={this.state.description} onChange={e=>this.handleFieldChange(e,'description')}/>
      	</div>
      	<input type="date"  name="dueDate" defaultValue={this.state.dueDate} onChange={e=>this.handleFieldChange(e,'dueDate')}/>
      	<button onClick={this.saveChanges}>SAVE</button>
      </div>
    );
  }
}

export default TodoCreate;



// SELECT c.family_name, c.given_name, c.ID AS customer_id,
// p.price AS purchase_price, p.item_count, p.status AS purchase_status, p.ID AS purchase_id,
// i.name AS item_name, i.price AS unit_price, i.type AS item_type
// FROM purchases AS p
// JOIN customers AS c
//   ON c.ID = p.customers_id
// JOIN items AS i 
//   ON i.ID = p.item_id
// ORDER BY item_count ASC, purchase_price DESC



