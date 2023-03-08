import React, {useState} from 'react'
import Todo from './Todo'
import { TodoForm } from './TodoForm'
function TodoList() {
    const [todos, setTodos]= useState([])
const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)){
        return
    }
    const newTodos = [todo, ...todos]
    setTodos(newTodos)
    console.log(todo, ...todos);
}
const completeTodo = id => {
    let updatedTodos = todos.map( todo => {
        if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        return todo;
    })
}
const removeTodo = id => {
    const removeArr = [...todos].filter( todo => todo.id !== id)
    setTodos(removeArr)
}
const updateTodo = (todoId, value) => {
    if(!value.text || /^\s*$/.test(value.text)){
        return
    }
    setTodos(prev => prev.map(item => item.id === todoId ? value : item))

}
  return (
    <div>
    <h1>Plan your Day </h1>
    <TodoForm onSubmit={addTodo}/>
    <Todo 
    todos={todos}
    completeTodo={completeTodo}
    removeTodo={removeTodo}
    updateTodo={updateTodo}
    />
    </div>
  )
}
export default TodoList