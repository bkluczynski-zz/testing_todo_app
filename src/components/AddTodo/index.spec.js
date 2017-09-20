//External dependencies
import React from 'react'
import faker from 'faker'
import { shallow } from 'enzyme'

//Our dependencies
import { expect } from '../../utils/chai'

//Our Component
import AddTodo from './index'

describe('AddTodo', () => {
  let wrapper;

  beforeEach(() => {
     wrapper = shallow(
      <AddTodo
        />
    )
  })

  it('initializes the state correctly with an emtpy value', () => {
    expect(wrapper).to.have.state('value').equal('')
  })

  describe('when user enters text in the input field', () => {
    let value;
    beforeEach(() => {
      value = faker.lorem.word();
      const input = wrapper.find('input').first();
      input.simulate('change', {
        target: {value}
    })
  })

    it('changes the input value accordingly', () => {
      expect(wrapper.find('input')).to.have.value(value)
    })

    it('constructToDo creates new todo with expected value', () => {
      const todo = wrapper.instance().constructToDo(value)
      expect(todo.text).to.equal(value)
    })

    it('resetValue resets the state value to ', () => {
      wrapper.instance().resetValue();
      expect(wrapper).to.have.state('value').to.equal('')
    });


  })





})
