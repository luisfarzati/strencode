import React, {Component} from 'react'
import Input from './input'
import Output from './output'
import utf8 from 'crypto-js/enc-utf8'
import utf16 from 'crypto-js/enc-utf16'
import base64 from 'crypto-js/enc-base64'
import md5 from 'crypto-js/md5'
import sha1 from 'crypto-js/sha1'
import sha256 from 'crypto-js/sha256'
import sha512 from 'crypto-js/sha512'
import sha3 from 'crypto-js/sha3'
import ripemd160 from 'crypto-js/ripemd160'

export default class App extends Component {
  constructor() {
    super()
    this.state = { value: '' }
    this.updateValue = this.updateValue.bind(this)
    this.asUnicodeCodePoint = this.asUnicodeCodePoint.bind(this)
    this.asUTF8 = this.asUTF8.bind(this)
    this.asUTF16 = this.asUTF16.bind(this)
    this.asURI = this.asURI.bind(this)
    this.asBase64 = this.asBase64.bind(this)
    this.asES5 = this.asES5.bind(this)
    this.asES6 = this.asES6.bind(this)
    this.asHTML = this.asHTML.bind(this)
    this.asMD5 = this.asMD5.bind(this)
    this.asSHA1 = this.asSHA1.bind(this)
    this.asSHA256 = this.asSHA256.bind(this)
    this.asSHA512 = this.asSHA512.bind(this)
    this.asSHA3 = this.asSHA3.bind(this)
    this.asRIPEMD160 = this.asRIPEMD160.bind(this)
  }
  updateValue(value = '') {
    this.setState({ value })
  }
  getCodePoints() {
    return Array.from(this.state.value).map(char => char.codePointAt(0))
  }
  asUnicodeCodePoint() {
    const codePoints = this.getCodePoints()
    const hexString = codePoints.map(codePoint => `U+${codePoint.toString(16).padStart(4, '0')}`).join(' ').toUpperCase()
    return hexString
  }
  asUTF8() {
    const utf8bytes = utf8.parse(this.state.value)
    const hexString = utf8bytes.toString().split(/(..)/).filter(x => x).join(' ').toUpperCase()
    return hexString
  }
  asUTF16() {
    const utf16bytes = utf16.parse(this.state.value)
    const hexString = utf16bytes.toString().split(/(..)/).filter(x => x).join(' ').toUpperCase()
    return hexString
  }
  asURI() {
    const uriString = encodeURIComponent(this.state.value)
    return uriString
  }
  asBase64() {
    const utf8bytes = utf8.parse(this.state.value)
    const base64String = base64.stringify(utf8bytes)
    return base64String
  }
  asMD5() {
    const md5String = md5(this.state.value).toString()
    return md5String
  }
  asSHA1() {
    const sha1String = sha1(this.state.value).toString()
    return sha1String
  }
  asSHA256() {
    const sha256String = sha256(this.state.value).toString()
    return sha256String
  }
  asSHA512() {
    const sha512String = sha512(this.state.value).toString()
    return sha512String
  }
  asSHA3() {
    const sha3String = sha3(this.state.value).toString()
    return sha3String
  }
  asRIPEMD160() {
    const ripemd160String = ripemd160(this.state.value).toString()
    return ripemd160String
  }
  asES5() {
    const utf16bytes = utf16.parse(this.state.value)
    const es5String = utf16bytes.toString().split(/(....)/).filter(x => x).map(code => `\\u${code.padStart(4, '0')}`).join('')
    return `'${es5String}'`
  }
  asES6() {
    const codePoints = this.getCodePoints()
    const es6String = codePoints.map(codePoint => `\\u{${codePoint.toString(16).padStart(4, '0')}}`).join('')
    return `'${es6String}'`
  }
  asHTML() {
    const codePoints = this.getCodePoints()
    const htmlString = codePoints.map(codePoint => `&#x${codePoint.toString(16).padStart(4, '0')};`).join('')
    return htmlString
  }
  render() {
    return (
      <div>
        <Input onParse={this.updateValue} />
        <Output formatter={this.asUnicodeCodePoint} encoding="Unicode" />
        <Output formatter={this.asUTF8} encoding="UTF-8" />
        <Output formatter={this.asUTF16} encoding="UTF-16" />
        <Output formatter={this.asURI} encoding="URI" />
        <Output formatter={this.asBase64} encoding="Base64" />
        <Output formatter={this.asMD5} encoding="MD5" />
        <Output formatter={this.asSHA1} encoding="SHA-1" />
        <Output formatter={this.asSHA256} encoding="SHA-256" />
        <Output formatter={this.asSHA512} encoding="SHA-512" />
        <Output formatter={this.asSHA3} encoding="SHA-3" />
        <Output formatter={this.asRIPEMD160} encoding="RIPEMD-160" />
        <Output formatter={this.asES5} encoding="ES5" />
        <Output formatter={this.asES6} encoding="ES6" />
        <Output formatter={this.asHTML} encoding="HTML" />
      </div>
    )
  }
}
