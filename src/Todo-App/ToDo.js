import React, { Component } from "react";
import AddToDo from "./AddToDo";
import ToDoList from "./ToDoList";

class ToDo extends Component {

    render() {

        return (

            <>
                <div>
                    <h1 style={{ marginTop: "6rem", marginBottom: "6rem", backgroundColor: 'white', color: 'rgb(24, 149, 238)', padding: '1rem' }}>TODO LIST</h1>
                </div>
                <AddToDo />
                <ToDoList />
            </>

        )
    }
}

export default ToDo;