import React, { Component } from "react";

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: {
                mainlist: [],
                input: ""
            }
        };
    }

    handleInput = (event) => {
        let { todolist } = this.state;
        todolist.input = event.target.value;
        this.setState({ todolist });
        console.log(this.state.todolist.input);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let { todolist } = this.state;
        todolist.mainlist.push(todolist.input);
        this.setState({ todolist });
        console.log(this.state.todolist);
    };

    render() {

        return (
            <>
                <div style={{ display: 'flex', gap: "10px", justifyContent: "center" }}>
                    <input style={{ padding: "1rem 3rem", borderRadius: '10px', borderStyle: 'none', fontSize: "25px" }} type="text" placeholder="New task..." onChange={(e) => this.handleInput(e)} />
                    <button style={{ padding: "1rem 3rem", backgroundColor: 'black', color: "white", borderRadius: '10px', borderStyle: 'none', fontSize: "25px" }} onClick={this.handleSubmit}>Add</button>
                </div>
                <div style={{ marginTop: "5rem", }}>

                    <ul>
                        {this.state.todolist.mainlist.map((value) => {
                            return <li>{value}</li>;
                        })}
                    </ul>
                </div>
            </>
        );
    }
}
export default AddToDo;