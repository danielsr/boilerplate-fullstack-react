import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Page } from 'core/components'

class Posts extends Component {
  renderPosts() {
    const { data } = this.props

    if (data.loading) {
      return (
        <h4>Loading...</h4>
      )
    }

    return data.posts.map(post => (
      <div key={post.id} className='alert alert-primary'>{post.title}</div>
    ))
  }

  render() {
    return <Page title="Posts">{this.renderPosts()}</Page>
  }
}

const query = gql`
  query Posts {
    posts @rest(type: "Post", path: "posts") {
      id
      title
    }
  }
`

export default graphql(query)(Posts)
