/* global document:false */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import esPadStart from 'string.prototype.padstart'

esPadStart.shim()

ReactDOM.render(<App />, document.getElementById('main'))
