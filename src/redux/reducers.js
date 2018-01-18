import _ from 'lodash'

import { actionTypes } from './actions'

export const INITIAL_STATE = {
  items: [],
  isLoading: false,
  flash: {
    error: false,
    message: null
  }
}

export function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.isLoading:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case actionTypes.getAllItems:
      return {
        ...state,
        items: action.items
      }
    case actionTypes.updateItem:
      return {
        ...state,
        items: _.map(state.items, (item) => {
          if (item.post.id !== action.post.id) {
            return item
          }

          return {
            ...item,
            post: {
              ...item.post,
              title: action.post.title
            }
          }
        })
      }
    case actionTypes.deleteItem:
      return {
        ...state,
        items: _.filter(state.items, item => item.post.id !== action.id)
      }
    case actionTypes.showFlash:
      return {
        ...state,
        flash: {
          error: action.info.error,
          message: action.info.message
        }
      }
    default:
      return state
  }
}
