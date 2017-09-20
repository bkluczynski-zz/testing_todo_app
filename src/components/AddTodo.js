import React, { Component } from 'react';
import serializeForm from 'form-serialize';


class AddTodo extends Component {

  state = {
    value : ''
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state.value)
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
      <div>
        <form onSubmit={this.onSubmit}>
                 <input value={this.state.value} onChange={this.handleChange} />
                 <button>Submit</button>
               </form>
      </div>
    )
  }

}

export default AddTodo;
