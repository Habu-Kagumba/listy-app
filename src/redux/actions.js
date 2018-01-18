/**
 * Action types
 */
export const actionTypes = {
  isLoading: 'IS_LOADING',
  getAllItems: 'GET_ALL_ITEMS',
  updateItem: 'UPDATE_ITEM',
  deleteItem: 'DELETE_ITEM',
  showFlash: 'SHOW_FLASH'
}

/**
 * isLoading actionCreator
 *
 * @type {object}
 * @param {boolean} bool
 * @property {string} type
 * @property {boolean} bool
 */
export function isLoading(bool) {
  return {
    type: actionTypes.isLoading,
    isLoading: bool
  }
}

/**
 * getAllItems actionCreator
 *
 * @param {array} items
 * @property {string} type
 * @property {array} items
 * @returns {object}
 */
export function getAllItems(items) {
  return {
    type: actionTypes.getAllItems,
    items
  }
}

/**
 * updateItem actionCreator
 *
 * @param {object} post
 * @property {string} type
 * @property {object} post
 * @returns {object}
 */
export function updateItem(post) {
  return {
    type: actionTypes.updateItem,
    post
  }
}

/**
 * deleteItem actionCreator
 *
 * @param {integer} id
 * @property {string} type
 * @property {integer} id
 * @returns {object}
 */
export function deleteItem(id) {
  return {
    type: actionTypes.deleteItem,
    id
  }
}

/**
 * showFlash actionCreator
 *
 * @param {object} info
 * @property {string} type
 * @property {object} info
 * @returns {object}
 */
export function showFlash(info) {
  return {
    type: actionTypes.showFlash,
    info
  }
}
