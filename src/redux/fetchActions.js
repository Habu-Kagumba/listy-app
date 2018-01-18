import _ from 'lodash'

import * as actions from './actions'

export const API_URL = 'https://jsonplaceholder.typicode.com/'
export const resources_paths = [
  `${API_URL}users`,
  `${API_URL}albums`,
  `${API_URL}posts`,
]
const AVATAR_URL = 'https://api.adorable.io/avatars/200/'

/**
 * Status Handler
 * @param {object} response
 * @returns {Promise} resolve or reject if error
 */
function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error('An error occured. Please try again!'))
  }
}

/**
 * Json handler
 * @param {object} response
 * @return {object} parse response to JSON
 */
function json(response) {
  return response.json()
}

/**
 * Transform data into required structure
 * @param {array} data
 * @return {object}
 */
function aggregateData(data) {
  const users = data[0]
  const albums = data[1]
  const posts = data[2]

  return _.map(posts, (post, i) => {
    const album = albums[i]
    const user = users[i % users.length]

    return {
      post: {
        id: post.id,
        title: post.title,
        body: post.body
      },
      album: {
        id: album.id,
        title: album.title
      },
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatar: `${AVATAR_URL}${user.email}`
      }
    }
  })
}

/**
 * fetch posts from https://jsonplaceholder.typicode.com/
 * @emits {IS_LOADING}
 * @emits {GET_ALL_ITEMS}
 * @emits {SHOW_FLASH}
 */
export function getPosts() {
  return dispatch => {
    return Promise.all(_.map(resources_paths, (url) => {
      dispatch(actions.isLoading(true))

      return fetch(url)
        .then(status)
        .then(json)
        .then(data => data.slice(0, 30))
    }))
      .then(data => {
        dispatch(actions.isLoading(false))
        dispatch(actions.getAllItems(aggregateData(data)))
      })
      .catch(error => {
        dispatch(actions.isLoading(false))
        dispatch(actions.showFlash({
          error: true,
          message: error.message
        }))
      })
  }
}

/**
 * update posts
 * @param {integer}
 * @emits {IS_LOADING}
 * @emits {UPDATE_ITEM}
 * @emits {SHOW_FLASH}
 */
export function updatePost(id, title) {
  return dispatch => {
    dispatch(actions.isLoading(true))

    return fetch(`${resources_paths[2]}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(json)
      .then((data) => {
        dispatch(actions.isLoading(false))
        dispatch(actions.updateItem(data))
      })
      .catch((error) => {
        dispatch(actions.isLoading(false))
        dispatch(actions.showFlash({
          error: true,
          message: error.message
        }))
      })
  }
}
