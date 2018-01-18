export const actionTypes = {
  isLoading: 'IS_LOADING',
  getAllItems: 'GET_ALL_ITEMS',
  updateItem: 'UPDATE_ITEM',
  deleteItem: 'DELETE_ITEM',
  showFlash: 'SHOW_FLASH'
}

export function isLoading(bool) {
  return {
    type: actionTypes.isLoading,
    isLoading: bool
  }
}

export function getAllItems(items) {
  return {
    type: actionTypes.getAllItems,
    items
  }
}

export function updateItem(post) {
  return {
    type: actionTypes.updateItem,
    post
  }
}

export function deleteItem(id) {
  return {
    type: actionTypes.deleteItem,
    id
  }
}

export function showFlash(info) {
  return {
    type: actionTypes.showFlash,
    info
  }
}
