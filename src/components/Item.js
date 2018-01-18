import React, { Component } from 'react';

/**
 * Item component
 */
class Item extends Component  {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    /**
     * @type {object}
     * @property {boolean} toggleInput
     * @property {string} postTitle
     */
    this.state = {
      toggleInput: false,
      postTitle: this.props.item.post.title
    }
  }

  /**
   * Deletes item
   */
  deletePostItem() {
    this.props.deleteItem(this.props.item.post.id);
  }

  /**
   * Toggles Post Title field input form
   */
  togglePostField() {
    this.setState({ toggleInput: !this.state.toggleInput });
  }

  /**
   * Handle Post title edit form event
   * @param {SyntheticEvent} e
   */
  onPostTitleChange(evt) {
    const value = evt.target.value;

    this.setState({ postTitle: value });
  }

  /**
   * Update post title
   */
  updatePostItem(id, title) {
    this.props.updateItem(
      this.props.item.post.id,
      this.state.postTitle
    );

    this.setState({ toggleInput: !this.state.toggleInput });
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { user, album, post } = this.props.item;
    let postField = null;

    if (this.state.toggleInput) {
      postField = (
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" placeholder="Change Post title" value={this.state.postTitle} onChange={this.onPostTitleChange.bind(this)} />
          </div>
          <div className="control">
            <a className="button is-primary" onClick={this.updatePostItem.bind(this)}>Save</a>
          </div>
        </div>
      )
    } else {
      postField = <h4 className="title is-4 has-text-dark is-capitalized has-text-weight-bold">{ this.state.postTitle }</h4>
    }

    return (
      <div className="box">
        <div className="content">
          { postField }
          <h6 className="subtitle has-text-grey is-capitalized has-text-weight-light">{ album.title }</h6>
          <p>
            { post.body }
          </p>
        </div>
        <article className="media">
          <div className="media-left">
            <figure className="image is-32x32">
              <img src={ user.avatar } alt="avatar" />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <nav className="level">
                <div className="level-left">
                  <strong>{ user.name }</strong>&nbsp;&nbsp; <small>@{user.username}</small>
                </div>
                <div className="level-right">
                  <a className="level-item button is-primary is-outlined is-small" onClick={this.togglePostField.bind(this)}>
                    <span>Update</span>
                    <span className="icon is-small"><i className="far fa-edit"></i></span>
                  </a>
                  <a className="level-item button is-danger is-outlined is-small" onClick={this.deletePostItem.bind(this)}>
                    <span>Delete</span>
                    <span className="icon is-small"><i className="far fa-trash-alt"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </article>
      </div>
    )
  }
}

export default Item;
