import { Container } from 'reactstrap';
import { useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

const App=()=>{
  const [todos,setTodo]=useState([]);
  useEffect(()=>{
    const LocalTodo=localStorage.getItem("todos")
    if(LocalTodo){
      setTodo(JSON.parse(LocalTodo))
    }
  },[])

  const addTodo = async todo=>{
      setTodo([...todos,todo])
  }

  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  const markComplete = id =>{
    setTodo(todos.filter(todo=>todo.id!==id))
  }
  return (
    <Container fluid>
      <h1>Local Storage</h1>
      <Todo todos={todos} markComplete={markComplete}>
      </Todo>
      <TodoForm addTodo={addTodo} ></TodoForm>
    </Container>
  )
}




export default App;
