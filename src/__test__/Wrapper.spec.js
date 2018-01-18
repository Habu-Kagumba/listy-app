import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ConnectedWrapper, { Wrapper } from '../components/Wrapper'
import { rootReducer } from '../redux/reducers'
import { isLoading, showFlash } from '../redux/actions'

const initialState = {
  isLoading: false,
  flash: {
    error: false,
    message: null
  }
}

describe('Wrapper Component === Shallow Render', () => {
  const props = initialState
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Wrapper {...props}/>)
  })

  it('should render self', () => {
    expect(wrapper.length).toEqual(1)
  })

  it('should have correct content', () => {
    expect(wrapper.contains(<p>Created by <strong>Herbert Kagumba</strong>.</p>)).toBe(true)
  })
})

describe('Wrapper Component === Shallow Render + Store', () => {
  let store, wrapper

  beforeEach(() => {
    store = createStore(rootReducer, initialState)
    wrapper = mount(<Provider store={store}><ConnectedWrapper/></Provider>)
  })

  it('should set props', () => {
    store.dispatch(isLoading(true))
    expect(wrapper.props().store.getState().isLoading).toBeTruthy()

    const flashPayload = {
      error: true,
      message: 'This is the error message'
    }
    store.dispatch(showFlash(flashPayload))
    expect(wrapper.props().store.getState().flash.error).toBeTruthy()
    expect(wrapper.props().store.getState().flash.message).toEqual(flashPayload.message)
  })
})
