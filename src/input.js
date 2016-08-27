import React, {Component} from 'react'

export default class Input extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  static propTypes = {
    onChange: React.PropTypes.func
  }
  handleChange(event) {
    this.props.onChange(event.target.value)
  }
  render() {
    return (
      <input style={{ fontSize: '3rem', padding: '3rem 1rem' }} type="text" onChange={this.handleChange} placeholder="Type something here" autoFocus={true} />
    )
  }
}
