import * as types from '../redux/actions'
import { rootReducer, INITIAL_STATE } from '../redux/reducers'

const testPayload = {
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
}

describe('reducers', () => {
  it('should return intial state', () => {
    expect(rootReducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  it('should handle IS_LOADING', () => {
    expect(rootReducer(undefined, types.isLoading(true))).toEqual({
      ...INITIAL_STATE,
      isLoading: true
    })
  })

  it('should handle GET_ALL_ITEMS', () => {
    expect(rootReducer(undefined, types.getAllItems([testPayload]))).toEqual({
      ...INITIAL_STATE,
      items: [testPayload]
    })
  })

  it('should handle UPDATE_ITEM', () => {
    const payload = {
      ...INITIAL_STATE,
      items: [ testPayload ]
    }
    const expectedPayload = { ...payload }
    expectedPayload.items[0].post.title = 'New Title'

    expect(rootReducer(payload, types.updateItem(1, 'New Title'))).toEqual(expectedPayload)
  })

  it('should handle DELETE_ITEM', () => {
    const payload = {
      ...INITIAL_STATE,
      items: [ testPayload ]
    }
    const expectedPayload = { ...payload }
    expectedPayload.items = []

    expect(rootReducer(payload, types.deleteItem(1))).toEqual(expectedPayload)
  })

  it('should handle SHOW_FLASH', () => {
    const newFlash = {
      error: true,
      message: 'Error message'
    }

    expect(rootReducer(undefined, types.showFlash(newFlash))).toEqual({
      ...INITIAL_STATE,
      flash: newFlash
    })
  })
})
