import {TextEncoder} from 'text-encoding'
import base64 from 'base64-js'
import crypto from 'crypto-js'

function hexEncode(str) {
  var hex, i
  var result = ''
  for (i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16)
    result += ('000' + hex).slice(-4)
  }
  return result
}

function base64Encode(str) {
  var uint8array = new TextEncoder().encode(str)
  return base64.fromByteArray(uint8array)
}

const Encoding = {
  hex: hexEncode,
  base64: base64Encode,
  md5: crypto.MD5,
  sha1: crypto.SHA1,
  sha256: crypto.SHA256,
  sha512: crypto.SHA512,
  sha3: crypto.SHA3,
  ripemd160: crypto.RIPEMD160
}

export { Encoding }
