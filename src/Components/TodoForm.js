import React,{useState} from "react";
import { FormGroup,Input,InputGroup,Button,Form,Container } from "reactstrap";
import { v4 } from "uuid";

const TodoForm = ({addTodo}) => {
    const [todoString, setTodoString]=useState("")

    const handelSubmit =e=>{
        e.preventDefault();
        if(todoString===""){
            return alert("Please Enter Something First")
        }else{
            const todo={
                todoString,
                id:v4()
            }
            addTodo(todo)
            setTodoString("")
        }
    }
    return (
        <Form onSubmit={handelSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="enter a todo" value={todoString} onChange={e=>setTodoString(e.target.value)}>
                        <Button color="success">Add Todo</Button>
                    </Input>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;