import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import { Button, Form, Container } from 'semantic-ui-react'
const uuidv4 = require('uuid/v4');


class AddTodo extends Component {

  state = {
    value : ''
  }

  constructToDo = (value) => {
    const id = uuidv4()
    const todo = {text : value, id: id }
    return todo
  }

  onSubmit = (event) => {
    const {value} = this.state
    event.preventDefault()
    this.props.addTodo(this.constructToDo(value))
    this.resetValue()
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  resetValue = () => {
    this.setState({
      value: ''
    })
  }

  render() {
    console.log("value", this.state.value)
    return (
      <Container textAlign="center">
        <Form onSubmit={this.onSubmit}>
          <Form.Field>
            <input value={this.state.value} onChange={this.handleChange} placeholder='todo..'/>
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>

      )
  }

}

export default AddTodo;
