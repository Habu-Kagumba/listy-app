import React from 'react'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import Item from '../components/Item'
import { rootReducer } from '../redux/reducers'
import { isLoading, showFlash } from '../redux/actions'


describe('Item Component', () => {
  let wrapper, props

  beforeEach(() => {
    props = {
      key: 1,
      item: {
        post: {
          id: 1,
          title: 'Title',
          body: 'Body'
        },
        album: {
          id: 1,
          title: 'Title'
        },
        user: {
          id: 1,
          name: 'Name',
          username: 'Username',
          email: 'Email',
          avatar: 'Avatar'
        }
      },
      updateItem: jest.fn(),
      deleteItem: jest.fn()
    }

    wrapper = mount(<Item {...props}/>)
  })

  describe('Item Component === Render', () => {
    it('should render self', () => {
      expect(wrapper.length).toEqual(1)

      expect(wrapper.find('h4').hasClass('title')).toBe(true)
      expect(wrapper.find('h6').hasClass('subtitle')).toBe(true)

      wrapper.setState({ toggleInput: true })

      expect(wrapper.find('input').hasClass('input')).toBe(true)
    })
  })

  describe('Item Component === Render + Store', () => {
    it('should toggle Post input', () => {
      wrapper.find('a.is-primary').simulate('click')
      expect(wrapper.state('toggleInput')).toBe(true)
    })

    it('should update post title', () => {
      wrapper.setState({ toggleInput: true })

      wrapper.find('input').simulate('change', { target: { value: 'New Title' }})
      expect(wrapper.state('postTitle')).toEqual('New Title')
    })

    it('should delete item', () => {
      wrapper.find('a.is-danger').simulate('click')

      expect(props.deleteItem.mock.calls.length).toEqual(1);
    })
  })
})
