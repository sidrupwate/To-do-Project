import React, { Component } from 'react';
import '../App.css';
import { Form, Button } from 'react-bootstrap';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    handleChange = (event) => {
        this.setState({ input: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { input } = this.state;
        if (input.trim() !== '') {
            this.props.addTodo(input);
            this.setState({ input: '' });
        }
    };

    render() {
        const { input } = this.state;

        return (
            <Form style={{ display: "flex", justifyContent: "center" }} onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        style={{ width: "300px", fontSize: "18px" }}
                        value={input}
                        onChange={this.handleChange}
                        placeholder="Add a new task..."
                    />
                </Form.Group>
                <Button style={{ backgroundColor: "darkviolet", border: "none", padding: "0 2rem", fontSize: "18px" }} variant="primary" type="submit">
                    Add
                </Button>
            </Form>
        );
    }
}

export default TodoForm;
