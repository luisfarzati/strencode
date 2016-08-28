/* global document:false */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import stringPadStart from 'string.prototype.padstart'
import arrayFrom from 'array.from'
import 'string.prototype.codepointat'
import 'string.fromcodepoint'

stringPadStart.shim()
arrayFrom.shim()

ReactDOM.render(<App />, document.getElementById('main'))
