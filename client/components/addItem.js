import React, {Component} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {addPostThunk, fetchPost} from '../store/postItems'

export class addItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: ''
      // Image: '',
      // Question: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.add(2)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.add(2)
    this.setState({
      Name: ''
      // Image: '',
      // Question: ''
    })
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <form>
          <input
            name="Name"
            type="text"
            onChange={this.handleChange}
            value={this.state.comment}
          />
          {/* <input
            name="Image"
            type="text"
            onChange={this.handleChange}
            value={this.state.comment}
          /> */}
        </form>
      </div>
    )
  }
}

const mapState = state => ({
  post: state
})

const mapDispatch = dispatch => ({
  add: comment => {
    // dispatch(addPostThunk(id, comment))
    dispatch(fetchPost(comment))
  }
})

export default connect(mapState, mapDispatch)(addItem)
