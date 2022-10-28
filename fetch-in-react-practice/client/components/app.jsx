import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/todos')
      .then(res => res.json())
      .then(todos => {
        this.setState({
          todos
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  addTodo(newTodo) {
    fetch('http://localhost:3000/api/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTodo)
    }).then(res => res.json())
      .then(todo => {
        const todos = [...this.state.todos];
        todos.push(todo);
        this.setState({
          todos
        });
      });
  }

  toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - replace the old todos in the state with the new one (you know the index).
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    let ind;

    for (var i = 0; i < this.state.todos.length; i++) {
      ind = (this.state.todos[i].todoId === todoId) && i;
      if (ind !== undefined) break;
    }

    const isCompleted = this.state.todos[ind].isCompleted;

    const obj = { isCompleted: !isCompleted };

    fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(res => res.json())
      .then(todo => {
        const todos = [...this.state.todos];
        todos.splice(ind, 1, todo);
        this.setState({
          todos
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
