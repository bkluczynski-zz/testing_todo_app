//External dependencies
import React from 'react'
import faker from 'faker'
import { shallow } from 'enzyme'

//Our dependencies
import { expect } from '../../utils/chai'

//Our component
import App from './index'


describe('App',() => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App
        />
    )
  })

it('should initialize the todos state to empty array', () => {
  expect(wrapper).to.have.state('todos').to.deep.equal([])
})

it('should update the state todos with a new todo upon calling addTodo', () => {
  const todo = { text: faker.lorem.word(), id: faker.random.number() }
  wrapper.instance().addTodo(todo)
  expect(wrapper).to.have.state('todos').to.deep.equal([todo])
})

it('should update the state todos by removing the todo upon calling removeTodo', () => {
  const todo = { text: faker.lorem.word(), id: faker.random.number() }
  wrapper.instance().addTodo(todo)
  wrapper.instance().removeTodo(todo.id)
  expect(wrapper).to.have.state('todos').to.deep.equal([])
})

})
