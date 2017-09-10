import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import TodoModel from './components/TodoModel.js';
import TodoList from './components/TodoList.js';
import TodoHeader from './components/TodoHeader.js';
import TodoCreate from './components/TodoCreate.js';
import TodoConfirm from './components/TodoConfirm.js';
import TodoDelete from './components/TodoDelete.js';
var model = new TodoModel();
window.model = model;
/*
"{"1505031645593":{"id":1505031645593,"title":"t1","description":"d1","dueDate":"2017-09-14","complete":false},"1505031654334":{"id":1505031654334,"title":"t2","description":"d2","dueDate":"2017-09-22","complete":false}}"
*/
class App extends Component {
  render() {
    return (
      <div>
      <TodoHeader />  
      <Switch>
        <Route exact path="/" component={()=> <TodoList model={model} />} />
        <Route exact path="/create" component={(props)=> <TodoCreate saveHandler={model.addRecord.bind(model)} history={this.props.history}/>} />
        <Route exact path="/update/:id" component={(props)=> <TodoCreate model={model} saveHandler={model.addRecord.bind(model)} {...props} />} />
        <Route exact path="/delete/:id" component={(props)=> <TodoDelete model={model} {...props}/>} />
      </Switch>
      </div>
    );
  }
}

export default App;
