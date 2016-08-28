import React, {Component} from 'react'

export default class Output extends Component {
  static propTypes = {
    formatter: React.PropTypes.func.isRequired,
    encoding: React.PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="row">
        <div className="column column-10" style={{ color: '#aaa', textAlign: 'right', marginTop: '25px', fontSize: '2rem' }}>
          {this.props.encoding}
        </div>
        <div className="column column-90">
          <blockquote style={{ backgroundColor: '#f8f8f8', minHeight: '50px', wordBreak: 'break-all', fontSize: '2.5rem', fontFamily: 'monospace', fontWeight: 300 }}>{this.props.formatter()}</blockquote>
        </div>
      </div>
    )
  }
}
