import React, {Component} from 'react'

export default class Paragraph extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired
  }
  render () {
    return (<p>{this.props.text}</p>)
  }
}
