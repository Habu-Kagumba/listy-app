import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import ConnectedApp, { App } from '../containers/App'

describe('App Component === Shallow Render', () => {
  let wrapper
  const props = {
    getPosts: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<App {...props}/>)
  })

  it('should render self', () => {
    expect(wrapper.length).toEqual(1)
  })
})

describe('App Component === Shallow Render + Store', () => {
  const mockStore = configureStore()
  let store, container

  beforeEach(() => {
    store = mockStore()
    container = shallow(<ConnectedApp store={store}/>)
  })

  it('should render self', () => {
    expect(container.length).toEqual(1)
  })

  it('should set props', () => {
    expect(container.prop('getPosts')).toBeDefined()
  })
})
