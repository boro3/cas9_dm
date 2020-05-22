import React from 'react'
import axios from 'axios'
import { Switch, Route } from 'react-router-dom'
import { Comment } from './Comment'
import { Navigation } from './Navigation'

export class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      comments: [],
      selectedComments: []
    }
  }

  componentDidMount() {
    axios({
      url: 'https://jsonplaceholder.typicode.com/comments',
      method: 'GET'
    })
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  showCommentHandler = (comment) => {
    if (this.state.selectedComments.indexOf(comment) === -1) {
      this.setState({
        selectedComments: [...this.state.selectedComments, comment]
      })
    }
  }

  hideCommentHandler = (comment) => {
    this.setState({
      selectedComments: [...this.state.selectedComments.filter(comm => {
        return (comm.id !== comment.id)
      })]
    })
  }

  render() {
    console.log(this.state)
    return (
      <div id='app'>
        <Navigation />
        <Switch>
          <Route path='/comments' render={() => {
            return <Comment
              comments={this.state.comments}
              showCommentHandler={this.showCommentHandler}
              selectedComments={this.state.selectedComments}
              hideCommentHandler={this.hideCommentHandler}
            />
          }}
          />
        </Switch>
      </div>
    )
  }
}