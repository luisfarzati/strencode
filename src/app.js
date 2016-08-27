import React, {Component} from 'react'
import Input from './input'
import Output from './output'

export default class App extends Component {
  constructor() {
    super()
    this.state = {}
    this.encode = this.encode.bind(this)
  }
  encode(value) {
    this.setState({ value })
  }
  render() {
    return (
      <div>
        <Input onChange={this.encode} />
        <Output value={this.state.value} encoding="hex" />
        <Output value={this.state.value} encoding="base64" />
        <Output value={this.state.value} encoding="md5" />
        <Output value={this.state.value} encoding="sha1" />
        <Output value={this.state.value} encoding="sha256" />
        <Output value={this.state.value} encoding="sha512" />
        <Output value={this.state.value} encoding="sha3" />
        <Output value={this.state.value} encoding="ripemd160" />
      </div>
    )
  }
}
