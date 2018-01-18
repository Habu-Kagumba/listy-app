import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { deleteItem } from '../redux/actions'
import { updatePost } from '../redux/fetchActions'
import Item from './Item'

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchToProps = (dispatch) => (
  {
    deleteItem: id => dispatch(deleteItem(id)),
    updateItem: (id, title) => dispatch(updatePost(id, title))
  }
)

class Items extends Component {
  render() {
    const item = _.map(this.props.items, (item) => {
      return (
        <Item
          key={item.post.id}
          item={item}
          updateItem={this.props.updateItem}
          deleteItem={this.props.deleteItem} />
      )
    })

    return item
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
