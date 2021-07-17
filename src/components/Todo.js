import React, {useState} from 'react';
import uuid from 'uuid';
import AddTodoForm from "./AddTodoForm";



const Todo =()=> {

  const [todos, setTodos] = useState([
{id :1, todo : 'acheter du pain' },
{id :2, todo : 'acheter du lait' },
{id :3, todo : 'acheter du fromage'}
  ])

  const MyTodos = todos.map(e => {
    return (<li key = {e.id}  className='list-group-item' > {e.todo}</li>)
 })
const addNewTodo = (newtodo)=> {
  setTodos ([...todos, {id: uuid(),
  todo: newtodo}])
}
  return (
    <div> 
    <h1 className="text-center"> {todos.length} To-do </h1>

        <ul className='list-group'>
              {MyTodos}
        </ul>
        <AddTodoForm addNewTodo={addNewTodo}/>
    </div>
  )
}
export default Todo ;