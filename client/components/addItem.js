import React, {Component} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

export default class addItem extends Component {
  constructor() {
    super()
    this.state = {
      Name: '',
      Image: '',
      Question: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    const res = await axios.post('/api/addItem', this.state)
    this.setState({
      Name: '',
      Image: '',
      Question: ''
    })
    this.props.closeForm()
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="title"
            type="text"
            onChange={this.handleChange}
            value={this.state.comment}
          />
        </form>
      </div>
    )
  }
}
