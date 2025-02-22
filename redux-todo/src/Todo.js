import React, {useState} from 'react'
import {Button} from 'react-bootstrap';

import {useSelector, useDispatch} from 'react-redux'
import { addTask ,toggleTask ,deleteTask } from './todoSlice'

const Todo = () => {
    const [title , setTitle] = useState('')
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    // debugger
    // console.log(todos);

    function addTodo(title) {
      dispatch(addTask(title));
      setTitle('');
    }

    return (
        <div className="p-4 bg-white shadow-md rounded-lg max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-4">Todo App</h1>
          <div className="mb-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a new todo"
              className="border-gray-300 border-2 rounded-md px-3 py-2 w-full"
            />
            <Button variant="primary" className="me-2" onClick={()=>addTodo(title)}>Add Task</Button>
          </div>
          <ul>
            {todos.todos.map((todo, index) => (
              <li
                key={index}
                className={`flex justify-between items-center p-2 border-b border-gray-300 ${
                  todo.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTask(todo.id))}
                    className="mr-2"
                  />
                  {todo.title}
                </div>
                <Button variant="primary" className="me-2" onClick={() => dispatch(deleteTask(index))}>Delete Task</Button>
              </li>
            ))}
          </ul>
        </div>
      );
}
export default Todo