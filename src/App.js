import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import TodoModel from './components/TodoModel.js';
import TodoList from './components/TodoList.js';
import TodoHeader from './components/TodoHeader.js';
import TodoCreate from './components/TodoCreate.js';
var model = new TodoModel();
window.model = model;

class App extends Component {
  render() {
    return (
      <div>
      <TodoHeader />  
      <Switch>
        <Route exact path="/" component={()=> <TodoList model={model} />} />
        <Route exact path="/create" component={(props)=> <TodoCreate saveHandler={model.addRecord.bind(model)} history={this.props.history}/>} />
        <Route exact path="/update/:id" component={(props)=> <TodoCreate model={model} saveHandler={model.addRecord.bind(model)} propObject={props} />} />
      </Switch>
      </div>
    );
  }
}

export default App;
