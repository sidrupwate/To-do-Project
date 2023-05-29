import React, { Component } from 'react';
import '../App.css';
import { Form, Table } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';

class Todo extends Component {
    render() {
        const { todo, index, completeTodo, removeTodo } = this.props;

        return (
            <div className='todoList'>
                <Table style={{ width: "40vw", alignItems: "center" }}>
                    <tbody>
                        <tr className={todo.completed ? 'completed' : ''}>
                            <td>
                                <Form.Check onClick={() => completeTodo(index)} aria-label="option 1" />
                            </td>
                            <td style={{ color: "white" }}>
                                {todo.text}
                            </td>
                            <td>
                                <DeleteIcon style={{ cursor:"pointer" }} className='dltIcon' onClick={() => removeTodo(index)} />
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Todo;
