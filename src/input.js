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
      <input style={{ fontSize: '3rem', padding: '25px 10px' }} type="text" onChange={this.handleChange} placeholder="Type something here" autoFocus={true} />
    )
  }
}
