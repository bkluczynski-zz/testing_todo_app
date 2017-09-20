//external dependencies
import React from 'react'
import faker from 'faker'
import { shallow, mount } from 'enzyme'

//internal dependencies
import { expect } from '../../utils/chai'

//our component
import TodoList from './index'

describe('add todo', () => {
  let wrapper;
  //mock the removeFunc
  const removeTodo = jest.fn()

  const generateTodo = () => ({
    text: faker.lorem.word(),
    id: faker.random.number()
  })

  const createListOfTodos = () => {
    let todos = []
    for(let i = 0; i< 5; i++){
      todos.push(generateTodo())
    }
    return todos
  }

  const todos = createListOfTodos();

  beforeEach(() => {
      wrapper = mount(
        <TodoList
          todos={todos}
          remove={removeTodo}
          />
      )
  })

  it('checks the passed todos have 5 todos in them', () => {
    expect(wrapper).to.have.exactly(5).descendants('li')
  })

  it('allows todo to be removed upon clicking it', () => {
    const li = wrapper.find('li').first().simulate('click');
    expect(removeTodo.mock.calls.length).to.equal(1);
  })


})
