import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { UseSelector, useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store"
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const {todo} = useSelector((state:RootState) => state.todosReducer)
  const dispatch = useDispatch()
  return (
    <ListGroupItem>
      <FormControl value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      <Button onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </Button>
      <Button onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </Button>
      
    </ListGroupItem>
);}
